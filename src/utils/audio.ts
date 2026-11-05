// Sacred Vedic temple brass bell synthesizer using Web Audio API
export function playTempleBell(volume: number = 0.5) {
  try {
    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const bellGain = ctx.createGain();
    bellGain.gain.setValueAtTime(volume * 0.45, ctx.currentTime);
    bellGain.connect(ctx.destination);

    // Warm, authentic brass temple bell harmonic series
    const harmonics = [440, 880, 1760, 2640, 3520, 4400];
    const now = ctx.currentTime;

    harmonics.forEach((f, idx) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = 'sine';
      // Slight detune for metallic chime richness
      osc.frequency.value = f + (Math.random() * 3 - 1.5);

      const amp = idx === 0 ? 0.2 : 0.35 / idx;
      g.gain.setValueAtTime(amp, now);
      // Gentle exponential decay over 3.2 seconds
      g.gain.exponentialRampToValueAtTime(0.0001, now + 3.2 - idx * 0.4);

      osc.connect(g);
      g.connect(bellGain);
      osc.start(now);
      osc.stop(now + 3.4);
    });
  } catch {
    // AudioContext fallback
  }
}

