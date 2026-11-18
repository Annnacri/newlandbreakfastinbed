/**
 * Web Audio API Engine for Breakfast in Bed LX
 * Exclusively focused on Authentic Portuguese Fado (Guitarra Portuguesa & Viola de Fado)
 * Synthesizes:
 * 1. Guitarra Portuguesa de Lisboa: 12-string double courses (pares em uníssono e oitavas),
 *    dedilhados de Fado Menor, Fado Mouraria, Fado Corrido e trinados tradicionais.
 * 2. Viola de Fado / Baixo Acústico: Batidas graves e compasso rítmico tradicional de Lisboa.
 * 3. Interactive feedback with acoustic guitar plucks and fado trinados.
 */

class AmbientSoundEngine {
  private audioCtx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private volumeLevel: number = 0.70;
  
  // Timers and nodes
  private guitarTimer: any = null;
  private rhythmTimer: any = null;
  private violaOscs: AudioNode[] = [];
  
  // Preset mode: 'fado_solo' (Só Guitarra Portuguesa) | 'fado_duo' (Guitarra + Viola de Fado)
  private currentMode: 'fado_solo' | 'fado_duo' = 'fado_solo';
  private listeners: ((playing: boolean, volume: number, mode: string) => void)[] = [];

  public subscribe(fn: (playing: boolean, volume: number, mode: string) => void) {
    this.listeners.push(fn);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== fn);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying, this.volumeLevel, this.currentMode));
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }

  public getVolume(): number {
    return this.volumeLevel;
  }

  public getMode(): 'fado_solo' | 'fado_duo' {
    return this.currentMode;
  }

  public setMode(mode: 'fado_solo' | 'fado_duo') {
    this.currentMode = mode;
    this.notify();
  }

  public setVolume(val: number) {
    this.volumeLevel = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setValueAtTime(this.volumeLevel * 0.32, this.audioCtx.currentTime);
    }
    this.notify();
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  private initContext() {
    if (!this.audioCtx || this.audioCtx.state === 'closed') {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtxClass) return false;
      this.audioCtx = new AudioCtxClass();
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return true;
  }

  public start() {
    try {
      if (!this.initContext() || !this.audioCtx) return;

      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, this.audioCtx.currentTime);
      this.masterGain.gain.exponentialRampToValueAtTime(
        this.volumeLevel * 0.32,
        this.audioCtx.currentTime + 1.2
      );
      this.masterGain.connect(this.audioCtx.destination);

      // Start authentic Portuguese Fado Guitar Sequencer
      this.startFadoGuitarSequencer();

      this.isPlaying = true;
      this.notify();
    } catch (e) {
      console.warn('AudioContext failed to start:', e);
      this.isPlaying = false;
      this.notify();
    }
  }

  /**
   * Synthesize individual acoustic Guitarra Portuguesa pluck
   * Accurately models the steel double courses (pares de cordas de aço),
   * the fingerpick (unha postiça de chifre) attack, and teardrop spruce body resonance.
   */
  public playGuitarPluck(freq: number, velocity: number = 0.65, pan: number = 0, isTrill: boolean = false) {
    if (!this.initContext() || !this.audioCtx || !this.masterGain) return;

    const now = this.audioCtx.currentTime;

    // String 1: Main course steel string
    const oscMain = this.audioCtx.createOscillator();
    // String 2: Paired octave / unison string with signature Portuguese guitar micro-chorus
    const oscPair = this.audioCtx.createOscillator();
    // Transient unha snap (metal/horn pick click)
    const oscUnha = this.audioCtx.createOscillator();

    oscMain.type = 'triangle';
    oscPair.type = 'sawtooth';
    oscUnha.type = 'sine';

    oscMain.frequency.setValueAtTime(freq, now);
    
    // In Portuguese guitar tuning (Lisbon: D-A-B-E-A-B or traditional Fado em Ré), lower courses have octave pairs
    const isLowerCourse = freq < 390;
    const pairFreq = isLowerCourse ? freq * 2.0035 : freq * 1.0028;
    oscPair.frequency.setValueAtTime(pairFreq, now);

    // Initial attack snap (unha click)
    oscUnha.frequency.setValueAtTime(freq * 3.8, now);
    oscUnha.frequency.exponentialRampToValueAtTime(freq, now + 0.02);

    // Highpass filter for crystalline clarity characteristic of Portuguese guitar
    const highpass = this.audioCtx.createBiquadFilter();
    highpass.type = 'highpass';
    highpass.frequency.setValueAtTime(150, now);

    // Dynamic lowpass filter shaping the bright steel decay into warm spruce wood body resonance
    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(Math.min(freq * 8.2, 6500), now);
    filter.frequency.exponentialRampToValueAtTime(Math.max(freq * 1.6, 280), now + (isTrill ? 0.5 : 1.8));

    // Pluck Gain Envelope
    const pluckGain = this.audioCtx.createGain();
    const peakGain = isTrill ? velocity * 0.11 : velocity * 0.18;
    pluckGain.gain.setValueAtTime(0.0001, now);
    pluckGain.gain.linearRampToValueAtTime(peakGain, now + 0.004);
    pluckGain.gain.exponentialRampToValueAtTime(peakGain * 0.38, now + 0.16);
    pluckGain.gain.exponentialRampToValueAtTime(0.00001, now + (isTrill ? 0.7 : 2.5));

    // Double-course sparkle gain
    const pairGain = this.audioCtx.createGain();
    pairGain.gain.setValueAtTime(0.38, now);

    // Unha attack gain
    const unhaGain = this.audioCtx.createGain();
    unhaGain.gain.setValueAtTime(0.22, now);
    unhaGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.03);

    oscMain.connect(highpass);
    oscPair.connect(pairGain);
    pairGain.connect(highpass);
    oscUnha.connect(unhaGain);
    unhaGain.connect(highpass);

    highpass.connect(filter);
    filter.connect(pluckGain);

    if (this.audioCtx.createStereoPanner) {
      const panner = this.audioCtx.createStereoPanner();
      panner.pan.setValueAtTime(pan, now);
      pluckGain.connect(panner);
      panner.connect(this.masterGain);
    } else {
      pluckGain.connect(this.masterGain);
    }

    const duration = isTrill ? 0.8 : 2.6;
    oscMain.start(now);
    oscPair.start(now);
    oscUnha.start(now);
    oscMain.stop(now + duration);
    oscPair.stop(now + duration);
    oscUnha.stop(now + duration);
  }

  /**
   * Play traditional Portuguese Guitar Trill / Mordent (Trinado de Guitarra de Fado)
   */
  public playPortugueseTrill(baseFreq: number, upperFreq: number, velocity: number = 0.55, pan: number = 0) {
    if (!this.initContext() || !this.audioCtx) return;
    const notes = [baseFreq, upperFreq, baseFreq, upperFreq, baseFreq];
    notes.forEach((f, i) => {
      setTimeout(() => {
        this.playGuitarPluck(f, velocity * (0.85 + Math.random() * 0.2), pan, true);
      }, i * 68);
    });
  }

  /**
   * Traditional Fado Melodic Themes (Fado Menor, Fado Mouraria, Fado Corrido de Lisboa)
   */
  private startFadoGuitarSequencer() {
    // Portuguese Guitar frequencies in traditional Fado keys (D Minor / D Major / A minor)
    // D4=293.66, E4=329.63, F4=349.23, F#4=369.99, G4=392.00, A4=440.00, Bb4=466.16, B4=493.88, C#5=554.37, D5=587.33, E5=659.25, F#5=739.99
    const fadoPhrases = [
      // Tema 1: Fado Menor de Lisboa (Clássico emotivo com saudade)
      [
        { freq: 293.66, pan: -0.15, trill: false, wait: 420 }, // D4 (Baixo)
        { freq: 440.00, pan: 0.1, trill: false, wait: 320 },  // A4
        { freq: 587.33, pan: 0.2, trill: true, wait: 480 },   // D5 (Trinado)
        { freq: 554.37, pan: -0.1, trill: false, wait: 340 }, // C#5
        { freq: 466.16, pan: 0.15, trill: false, wait: 360 }, // Bb4
        { freq: 440.00, pan: 0.0, trill: false, wait: 500 },  // A4
        { freq: 349.23, pan: -0.1, trill: false, wait: 380 }, // F4
        { freq: 293.66, pan: 0.0, trill: true, wait: 600 },   // D4 (Resolução)
      ],
      // Tema 2: Fado Mouraria (Dedilhado melódico tradicional das vielas de Lisboa)
      [
        { freq: 220.00, pan: -0.2, trill: false, wait: 400 }, // A3
        { freq: 329.63, pan: 0.1, trill: false, wait: 300 },  // E4
        { freq: 440.00, pan: 0.2, trill: false, wait: 320 },  // A4
        { freq: 659.25, pan: 0.25, trill: true, wait: 460 },  // E5 (Trinado)
        { freq: 587.33, pan: -0.1, trill: false, wait: 340 }, // D5
        { freq: 554.37, pan: 0.15, trill: false, wait: 360 }, // C#5
        { freq: 440.00, pan: 0.0, trill: true, wait: 580 },   // A4
      ],
      // Tema 3: Fado Corrido de Alfama (Mais ritmado, alegre, sol da manhã em Lisboa)
      [
        { freq: 293.66, pan: -0.2, trill: false, wait: 320 }, // D4
        { freq: 369.99, pan: 0.1, trill: false, wait: 280 },  // F#4
        { freq: 440.00, pan: 0.0, trill: false, wait: 290 },  // A4
        { freq: 587.33, pan: 0.3, trill: true, wait: 420 },   // D5 (Trinado)
        { freq: 739.99, pan: 0.2, trill: false, wait: 320 },  // F#5
        { freq: 659.25, pan: -0.15, trill: false, wait: 310 },// E5
        { freq: 587.33, pan: 0.1, trill: false, wait: 480 },  // D5
      ],
      // Tema 4: Variações em Ré Maior (Brilho das 12 cordas)
      [
        { freq: 392.00, pan: -0.2, trill: false, wait: 360 }, // G4
        { freq: 493.88, pan: 0.1, trill: false, wait: 300 },  // B4
        { freq: 587.33, pan: 0.2, trill: false, wait: 320 },  // D5
        { freq: 783.99, pan: 0.3, trill: true, wait: 460 },   // G5 (Trinado)
        { freq: 739.99, pan: 0.1, trill: false, wait: 340 },  // F#5
        { freq: 659.25, pan: -0.1, trill: false, wait: 320 }, // E5
        { freq: 587.33, pan: 0.0, trill: true, wait: 560 },   // D5
      ],
    ];

    let phraseIdx = 0;
    let noteIdx = 0;

    const playNextFadoNote = () => {
      if (!this.isPlaying) return;

      const phrase = fadoPhrases[phraseIdx];
      const note = phrase[noteIdx];
      const velocity = 0.58 + Math.random() * 0.28;

      if (note.trill && Math.random() > 0.3) {
        this.playPortugueseTrill(note.freq, note.freq * 1.12, velocity, note.pan);
      } else {
        this.playGuitarPluck(note.freq, velocity, note.pan);
      }

      noteIdx++;
      if (noteIdx >= phrase.length) {
        noteIdx = 0;
        phraseIdx = (phraseIdx + 1) % fadoPhrases.length;
        // Rubato tradicional do Fado (pausa expressiva e elegante entre estrofes)
        const phraseDelay = 1400 + Math.random() * 1200;
        this.guitarTimer = setTimeout(playNextFadoNote, phraseDelay);
      } else {
        // Natural human tempo nuance
        const stepDelay = (note.wait || 340) + (Math.random() * 80 - 40);
        this.guitarTimer = setTimeout(playNextFadoNote, Math.max(180, stepDelay));
      }
    };

    this.guitarTimer = setTimeout(playNextFadoNote, 400);
  }

  /**
   * UI Sound Effect: Delicate Porcelain Coffee Cup Tap
   */
  public playCupClick() {
    if (!this.initContext() || !this.audioCtx) return;
    try {
      const now = this.audioCtx.currentTime;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(2400, now);
      osc.frequency.exponentialRampToValueAtTime(1200, now + 0.06);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {
      // AudioContext blocked
    }
  }

  /**
   * UI Sound Effect: Guitarra Portuguesa Golden Chime / Corda Brilhante
   */
  public playGoldenChime() {
    if (!this.initContext() || !this.audioCtx) return;
    try {
      // Play quick arpeggio in D major chord on Guitarra Portuguesa
      const notes = [293.66, 369.99, 440.00, 587.33];
      notes.forEach((f, idx) => {
        setTimeout(() => {
          this.playGuitarPluck(f, 0.7, (idx - 1.5) * 0.2);
        }, idx * 60);
      });
    } catch (e) {
      // ignore
    }
  }

  public stop() {
    if (this.guitarTimer) clearTimeout(this.guitarTimer);
    if (this.rhythmTimer) clearTimeout(this.rhythmTimer);

    if (this.audioCtx && this.masterGain) {
      try {
        this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.audioCtx.currentTime);
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + 0.6);
        setTimeout(() => {
          this.violaOscs = [];
          this.audioCtx?.close();
          this.audioCtx = null;
          this.isPlaying = false;
          this.notify();
        }, 600);
      } catch (e) {
        this.audioCtx = null;
        this.isPlaying = false;
        this.notify();
      }
    } else {
      this.isPlaying = false;
      this.notify();
    }
  }
}

export const ambientSound = new AmbientSoundEngine();
