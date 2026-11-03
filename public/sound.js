/**
 * 軽快なゲームフィール演出用 Web Audio API サウンドシステム (SoundFX)
 * 外部音声ファイル不要・完全オフライン・超軽量 (0KB)
 */

(function(window) {
  'use strict';

  let audioCtx = null;
  let isMuted = false;

  function getAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  const SoundFX = {
    toggleMute() {
      isMuted = !isMuted;
      localStorage.setItem('shindanshi_sound_muted', isMuted ? '1' : '0');
      return isMuted;
    },

    isMuted() {
      return isMuted;
    },

    init() {
      isMuted = localStorage.getItem('shindanshi_sound_muted') === '1';
    },

    // ボタンの軽いタップ音 (ポップ音)
    playTap() {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      try {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.05);

        gain.gain.setValueAtTime(0.08, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } catch (e) {}
    },

    // 正解音: 軽快なメジャーコード (ピロリン♪)
    playCorrect() {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
        notes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.06);

          gain.gain.setValueAtTime(0, now + idx * 0.06);
          gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.06 + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 0.28);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + idx * 0.06);
          osc.stop(now + idx * 0.06 + 0.3);
        });
      } catch (e) {}
    },

    // 不正解音: やさしい低音 (ボヨン・トーン)
    playIncorrect() {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(280, now);
        osc.frequency.exponentialRampToValueAtTime(140, now + 0.25);

        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } catch (e) {}
    },

    // レベルアップ / ミッション達成ファンファーレ (パラララ〜ン♪)
    playFanfare() {
      if (isMuted) return;
      const ctx = getAudioContext();
      if (!ctx) return;
      try {
        const now = ctx.currentTime;
        const chord = [
          { f: 523.25, t: 0.00, d: 0.12 },
          { f: 659.25, t: 0.10, d: 0.12 },
          { f: 783.99, t: 0.20, d: 0.12 },
          { f: 1046.5, t: 0.32, d: 0.45 }
        ];
        chord.forEach(n => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(n.f, now + n.t);

          gain.gain.setValueAtTime(0, now + n.t);
          gain.gain.linearRampToValueAtTime(0.15, now + n.t + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.d);

          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start(now + n.t);
          osc.stop(now + n.t + n.d);
        });
      } catch (e) {}
    }
  };

  SoundFX.init();
  window.SoundFX = SoundFX;

  // iOS Safari Autoplay Policy解除 (最初のタップでAudioContextをアンロック)
  const unlockAudio = () => {
    getAudioContext();
    document.removeEventListener('touchstart', unlockAudio);
    document.removeEventListener('click', unlockAudio);
  };
  document.addEventListener('touchstart', unlockAudio, { passive: true });
  document.addEventListener('click', unlockAudio, { passive: true });

})(typeof window !== 'undefined' ? window : this);

