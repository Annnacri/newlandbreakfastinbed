import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX, Music, Sliders, Sparkles, X, Play, Pause } from 'lucide-react';
import { ambientSound } from '../utils/audio';

interface AudioPlayerBannerProps {
  isAudioPlaying: boolean;
  setIsAudioPlaying: (playing: boolean) => void;
}

export const AudioPlayerBanner: React.FC<AudioPlayerBannerProps> = ({
  isAudioPlaying,
  setIsAudioPlaying,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const [volume, setVolume] = useState(0.7);

  useEffect(() => {
    const unsub = ambientSound.subscribe((playing, vol) => {
      setIsAudioPlaying(playing);
      setVolume(vol);
      if (playing) {
        setShowPrompt(false);
      }
    });
    return unsub;
  }, [setIsAudioPlaying]);

  const handleToggle = () => {
    const playing = ambientSound.toggle();
    setIsAudioPlaying(playing);
    if (playing) {
      ambientSound.playGoldenChime();
      setShowPrompt(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    ambientSound.setVolume(val);
  };

  return (
    <>
      {/* ---------------------------------------------------- */}
      {/* INITIAL PROMPT (FLOATING PILL ON SCREEN)            */}
      {/* ---------------------------------------------------- */}
      {showPrompt && !isAudioPlaying && (
        <div className="fixed bottom-6 right-6 z-40 max-w-sm animate-bounce-subtle">
          <div className="bg-white/95 backdrop-blur-md border-2 border-amber-500/40 rounded-2xl p-4 shadow-2xl text-[#2c241e] relative flex items-center gap-3.5 pr-10">
            <button
              onClick={() => setShowPrompt(false)}
              className="absolute top-2 right-2 p-1 text-[#8c7b6f] hover:text-[#2c241e] rounded-full cursor-pointer"
              title="Fechar sugestão"
            >
              <X className="w-4 h-4" />
            </button>

            <button
              onClick={handleToggle}
              className="w-11 h-11 rounded-full bg-amber-600 hover:bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md cursor-pointer transition-transform hover:scale-105"
            >
              <Play className="w-5 h-5 ml-0.5" />
            </button>

            <div onClick={handleToggle} className="cursor-pointer">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold block flex items-center gap-1">
                <Music className="w-3 h-3 text-amber-600" />
                <span>Guitarra Portuguesa de Lisboa</span>
              </span>
              <p className="font-serif font-bold text-sm text-[#221a14] leading-snug">
                Ouvir Som de Fado
              </p>
              <p className="text-[11px] text-[#6b5d52]">
                Dedilhado autêntico de 12 cordas e trinados de Lisboa
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ---------------------------------------------------- */}
      {/* FLOATING CONTROLLER (WHEN AUDIO IS ACTIVE OR EXPANDED)*/}
      {/* ---------------------------------------------------- */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="bg-white/95 backdrop-blur-md border border-amber-900/15 rounded-full px-4 py-2.5 shadow-xl flex items-center gap-3 text-[#2c241e]">
          {/* Play/Pause button */}
          <button
            onClick={handleToggle}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
              isAudioPlaying
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
            }`}
            title={isAudioPlaying ? 'Pausar Guitarra de Fado' : 'Tocar Guitarra de Fado'}
          >
            {isAudioPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4 ml-0.5" />
            )}
          </button>

          {/* Equalizer Wave / Title */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex items-center gap-2.5 pr-1"
          >
            <div className="flex items-center gap-0.5 h-4">
              {[0.6, 1, 0.4, 0.8, 0.5, 0.9].map((height, i) => (
                <div
                  key={i}
                  className={`w-0.75 bg-amber-600 rounded-full transition-all duration-300 ${
                    isAudioPlaying ? 'animate-pulse' : 'h-1 opacity-40'
                  }`}
                  style={{
                    height: isAudioPlaying ? `${height * 16}px` : '4px',
                    animationDelay: `${i * 120}ms`,
                  }}
                />
              ))}
            </div>

            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-[#221a14] whitespace-nowrap flex items-center gap-1.5">
                <span>Guitarra de Fado</span>
                {isAudioPlaying && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                )}
              </p>
              <p className="text-[10px] text-[#7a6b5e] font-mono">
                {isAudioPlaying ? 'Fado de Lisboa (12 cordas)' : 'Em pausa'}
              </p>
            </div>
          </div>

          {/* Settings / Volume expand button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full hover:bg-amber-100 text-[#6e5f54] hover:text-[#221a14] transition-colors cursor-pointer"
            title="Ajustar Volume e Notas"
          >
            <Sliders className="w-4 h-4" />
          </button>
        </div>

        {/* Expanded Sound Controls Panel */}
        {isOpen && (
          <div className="absolute bottom-16 left-0 w-72 bg-white/95 backdrop-blur-md border border-amber-900/15 rounded-2xl p-4 shadow-2xl text-[#2c241e] space-y-4 animate-in fade-in slide-in-from-bottom-2">
            <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
              <span className="text-xs font-mono uppercase font-bold text-amber-900 flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-amber-600" />
                <span>Guitarra de Fado</span>
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#8c7b6f] hover:text-[#2c241e] rounded-full cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Fado Info */}
            <div className="bg-[#faf7f2] border border-amber-900/10 rounded-xl p-2.5 text-xs text-[#5a4d43]">
              <p className="font-serif font-bold text-[#221a14] mb-0.5">
                Alma de Lisboa & Tradição
              </p>
              <p className="text-[11px] leading-relaxed">
                Dedilhado melódico inspirado nas casas de fado de Alfama, Mouraria e Bairro Alto.
              </p>
            </div>

            {/* Volume Slider */}
            <div>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[#6e5f54] font-medium flex items-center gap-1">
                  <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                  <span>Volume da Guitarra</span>
                </span>
                <span className="font-mono text-amber-800 font-bold">
                  {Math.round(volume * 100)}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                onChange={handleVolumeChange}
                className="w-full accent-amber-600 cursor-pointer h-1.5 bg-amber-200 rounded-lg"
              />
            </div>

            {/* Test Pluck & Strum interaction */}
            <div className="pt-2.5 border-t border-amber-900/10 space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-[#7a6b5e]">
                <span>Tocar Corda Manualmente:</span>
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => {
                    const freqs = [293.66, 369.99, 440.0, 587.33, 739.99];
                    const f = freqs[Math.floor(Math.random() * freqs.length)];
                    ambientSound.playGuitarPluck(f, 0.8, 0);
                  }}
                  className="flex-1 text-[11px] bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold py-1.5 px-2 rounded-lg cursor-pointer transition-colors text-center"
                  title="Tocar corda com unha de fado"
                >
                  🎸 Dedilhado
                </button>
                <button
                  onClick={() => {
                    const bases = [440.0, 587.33, 659.25];
                    const b = bases[Math.floor(Math.random() * bases.length)];
                    ambientSound.playPortugueseTrill(b, b * 1.12, 0.7, 0);
                  }}
                  className="flex-1 text-[11px] bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 font-bold py-1.5 px-2 rounded-lg cursor-pointer transition-colors text-center"
                  title="Tocar trinado rápido de Fado"
                >
                  ✨ Trinado
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
