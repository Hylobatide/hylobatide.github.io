'use strict';
/**
 * ParticleSystem — confettis, impacts, traînées
 */
class Particle {
  constructor(x, y, vx, vy, color, life, size, gravity = 0) {
    this.x = x; this.y = y;
    this.vx = vx; this.vy = vy;
    this.color   = color;
    this.life    = life;
    this.maxLife = life;
    this.size    = size;
    this.gravity = gravity;
  }
  update(dt) {
    this.x  += this.vx * dt;
    this.y  += this.vy * dt;
    this.vy += this.gravity * dt;
    this.life -= dt;
    this.vx *= 1 - dt * 0.5;
  }
  draw(ctx) {
    const a = Math.max(0, this.life / this.maxLife);
    ctx.save();
    ctx.globalAlpha = a;
    ctx.fillStyle   = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.1, this.size * a), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  get dead() { return this.life <= 0; }
}

class ConfettiPiece {
  constructor(x, y, strong = false) {
    const spread = strong ? 380 : 260;
    this.x  = x + (Math.random() - 0.5) * 30;
    this.y  = y;
    this.vx = (Math.random() - 0.5) * spread;
    this.vy = -Math.random() * spread * 0.9 - 60;
    this.grav = 520 + Math.random() * 120;
    this.color = `hsl(${Math.floor(Math.random() * 360)},90%,62%)`;
    this.w = Math.random() * 9 + 4;
    this.h = Math.random() * 5 + 2;
    this.rot    = Math.random() * Math.PI * 2;
    this.rotSpd = (Math.random() - 0.5) * 14;
    this.life   = 2.2 + Math.random() * 0.8;
    this.maxLife = this.life;
  }
  update(dt) {
    this.vy  += this.grav * dt;
    this.x   += this.vx * dt;
    this.y   += this.vy * dt;
    this.rot += this.rotSpd * dt;
    this.vx  *= 1 - dt * 0.35;
    this.life -= dt;
  }
  draw(ctx) {
    if (this.life <= 0) return;
    const a = Math.min(1, this.life / this.maxLife * 1.8);
    ctx.save();
    ctx.globalAlpha = a;
    ctx.fillStyle   = this.color;
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rot);
    ctx.fillRect(-this.w / 2, -this.h / 2, this.w, this.h);
    ctx.restore();
  }
  get dead() { return this.life <= 0; }
}

class ParticleSystem {
  constructor() {
    this.particles = [];
    this.confetti  = [];
    this.MAX       = 350;
  }

  update(dt) {
    this.particles = this.particles.filter(p => { p.update(dt); return !p.dead; });
    this.confetti  = this.confetti.filter(c => { c.update(dt); return !c.dead; });
  }

  draw(ctx) {
    this.confetti.forEach(c => c.draw(ctx));
    this.particles.forEach(p => p.draw(ctx));
  }

  _add(p) {
    if (this.particles.length < this.MAX) this.particles.push(p);
  }

  /* ── burst helpers ── */
  goalExplosion(x, y) {
    const COLORS = ['#FFD700','#FFA500','#FF6B35','#FF4081','#69F0AE','#40C4FF'];
    for (let i = 0; i < 70; i++) {
      const a = (Math.PI * 2 * i) / 70 + Math.random() * 0.3;
      const s = 80 + Math.random() * 280;
      this._add(new Particle(
        x + (Math.random() - 0.5) * 20,
        y + (Math.random() - 0.5) * 20,
        Math.cos(a) * s, Math.sin(a) * s,
        COLORS[i % COLORS.length],
        0.7 + Math.random() * 0.6,
        Math.random() * 6 + 2,
        200
      ));
    }
    for (let i = 0; i < 55; i++) this.confetti.push(new ConfettiPiece(x, y, true));
  }

  collision(x, y) {
    for (let i = 0; i < 22; i++) {
      const a = (Math.PI * 2 * i) / 22;
      const s = 80 + Math.random() * 180;
      this._add(new Particle(x, y, Math.cos(a) * s, Math.sin(a) * s, '#FF3D3D', 0.55, Math.random() * 5 + 2));
    }
  }

  coinPickup(x, y) {
    for (let i = 0; i < 9; i++) {
      const a = (Math.PI * 2 * i) / 9;
      this._add(new Particle(x, y, Math.cos(a) * 110, Math.sin(a) * 110, '#FFD700', 0.45, Math.random() * 3 + 2, 180));
    }
  }

  powerupPickup(x, y, color) {
    for (let i = 0; i < 14; i++) {
      const a = (Math.PI * 2 * i) / 14;
      const s = 70 + Math.random() * 120;
      this._add(new Particle(x, y, Math.cos(a) * s, Math.sin(a) * s, color, 0.6, Math.random() * 5 + 2));
    }
    for (let i = 0; i < 8; i++) this.confetti.push(new ConfettiPiece(x, y, false));
  }

  trail(x, y, color, size = 3) {
    this._add(new Particle(x, y, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, color, 0.18, size));
  }
}
