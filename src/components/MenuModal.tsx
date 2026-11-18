import React, { useState } from 'react';
import { X, Sparkles, Utensils, CheckCircle2, ChevronRight, Filter } from 'lucide-react';
import { MENU_ADDONS, getLocalizedBoxes } from '../data/mockData';
import { BreakfastBox } from '../types';
import { ambientSound } from '../utils/audio';
import { useTranslation } from '../hooks';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectBox: (box: BreakfastBox) => void;
}

export const MenuModal: React.FC<MenuModalProps> = ({
  isOpen,
  onClose,
  onSelectBox,
}) => {
  const { t, language } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  if (!isOpen) return null;

  const boxes = getLocalizedBoxes(language);
  const filteredBoxes =
    activeCategory === 'all'
      ? boxes
      : boxes.filter((b) => b.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#fcfbf9] border border-amber-900/15 rounded-3xl w-full max-w-4xl overflow-hidden shadow-2xl relative text-[#2d241d] flex flex-col max-h-[88vh]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-amber-900/10 flex items-center justify-between bg-[#f5ede2]">
          <div>
            <span className="text-[11px] font-mono uppercase text-amber-800 tracking-wider font-bold">
              Breakfast in Bed LX • Carte du Jour
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#221a14]">
              Gourmet Morning Menu & Provenance
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#6b5d52] hover:text-[#221a14] hover:bg-amber-900/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-6 py-3 bg-[#ede2d3] border-b border-amber-900/10 flex items-center gap-2 overflow-x-auto">
          {[
            { id: 'all', label: 'Todos os Menus' },
            { id: 'vitality', label: 'Vitamina C' },
            { id: 'heritage', label: 'Português Tradicional' },
            { id: 'luxury', label: 'Brunch Completo' },
            { id: 'summer', label: 'Summer Fresco' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                ambientSound.playCupClick();
                setActiveCategory(cat.id);
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-600 text-white font-semibold shadow-xs'
                  : 'bg-white text-[#5c4f44] hover:text-[#221a14] hover:bg-amber-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Breakfast Boxes Detailed Cards */}
          <div className="space-y-6">
            {filteredBoxes.map((box) => (
              <div
                key={box.id}
                className="bg-white border border-amber-900/10 rounded-2xl p-6 hover:border-amber-400 hover:shadow-md transition-all shadow-xs"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono uppercase text-amber-800 font-bold">
                        {box.portugueseSubtitle}
                      </span>
                      <span className="text-[11px] bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full text-amber-900 font-mono font-medium">
                        {box.serves}
                      </span>
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-[#221a14]">{box.name}</h4>
                    <p className="text-sm text-[#5c4f44] font-normal mt-1 max-w-xl">
                      {box.description}
                    </p>
                  </div>
                  <div className="text-left md:text-right shrink-0">
                    <span className="font-serif text-3xl font-bold text-amber-800 block">
                      €{box.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onSelectBox(box);
                      }}
                      className="mt-2 inline-flex items-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                    >
                      <span>{t.btnOrderBox}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Items & Provenance in this box */}
                <div className="border-t border-amber-900/10 pt-4 mt-4">
                  <p className="text-xs font-mono uppercase text-amber-900 font-bold mb-3 flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-amber-600" />
                    <span>{t.includes}:</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {box.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-[#faf7f2] p-3 rounded-xl border border-amber-900/10"
                      >
                        <p className="text-sm font-bold text-[#221a14]">{item.name}</p>
                        <p className="text-xs text-[#6e5f54] mt-0.5">{item.description}</p>
                        {item.origin && (
                          <span className="inline-block text-[10px] font-mono text-amber-800 mt-1.5 bg-amber-100/70 px-2 py-0.5 rounded">
                            Provenance: {item.origin}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons Section in Menu */}
          <div className="border-t border-amber-900/10 pt-6">
            <h4 className="font-serif text-xl font-bold text-[#221a14] mb-3">
              Extras & Salgados Tradicionais Portugueses
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {MENU_ADDONS.map((addon) => (
                <div
                  key={addon.id}
                  className="bg-white p-4 rounded-xl border border-amber-900/10 flex items-center justify-between shadow-xs"
                >
                  <div className="pr-3">
                    <p className="text-sm font-bold text-[#221a14]">{addon.name}</p>
                    <p className="text-xs text-[#6e5f54] mt-0.5">{addon.description}</p>
                  </div>
                  <span className="font-mono text-base font-bold text-amber-800 shrink-0">
                    €{addon.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#f5ede2] border-t border-amber-900/10 flex items-center justify-between">
          <p className="text-xs text-[#6e5f54]">
            Freshly prepared every morning • Delivered to hotel suites & Airbnbs
          </p>
          <button
            onClick={onClose}
            className="text-xs font-mono uppercase text-amber-900 font-bold hover:text-amber-700 cursor-pointer"
          >
            Close Menu
          </button>
        </div>
      </div>
    </div>
  );
};
