'use strict';
/**
 * Ball — ballon de foot avec physique, rotation et traînée
 */
class Ball {
  constructor(game) {
    this.game   = game;
    this.x      = 0;
    this.y      = 0;
    this.vx     = 0;
    this.vy     = 0;
    this.radius = 9;
    this.rotation = 0;
    this.isShot   = false;
    this.returnToPlayer = false;

    /* Trail */
    this.trail     = [];
    this.trailTimer = 0;
    this.TRAIL_LEN  = 18;
    this.TRAIL_DT   = 0.018;

    /* Glow pulsation when attached */
    this._glowPhase = 0;
  }

  reset(x, y) {
    this.x = x; this.y = y;
    this.vx = 0; this.vy = 0;
    this.isShot  = false;
    this.returnToPlayer = false;
    this.trail   = [];
    this.rotation = 0;
  }

  /** Lancer le ballon avec une vélocité */
  shoot(vx, vy) {
    this.vx = vx; this.vy = vy;
    this.isShot = true;
    this.returnToPlayer = false;
  }

  update(dt) {
    const f = this.game.field;
    this._glowPhase += dt * 3;

    if (!this.isShot) {
      /* Suit le joueur — géré dans game.js */
      this.trail = [];
      return;
    }

    /* ── Physique ── */
    const friction = Math.pow(0.986, dt * 60);
    this.vx *= friction;
    this.vy *= friction;

    this.x += this.vx * dt;
    this.y += this.vy * dt;

    const speed = Math.hypot(this.vx, this.vy);
    this.rotation += speed * dt * 0.08;

    /* ── Rebond latéraux ── */
    const r = this.radius;
    if (this.x - r < f.x) {
      this.x  = f.x + r;
      this.vx = Math.abs(this.vx) * 0.65;
    }
    if (this.x + r > f.x + f.w) {
      this.x  = f.x + f.w - r;
      this.vx = -Math.abs(this.vx) * 0.65;
    }
    /* Rebond haut (si pas but) */
    if (this.y - r < f.y) {
      this.y  = f.y + r;
      this.vy = Math.abs(this.vy) * 0.55;
    }
    /* Sortie bas → retour au joueur */
    if (this.y + r > f.y + f.h + 25) {
      this.returnToPlayer = true;
    }

    /* Trop lent → retour au joueur */
    if (speed < 28) {
      this.returnToPlayer = true;
    }

    /* ── Trail ── */
    this.trailTimer += dt;
    if (this.trailTimer >= this.TRAIL_DT && speed > 40) {
      this.trailTimer = 0;
      this.trail.push({ x: this.x, y: this.y, s: speed });
      if (this.trail.length > this.TRAIL_LEN) this.trail.shift();
    }
  }

  draw(ctx) {
    /* Trail (seulement si en vol) */
    if (this.isShot && this.trail.length > 1) {
      for (let i = 1; i < this.trail.length; i++) {
        const ratio = i / this.trail.length;
        ctx.save();
        ctx.globalAlpha = ratio * 0.35;
        ctx.fillStyle   = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.trail[i].x, this.trail[i].y, this.radius * ratio * 0.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);

    /* Ombre */
    ctx.save();
    ctx.globalAlpha = 0.18;
    ctx.fillStyle   = '#000';
    ctx.beginPath();
    ctx.ellipse(2, this.radius * 0.55, this.radius * 0.8, this.radius * 0.28, -0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    /* Corps blanc */
    ctx.fillStyle = '#f5f5f5';
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fill();

    /* Pentagones (simplifiés) */
    ctx.fillStyle = '#1a1a1a';
    const patches = [
      { x: 0, y: 0 },
      { x:  this.radius * 0.42, y: -this.radius * 0.42 },
      { x: -this.radius * 0.42, y:  this.radius * 0.42 },
      { x:  this.radius * 0.42, y:  this.radius * 0.42 },
    ];
    patches.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, this.radius * 0.26, 0, Math.PI * 2);
      ctx.fill();
    });

    /* Reflet */
    ctx.fillStyle = 'rgba(255,255,255,0.55)';
    ctx.beginPath();
    ctx.arc(-this.radius * 0.28, -this.radius * 0.28, this.radius * 0.3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    /* Glow quand attaché au joueur */
    if (!this.isShot) {
      ctx.save();
      ctx.globalAlpha = 0.12 + 0.06 * Math.sin(this._glowPhase);
      ctx.fillStyle   = '#ffffff';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius + 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }
}
