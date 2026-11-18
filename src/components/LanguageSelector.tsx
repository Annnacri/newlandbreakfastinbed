import React, { useRef, useState, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useTranslation } from '../hooks';
import { Language } from '../i18n/translations';
import { ambientSound } from '../utils/audio';

interface LanguageSelectorProps {
  isScrolled?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isScrolled = false }) => {
  const { language, setLanguage, languages } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const currentOption = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (code: Language) => {
    ambientSound.playCupClick();
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => {
          ambientSound.playCupClick();
          setIsOpen(!isOpen);
        }}
        aria-label="Select Language"
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border transition-all cursor-pointer text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
          isScrolled
            ? 'border-amber-900/15 bg-white text-[#4a3d33] hover:text-[#221a14] hover:border-amber-400 shadow-xs'
            : 'border-white/20 bg-black/40 text-zinc-100 hover:text-white hover:border-amber-300'
        }`}
      >
        <span className="text-sm">{currentOption.flag}</span>
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider">{currentOption.code}</span>
        <ChevronDown className="w-3 h-3 text-amber-500 opacity-80" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-white border border-amber-900/15 shadow-xl py-1.5 z-50 text-[#221a14] animate-in fade-in-50 zoom-in-95 duration-150">
          <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold border-b border-amber-900/10 mb-1 flex items-center gap-1">
            <Globe className="w-3 h-3" />
            <span>Idioma / Language</span>
          </div>

          <div className="space-y-0.5 px-1">
            {languages.map((opt) => {
              const isSelected = opt.code === language;
              return (
                <button
                  key={opt.code}
                  onClick={() => handleSelect(opt.code)}
                  className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-xl text-xs transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-amber-100 text-amber-900 font-bold'
                      : 'hover:bg-amber-50 text-[#4a3d33] hover:text-[#221a14]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{opt.flag}</span>
                    <span>{opt.nativeName}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-amber-700" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
