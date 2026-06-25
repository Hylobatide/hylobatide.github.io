'use strict';
/**
 * InputManager — clavier WASD/flèches + joystick tactile + bouton tir
 */
class InputManager {
  constructor() {
    this.keys = new Set();

    /* Joystick */
    this.joy = {
      active: false, id: null,
      startX: 0, startY: 0,
      curX: 0, curY: 0,
      dx: 0, dy: 0,
      radius: 52
    };

    /* Tir */
    this.shoot = {
      held: false, id: null,
      startTime: 0,
      charge: 0,      // 0–1
      released: false
    };

    this.isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  init(canvas, shootBtn) {
    this._canvas = canvas;

    /* ── Clavier ── */
    window.addEventListener('keydown', e => {
      this.keys.add(e.code);
      if (e.code === 'Space') {
        e.preventDefault();
        if (!this.shoot.held) this._startShoot();
      }
    });
    window.addEventListener('keyup', e => {
      this.keys.delete(e.code);
      if (e.code === 'Space' && this.shoot.held) this._releaseShoot();
    });

    /* ── Joystick (canvas touch gauche) ── */
    canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      for (const t of e.changedTouches) {
        const rect = canvas.getBoundingClientRect();
        const tx = t.clientX - rect.left;
        if (tx < canvas.width * 0.58 && !this.joy.active) {
          this.joy.active = true;
          this.joy.id     = t.identifier;
          this.joy.startX = tx;
          this.joy.startY = t.clientY - rect.top;
          this.joy.curX   = this.joy.startX;
          this.joy.curY   = this.joy.startY;
          this.joy.dx = 0; this.joy.dy = 0;
        }
      }
    }, { passive: false });

    canvas.addEventListener('touchmove', e => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      for (const t of e.changedTouches) {
        if (t.identifier === this.joy.id) {
          this.joy.curX = t.clientX - rect.left;
          this.joy.curY = t.clientY - rect.top;
          const dx = this.joy.curX - this.joy.startX;
          const dy = this.joy.curY - this.joy.startY;
          const dist = Math.hypot(dx, dy);
          if (dist > 0) {
            const ratio = Math.min(dist, this.joy.radius) / this.joy.radius;
            this.joy.dx = (dx / dist) * ratio;
            this.joy.dy = (dy / dist) * ratio;
          }
        }
      }
    }, { passive: false });

    const endTouch = e => {
      for (const t of e.changedTouches) {
        if (t.identifier === this.joy.id) {
          this.joy.active = false; this.joy.id = null;
          this.joy.dx = 0; this.joy.dy = 0;
        }
      }
    };
    canvas.addEventListener('touchend',    endTouch);
    canvas.addEventListener('touchcancel', endTouch);

    /* ── Bouton tir ── */
    if (shootBtn) {
      const onDown = e => {
        if (e.cancelable) e.preventDefault();
        if (!this.shoot.held) {
          this._startShoot();
          if (e.changedTouches) this.shoot.id = e.changedTouches[0].identifier;
        }
      };
      const onUp = e => {
        const relevantId = e.changedTouches ? e.changedTouches[0]?.identifier : null;
        if (this.shoot.held && (relevantId === this.shoot.id || !e.changedTouches)) {
          this._releaseShoot();
          this.shoot.id = null;
        }
      };
      shootBtn.addEventListener('touchstart',  onDown, { passive: false });
      shootBtn.addEventListener('touchend',    onUp,   { passive: false });
      shootBtn.addEventListener('touchcancel', onUp,   { passive: false });
      shootBtn.addEventListener('mousedown',   onDown);
      shootBtn.addEventListener('mouseup',     onUp);
    }
  }

  _startShoot() {
    this.shoot.held      = true;
    this.shoot.startTime = performance.now();
    this.shoot.released  = false;
    this.shoot.charge    = 0;
  }

  _releaseShoot() {
    this.shoot.released = true;
    this.shoot.held     = false;
  }

  update() {
    if (this.shoot.held) {
      const elapsed = (performance.now() - this.shoot.startTime) / 1000;
      this.shoot.charge = Math.min(1, elapsed / 1.0);
    }
  }

  /** Consomme le tir et retourne la charge (0–1), ou -1 si pas tiré */
  consumeShoot() {
    if (!this.shoot.released) return -1;
    const c = this.shoot.charge;
    this.shoot.released = false;
    this.shoot.charge   = 0;
    return c;
  }

  /** Retourne un vecteur direction normalisé {dx, dy} */
  getMovement() {
    let dx = 0, dy = 0;
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft'))  dx -= 1;
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) dx += 1;
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp'))    dy -= 1;
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown'))  dy += 1;

    dx += this.joy.dx;
    dy += this.joy.dy;

    const len = Math.hypot(dx, dy);
    if (len > 1) { dx /= len; dy /= len; }
    return { dx, dy };
  }

  drawJoystick(ctx) {
    if (!this.joy.active) return;
    const { startX, startY, curX, curY, radius } = this.joy;
    const dx   = curX - startX;
    const dy   = curY - startY;
    const dist = Math.hypot(dx, dy);
    const tx   = startX + (dist > radius ? (dx / dist) * radius : dx);
    const ty   = startY + (dist > radius ? (dy / dist) * radius : dy);

    ctx.save();
    /* Base */
    ctx.globalAlpha = 0.22;
    ctx.fillStyle   = '#fff';
    ctx.beginPath(); ctx.arc(startX, startY, radius, 0, Math.PI * 2); ctx.fill();

    ctx.globalAlpha = 0.45;
    ctx.strokeStyle = '#fff';
    ctx.lineWidth   = 2;
    ctx.beginPath(); ctx.arc(startX, startY, radius, 0, Math.PI * 2); ctx.stroke();

    /* Thumb */
    ctx.globalAlpha = 0.75;
    ctx.fillStyle   = '#fff';
    ctx.shadowColor = 'rgba(255,255,255,0.4)';
    ctx.shadowBlur  = 10;
    ctx.beginPath(); ctx.arc(tx, ty, radius * 0.38, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  }
}
