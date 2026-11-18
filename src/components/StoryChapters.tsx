import React, { useState } from 'react';
import {
  Clock,
  Hotel,
  ShieldCheck,
  Truck,
  Heart,
  MapPin,
  Star,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  QrCode,
  Smartphone,
} from 'lucide-react';
import { BreakfastBox } from '../types';
import { BREAKFAST_BOXES, MORNING_SCENARIOS, GUEST_REVIEWS, getLocalizedBoxes } from '../data/mockData';
import { QRCodeSticker } from './QRCodeSticker';
import { MenuGallerySlider } from './MenuGallerySlider';
import { useTranslation } from '../hooks';
import { ambientSound } from '../utils/audio';

interface StoryChaptersProps {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
  onSelectBox: (box: BreakfastBox) => void;
  onOpenQR?: () => void;
}

export const StoryChapters: React.FC<StoryChaptersProps> = ({
  onOpenBooking,
  onOpenMenu,
  onSelectBox,
  onOpenQR,
}) => {
  const { t, language } = useTranslation();
  const currentBoxes = getLocalizedBoxes(language);
  const [activeScenarioId, setActiveScenarioId] = useState(MORNING_SCENARIOS[0].id);

  const activeScenario =
    MORNING_SCENARIOS.find((s) => s.id === activeScenarioId) || MORNING_SCENARIOS[0];

  return (
    <div className="relative bg-[#faf7f2] text-[#2c241e] overflow-hidden">
      {/* ---------------------------------------------------- */}
      {/* SECTION 5: WHY BREAKFAST IN BED LX / WHY US          */}
      {/* ---------------------------------------------------- */}
      <section id="why-us" className="py-20 sm:py-28 px-6 sm:px-12 border-t border-amber-900/10 bg-[#ffffff] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-amber-800 uppercase bg-amber-100/80 border border-amber-300 px-3.5 py-1.5 rounded-full inline-block mb-4 shadow-xs font-bold">
              05 • Why Breakfast in Bed LX
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#221a14] mb-4">
              {t.scenarioTitle}
            </h2>
            <p className="text-base sm:text-lg text-[#5a4d43] font-normal leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>

          {/* 4 Pillars of Excellence */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-[#faf7f2] border border-amber-900/10 rounded-2xl p-6 hover:border-amber-500/50 hover:shadow-lg transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#221a14] mb-2">{t.step2Title}</h3>
              <p className="text-sm text-[#63554b] font-normal leading-relaxed">
                {t.step2Desc}
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-amber-900/10 rounded-2xl p-6 hover:border-amber-500/50 hover:shadow-lg transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mb-4">
                <Hotel className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#221a14] mb-2">{t.step3Title}</h3>
              <p className="text-sm text-[#63554b] font-normal leading-relaxed">
                {t.step3Desc}
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-amber-900/10 rounded-2xl p-6 hover:border-amber-500/50 hover:shadow-lg transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#221a14] mb-2">100% Terroir Português</h3>
              <p className="text-sm text-[#63554b] font-normal leading-relaxed">
                {t.trust1} & {t.trust3}
              </p>
            </div>

            <div className="bg-[#faf7f2] border border-amber-900/10 rounded-2xl p-6 hover:border-amber-500/50 hover:shadow-lg transition-all shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#221a14] mb-2">{t.step1Title}</h3>
              <p className="text-sm text-[#63554b] font-normal leading-relaxed">
                {t.step1Desc}
              </p>
            </div>
          </div>

          {/* Tailored Morning Scenarios */}
          <div className="bg-[#f5ede2] border border-amber-900/10 rounded-3xl p-6 sm:p-10 mb-16 shadow-md">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
                {t.scenarioSubtitle}
              </span>
              <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#221a14] mt-1">
                {t.heroTagline}
              </h3>
            </div>

            {/* Scenario Tabs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {MORNING_SCENARIOS.map((scenario) => {
                const isActive = scenario.id === activeScenarioId;
                return (
                  <button
                    key={scenario.id}
                    onClick={() => {
                      ambientSound.playCupClick();
                      setActiveScenarioId(scenario.id);
                    }}
                    className={`p-4 rounded-xl text-left transition-all duration-300 border cursor-pointer ${
                      isActive
                        ? 'bg-amber-600 text-white border-amber-600 shadow-md ring-2 ring-amber-300'
                        : 'bg-white border-amber-900/10 hover:border-amber-400 hover:bg-amber-50 text-[#3d3229]'
                    }`}
                  >
                    <p className={`text-xs font-mono uppercase mb-1 ${isActive ? 'text-amber-100 font-bold' : 'text-amber-800 font-medium'}`}>
                      {scenario.category}
                    </p>
                    <p className={`font-serif text-sm sm:text-base font-bold ${isActive ? 'text-white' : 'text-[#221a14]'}`}>
                      {scenario.title}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Scenario Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl p-6 sm:p-8 border border-amber-900/10 shadow-sm">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-800 font-bold">
                  {activeScenario.category}
                </span>
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-[#221a14]">
                  "{activeScenario.quote}"
                </h4>
                <p className="text-[#5a4d43] leading-relaxed text-sm sm:text-base font-normal">
                  {activeScenario.story}
                </p>

                <div className="bg-[#faf7f2] border border-amber-900/10 p-4 rounded-xl space-y-2">
                  <div className="flex items-start gap-2.5">
                    <Heart className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-[#4a3f36]">
                      <strong className="text-amber-900">Ideal:</strong> {activeScenario.idealFor}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <p className="text-xs text-[#4a3f36]">
                      <strong className="text-amber-900">Lisbon Tip:</strong> {activeScenario.locationTip}
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      const box = BREAKFAST_BOXES.find((b) => b.id === activeScenario.recommendedBoxId) || BREAKFAST_BOXES[0];
                      onSelectBox(box);
                    }}
                    className="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-full transition-colors duration-200 tracking-wider uppercase shadow-md cursor-pointer whitespace-nowrap"
                  >
                    {t.btnOrderBox}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-4/3 rounded-xl overflow-hidden border border-amber-900/10 shadow-md">
                <img
                  src={activeScenario.image}
                  alt={activeScenario.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                  <p className="text-xs text-amber-100 font-mono font-medium">
                    Menu Sugerido: {BREAKFAST_BOXES.find((b) => b.id === activeScenario.recommendedBoxId)?.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Proof & Tourist Testimonials */}
          <div className="border-t border-amber-900/10 pt-16">
            <div className="text-center mb-10">
              <span className="text-xs font-mono tracking-widest text-amber-800 uppercase font-bold">
                {t.reviewsBadge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#221a14] mt-1">
                {t.reviewsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {GUEST_REVIEWS.map((review, idx) => (
                <div
                  key={idx}
                  className="bg-[#faf7f2] border border-amber-900/10 rounded-2xl p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-[#4a3f36] font-normal italic leading-relaxed">
                      "{review.comment}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-amber-900/10 mt-4">
                    <p className="text-sm font-bold text-[#221a14]">{review.name}</p>
                    <p className="text-xs text-[#7a6b5e]">{review.origin} • {review.stay}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION 6: SELECTED BREAKFAST / BRUNCH COLLECTIONS  */}
      {/* ---------------------------------------------------- */}
      <section id="collections" className="py-20 sm:py-28 px-6 sm:px-12 bg-[#faf7f2] border-t border-amber-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-amber-800 uppercase bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full inline-block mb-4 font-bold">
                06 • Menus & Caixas
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-[#221a14] mb-3">
                {t.menuSectionTitle}
              </h2>
              <p className="text-base sm:text-lg text-[#5a4d43] font-normal max-w-2xl">
                {t.menuSectionSubtitle}
              </p>
            </div>

            <button
              onClick={onOpenMenu}
              className="self-start md:self-auto text-amber-800 hover:text-amber-600 font-bold text-xs uppercase tracking-wider flex items-center gap-2 border-b border-amber-600/50 pb-1 hover:border-amber-600 transition-all cursor-pointer whitespace-nowrap"
            >
              <span>{t.btnViewFullMenu}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Specialty Food Photos Carousel in Menus Section */}
          <MenuGallerySlider onOpenBooking={onOpenBooking} />

          {/* Grid of Breakfast Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentBoxes.map((box) => (
              <div
                key={box.id}
                className="bg-white rounded-2xl border border-amber-900/10 overflow-hidden flex flex-col justify-between group hover:border-amber-500/50 hover:shadow-xl transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="relative aspect-16/10 overflow-hidden bg-amber-100">
                    <img
                      src={box.image}
                      alt={box.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {box.popular && (
                      <div className="absolute top-3 right-3 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                        {t.badgeFeatured}
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md text-[#221a14] text-xs px-3 py-1 rounded-full border border-amber-900/10 font-mono font-medium shadow-xs">
                      {box.serves}
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-mono uppercase text-amber-800 font-bold mb-1">
                      {box.portugueseSubtitle}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#221a14] mb-2 group-hover:text-amber-700 transition-colors">
                      {box.name}
                    </h3>
                    <p className="text-sm text-[#5a4d43] font-normal mb-4 line-clamp-2">
                      {box.description}
                    </p>

                    <div className="space-y-2 border-t border-amber-900/10 pt-4 mb-4">
                      {box.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#4a3f36]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-amber-900/10 flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-xs text-[#7a6b5e] block font-mono">{t.priceFrom}</span>
                    <span className="font-serif text-2xl font-bold text-amber-800">
                      €{box.price.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <button
                    onClick={() => onSelectBox(box)}
                    className="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-all duration-200 uppercase tracking-wider cursor-pointer whitespace-nowrap shadow-sm"
                  >
                    {t.btnOrderBox}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Lisbon Neighborhood Delivery Coverage Badge */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-amber-900/10 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
              <span className="text-xs sm:text-sm text-[#4a3f36] font-normal">
                <strong className="text-[#221a14] font-bold">{t.deliveryCoverageTitle}</strong> {t.deliveryCoverageText}
              </span>
            </div>
            <a
              href="https://www.breakfasinbedlx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-amber-800 hover:text-amber-600 font-bold flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>breakfasinbedlx.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* SECTION: INSTANT QR CODE & HOTEL CONCIERGE KIT       */}
      {/* ---------------------------------------------------- */}
      <section id="qrcode-kit" className="py-16 sm:py-24 px-6 sm:px-12 bg-[#1c1815] text-[#f7f3ee] border-t border-amber-900/20 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Text & Features */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
                <QrCode className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono tracking-widest text-amber-300 uppercase font-bold">
                  {t.qrSectionBadge}
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                {t.qrSectionTitle}
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                {t.qrSectionDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Smartphone className="w-4 h-4" />
                    <span>{t.qrInstantTitle}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {t.qrInstantDesc}
                  </p>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 p-4 rounded-2xl space-y-2">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                    <Hotel className="w-4 h-4" />
                    <span>{t.qrHostTitle}</span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {t.qrHostDesc}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="bg-amber-500 hover:bg-amber-400 text-black font-black text-xs sm:text-sm py-3 px-6 rounded-full transition-all tracking-wider uppercase shadow-lg cursor-pointer whitespace-nowrap"
                >
                  {t.btnOrderNow}
                </button>
                {onOpenQR && (
                  <button
                    onClick={onOpenQR}
                    className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm py-3 px-6 rounded-full transition-all tracking-wider uppercase cursor-pointer whitespace-nowrap"
                  >
                    {t.btnViewSticker}
                  </button>
                )}
              </div>
            </div>

            {/* Sticker Component */}
            <div className="lg:col-span-6 flex justify-center">
              <QRCodeSticker />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* FOOTER                                               */}
      {/* ---------------------------------------------------- */}
      <footer className="py-12 px-6 sm:px-12 bg-[#12100e] text-[#a89c92] border-t border-amber-900/20 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-serif text-xl font-bold text-white block mb-1">
              Breakfast in Bed LX
            </span>
            <p className="text-zinc-400">
              {t.footerTagline}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                const el = document.getElementById('why-us');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-amber-400 transition-colors cursor-pointer font-medium"
            >
              {t.navHowItWorks}
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('collections');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-amber-400 transition-colors cursor-pointer font-medium"
            >
              {t.navMenus}
            </button>
            <button
              onClick={onOpenMenu}
              className="hover:text-amber-400 transition-colors cursor-pointer font-medium"
            >
              Menu
            </button>
            <button
              onClick={onOpenBooking}
              className="text-amber-500 hover:text-amber-400 font-bold transition-colors cursor-pointer"
            >
              {t.btnBookBreakfast}
            </button>
          </div>

          <p className="text-[11px] text-zinc-500">
            {t.footerLegal}
          </p>
        </div>
      </footer>
    </div>
  );
};
