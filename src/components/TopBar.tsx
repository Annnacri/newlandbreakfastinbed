import React from 'react';
import { Volume2, VolumeX, Calendar, QrCode, Utensils } from 'lucide-react';
import { ambientSound } from '../utils/audio';
import { LanguageSelector } from './LanguageSelector';
import { useTranslation } from '../hooks';

interface TopBarProps {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
  onOpenQR: () => void;
  onNavigateSection: (sectionId: string) => void;
  isAudioPlaying: boolean;
  setIsAudioPlaying: (playing: boolean) => void;
  scrollProgress: number;
}

export const TopBar: React.FC<TopBarProps> = ({
  onOpenBooking,
  onOpenMenu,
  onOpenQR,
  onNavigateSection,
  isAudioPlaying,
  setIsAudioPlaying,
  scrollProgress,
}) => {
  const { t } = useTranslation();

  const toggleAudio = () => {
    const newState = ambientSound.toggle();
    setIsAudioPlaying(newState);
  };

  const isScrolled = scrollProgress > 0.02;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#ffffff]/92 backdrop-blur-md border-b border-amber-900/10 py-3 shadow-md'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Brand Title */}
        <button
          onClick={() => onNavigateSection('hero')}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
        >
          <span className={`font-serif text-lg sm:text-2xl font-bold tracking-tight transition-colors whitespace-nowrap ${
            isScrolled ? 'text-[#221a14] group-hover:text-amber-700' : 'text-white group-hover:text-amber-300'
          }`}>
            Breakfast in Bed LX
          </span>
        </button>

        {/* Zone 2: Nav Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-7">
          <button
            onClick={() => onNavigateSection('experience')}
            className={`text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              isScrolled ? 'text-[#5a4d43] hover:text-[#221a14]' : 'text-zinc-200 hover:text-white'
            }`}
          >
            {t.navExperience}
          </button>
          <button
            onClick={() => onNavigateSection('why-us')}
            className={`text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              isScrolled ? 'text-[#5a4d43] hover:text-[#221a14]' : 'text-zinc-200 hover:text-white'
            }`}
          >
            {t.navHowItWorks}
          </button>
          <button
            onClick={() => onNavigateSection('collections')}
            className={`text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              isScrolled ? 'text-[#5a4d43] hover:text-[#221a14]' : 'text-zinc-200 hover:text-white'
            }`}
          >
            {t.navMenus} & Fotos
          </button>
          <button
            onClick={onOpenMenu}
            className={`text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 flex items-center gap-1.5 ${
              isScrolled ? 'text-amber-800 hover:text-amber-600' : 'text-amber-300 hover:text-amber-100'
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>{t.btnViewFullMenu.split('&')[0] || 'Menu Gourmet'}</span>
          </button>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Language Selector (PT, EN, FR, ES, DE, IT) */}
          <LanguageSelector isScrolled={isScrolled} />

          {/* QR Code Sticker Trigger */}
          <button
            onClick={() => {
              ambientSound.playCupClick();
              onOpenQR();
            }}
            title="Ver / Descarregar Autocolante QR Code 8x8cm"
            aria-label="Ver QR Code do website"
            className={`p-2 sm:p-2.5 rounded-full border transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 flex items-center gap-1.5 ${
              isScrolled
                ? 'border-amber-900/15 bg-white text-[#5a4d43] hover:text-[#221a14] hover:border-amber-400'
                : 'border-white/20 bg-black/30 text-zinc-200 hover:text-white hover:border-amber-300'
            }`}
          >
            <QrCode className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
            <span className="hidden xl:inline text-[11px] font-bold uppercase tracking-wider">
              {t.navQRCode}
            </span>
          </button>

          {/* Sound toggle */}
          <button
            onClick={toggleAudio}
            title={isAudioPlaying ? t.btnSoundMute : t.btnSoundPlay}
            aria-label={isAudioPlaying ? t.btnSoundMute : t.btnSoundPlay}
            className={`p-2 sm:p-2.5 rounded-full border transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              isAudioPlaying
                ? 'border-amber-600 bg-amber-100 text-amber-900 shadow-xs'
                : isScrolled
                ? 'border-amber-900/15 bg-white text-[#5a4d43] hover:text-[#221a14]'
                : 'border-white/20 bg-black/30 text-zinc-200 hover:text-white'
            }`}
          >
            {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
          </button>

          {/* Booking CTA */}
          <button
            onClick={onOpenBooking}
            className="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs py-2.5 px-3.5 sm:px-5 rounded-full transition-all duration-200 tracking-wider uppercase shadow-md cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.btnBookBreakfast}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
