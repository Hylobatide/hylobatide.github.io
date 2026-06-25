'use strict';
/**
 * StorageManager — persistence via localStorage
 */
class StorageManager {
  constructor() {
    this.KEY = 'lastStriker_v2';
    this.defaults = {
      highScore    : 0,
      totalGoals   : 0,
      totalCoins   : 0,
      coins        : 0,
      upgrades: { speed: 0, shootPower: 0, ballControl: 0, coinChance: 0 },
      settings: { sound: true, vibration: true },
      achievements: { firstGoal: false, level10: false, coins100: false, goals50: false },
      missions: {
        goals3  : { progress: 0, done: false, reward: 30 },
        coins20 : { progress: 0, done: false, reward: 50 },
        noSprint: { done: false, reward: 40 }
      },
      lastDailyReward: null
    };
  }

  load() {
    try {
      const raw = localStorage.getItem(this.KEY);
      if (!raw) return this._clone(this.defaults);
      return this._merge(this._clone(this.defaults), JSON.parse(raw));
    } catch (_) {
      return this._clone(this.defaults);
    }
  }

  save(data) {
    try { localStorage.setItem(this.KEY, JSON.stringify(data)); } catch (_) {}
  }

  reset() {
    try { localStorage.removeItem(this.KEY); } catch (_) {}
  }

  _clone(o)  { return JSON.parse(JSON.stringify(o)); }

  _merge(base, over) {
    for (const k in over) {
      if (k in base && typeof base[k] === 'object' && base[k] !== null && !Array.isArray(base[k])) {
        this._merge(base[k], over[k]);
      } else if (k in base) {
        base[k] = over[k];
      }
    }
    return base;
  }
}
