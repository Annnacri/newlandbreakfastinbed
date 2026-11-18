/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { CinematicScroller } from './components/CinematicScroller';
import { StoryChapters } from './components/StoryChapters';
import { BookingModal } from './components/BookingModal';
import { MenuModal } from './components/MenuModal';
import { QRCodeModal } from './components/QRCodeModal';
import { AudioPlayerBanner } from './components/AudioPlayerBanner';
import { BreakfastBox } from './types';
import { BREAKFAST_BOXES } from './data/mockData';
import { LanguageProvider } from './context/LanguageContext';
import { ambientSound } from './utils/audio';

function MainLanding() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQROpen, setIsQROpen] = useState(false);
  const [selectedBoxForBooking, setSelectedBoxForBooking] = useState<BreakfastBox | null>(null);

  const handleOpenBookingWithBox = (box: BreakfastBox) => {
    ambientSound.playGoldenChime();
    setSelectedBoxForBooking(box);
    setIsBookingOpen(true);
  };

  const handleOpenGeneralBooking = () => {
    ambientSound.playGoldenChime();
    setSelectedBoxForBooking(BREAKFAST_BOXES[0]);
    setIsBookingOpen(true);
  };

  const handleOpenMenu = () => {
    ambientSound.playCupClick();
    setIsMenuOpen(true);
  };

  const handleOpenQR = () => {
    ambientSound.playCupClick();
    setIsQROpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    ambientSound.playCupClick();
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#26201b] selection:bg-amber-600 selection:text-white relative">
      {/* Fixed Luxury Navigation Header */}
      <TopBar
        onOpenBooking={handleOpenGeneralBooking}
        onOpenMenu={handleOpenMenu}
        onOpenQR={handleOpenQR}
        onNavigateSection={handleNavigateSection}
        isAudioPlaying={isAudioPlaying}
        setIsAudioPlaying={setIsAudioPlaying}
        scrollProgress={scrollProgress}
      />

      {/* Main Cinematic Scroll-Driven Experience */}
      <main>
        <CinematicScroller
          onOpenBooking={handleOpenGeneralBooking}
          onOpenMenu={handleOpenMenu}
          scrollProgress={scrollProgress}
          setScrollProgress={setScrollProgress}
        />

        {/* Narrative Chapters & Hospitality Details */}
        <StoryChapters
          onSelectBox={handleOpenBookingWithBox}
          onOpenBooking={handleOpenGeneralBooking}
          onOpenMenu={handleOpenMenu}
          onOpenQR={handleOpenQR}
        />
      </main>

      {/* Interactive Soundscape Player & Floating Controller */}
      <AudioPlayerBanner
        isAudioPlaying={isAudioPlaying}
        setIsAudioPlaying={setIsAudioPlaying}
      />

      {/* Booking & Menu Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialSelectedBox={selectedBoxForBooking}
      />

      <MenuModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectBox={handleOpenBookingWithBox}
      />

      {/* Official 8x8cm QR Code & Hotel Concierge Kit Modal */}
      <QRCodeModal
        isOpen={isQROpen}
        onClose={() => setIsQROpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLanding />
    </LanguageProvider>
  );
}


