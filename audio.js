'use strict';
/**
 * AudioManager — sons synthétisés (pas de fichiers audio)
 */
class AudioManager {
  constructor() {
    this.ctx      = null;
    this.master   = null;
    this.enabled  = true;
    this._ready   = false;
  }

  init() {
    if (this._ready) return;
    try {
      this.ctx    = new (window.AudioContext || window.webkitAudioContext)();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.28;
      this.master.connect(this.ctx.destination);
      this._ready = true;
    } catch (_) {}
  }

  setEnabled(v) {
    this.enabled = v;
    if (this.master) this.master.gain.value = v ? 0.28 : 0;
  }

  _resume() {
    if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
  }

  _osc(type, freq, startGain, dur, t0, freqEnd) {
    if (!this._ready || !this.enabled) return;
    const ctx = this.ctx;
    const o   = ctx.createOscillator();
    const g   = ctx.createGain();
    o.connect(g); g.connect(this.master);
    o.type = type;
    o.frequency.setValueAtTime(freq, t0);
    if (freqEnd !== undefined) o.frequency.exponentialRampToValueAtTime(freqEnd, t0 + dur);
    g.gain.setValueAtTime(startGain, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    o.start(t0); o.stop(t0 + dur);
  }

  _noise(startGain, dur, t0) {
    if (!this._ready || !this.enabled) return;
    const ctx  = this.ctx;
    const size = Math.ceil(ctx.sampleRate * dur);
    const buf  = ctx.createBuffer(1, size, ctx.sampleRate);
    const d    = buf.getChannelData(0);
    for (let i = 0; i < size; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / size);
    const src = ctx.createBufferSource();
    const g   = ctx.createGain();
    src.buffer = buf;
    src.connect(g); g.connect(this.master);
    g.gain.setValueAtTime(startGain, t0);
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
    src.start(t0); src.stop(t0 + dur);
  }

  playShoot(charge = 0.5) {
    if (!this._ready || !this.enabled) return;
    this._resume();
    const t = this.ctx.currentTime;
    const f = 180 + charge * 380;
    this._osc('sine',   f,       0.5, 0.18, t, f * 0.3);
    this._osc('square', f * 1.5, 0.15, 0.1, t);
    this._noise(0.2, 0.05, t);
  }

  playCollision() {
    if (!this._ready || !this.enabled) return;
    this._resume();
    const t = this.ctx.currentTime;
    this._noise(1.0, 0.22, t);
    this._osc('sawtooth', 120, 0.4, 0.2, t, 40);
  }

  playGoal() {
    if (!this._ready || !this.enabled) return;
    this._resume();
    const t = this.ctx.currentTime;
    const notes = [523, 659, 784, 880, 1047];
    notes.forEach((f, i) => {
      const t0 = t + i * 0.13;
      this._osc('square', f,   0.35, 0.4, t0);
      this._osc('sine',   f*2, 0.1,  0.3, t0);
    });
  }

  playCoin() {
    if (!this._ready || !this.enabled) return;
    this._resume();
    const t = this.ctx.currentTime;
    this._osc('sine', 900,  0.25, 0.08, t, 1400);
    this._osc('sine', 1400, 0.12, 0.12, t + 0.04);
  }

  playPowerup() {
    if (!this._ready || !this.enabled) return;
    this._resume();
    const t = this.ctx.currentTime;
    [440, 660, 880].forEach((f, i) => {
      this._osc('sine', f, 0.2, 0.2, t + i * 0.07);
    });
  }

  playLevel() {
    if (!this._ready || !this.enabled) return;
    this._resume();
    const t = this.ctx.currentTime;
    const notes = [330, 392, 494, 587];
    notes.forEach((f, i) => {
      this._osc('sine', f, 0.25, 0.35, t + i * 0.1);
    });
  }
}
