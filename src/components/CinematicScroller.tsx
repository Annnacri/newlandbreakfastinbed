import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Sparkles, MapPin, Clock, Compass, Coffee, Utensils, Bed, Plane, Play, Pause, FastForward } from 'lucide-react';
import { STORY_IMAGES } from '../data/mockData';
import { ambientSound } from '../utils/audio';
import { useTranslation } from '../hooks';

interface CinematicScrollerProps {
  onOpenBooking: () => void;
  onOpenMenu: () => void;
  scrollProgress: number;
  setScrollProgress: (p: number) => void;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  fadeSpeed: number;
  life: number;
  maxLife: number;
}

export const CinematicScroller: React.FC<CinematicScrollerProps> = ({
  onOpenBooking,
  onOpenMenu,
  scrollProgress,
  setScrollProgress,
}) => {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<{ [key: string]: HTMLImageElement }>({});
  const smoothedProgressRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const timeRef = useRef(0);
  const steamParticlesRef = useRef<Particle[]>([]);
  const dustParticlesRef = useRef<Particle[]>([]);
  
  // Auto-tour / video playback state
  const [isPlayingTour, setIsPlayingTour] = useState(false);
  const tourIntervalRef = useRef<number | null>(null);

  // Chapters configuration dynamically internationalized
  const CHAPTERS = [
    {
      id: 'opening',
      time: t.ch1Time || '06:45',
      location: t.ch1Loc,
      title: t.ch1Title,
      subtitle: t.ch1Sub,
      tag: t.ch1Tag,
      quote: t.ch1Quote,
      range: [0.0, 0.20],
      icon: Plane,
    },
    {
      id: 'arrival',
      time: t.ch2Time || '07:30',
      location: t.ch2Loc,
      title: t.ch2Title,
      subtitle: t.ch2Sub,
      tag: t.ch2Tag,
      quote: t.ch2Quote,
      range: [0.20, 0.42],
      icon: MapPin,
    },
    {
      id: 'wake-up',
      time: t.ch3Time || '08:15',
      location: t.ch3Loc,
      title: t.ch3Title,
      subtitle: t.ch3Sub,
      tag: t.ch3Tag,
      quote: t.ch3Quote,
      range: [0.42, 0.65],
      icon: Bed,
    },
    {
      id: 'experience',
      time: t.ch4Time || '08:45',
      location: t.ch4Loc,
      title: t.ch4Title,
      subtitle: t.ch4Sub,
      tag: t.ch4Tag,
      quote: t.ch4Quote,
      range: [0.65, 0.85],
      icon: Utensils,
    },
    {
      id: 'morning-moment',
      time: t.ch5Time || '09:15',
      location: t.ch5Loc,
      title: t.ch5Title,
      subtitle: t.ch5Sub,
      tag: t.ch5Tag,
      quote: t.ch5Quote,
      range: [0.85, 1.0],
      icon: Coffee,
    },
  ];

  // Preload images into memory
  useEffect(() => {
    let loadedCount = 0;
    const imgKeys = ['heroPlane', 'lisbonAerial', 'lisbonRoom', 'portugueseBreakfast', 'lisbonBalcony'];
    const total = imgKeys.length;

    imgKeys.forEach((key) => {
      const img = new Image();
      img.src = (STORY_IMAGES as any)[key];
      img.onload = () => {
        imagesRef.current[key] = img;
        loadedCount++;
        if (loadedCount === total) {
          setImagesLoaded(true);
        }
      };
    });

    // Initialize floating morning dust motes
    const dust: Particle[] = [];
    for (let i = 0; i < 45; i++) {
      dust.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2.5 + 0.8,
        speedY: (Math.random() - 0.5) * 0.3 - 0.15,
        speedX: (Math.random() - 0.5) * 0.4 + 0.1,
        opacity: Math.random() * 0.6 + 0.2,
        fadeSpeed: (Math.random() * 0.01) + 0.003,
        life: Math.random() * 100,
        maxLife: 100,
      });
    }
    dustParticlesRef.current = dust;
  }, []);

  // Track scroll position inside container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const current = -rect.top;
      const progress = Math.max(0, Math.min(1, current / totalScrollable));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollProgress]);

  // Automated Cinematic Tour Playback
  useEffect(() => {
    if (isPlayingTour) {
      const startTime = Date.now();
      const startProgress = scrollProgress;
      const duration = 18000; // 18 seconds full cinematic journey

      tourIntervalRef.current = window.setInterval(() => {
        if (!containerRef.current) return;
        const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
        const elapsed = (Date.now() - startTime) % duration;
        const newProgress = elapsed / duration;
        
        const targetY = containerRef.current.offsetTop + newProgress * totalScrollable;
        window.scrollTo({ top: targetY, behavior: 'auto' });
      }, 30);
    } else {
      if (tourIntervalRef.current) {
        clearInterval(tourIntervalRef.current);
        tourIntervalRef.current = null;
      }
    }

    return () => {
      if (tourIntervalRef.current) clearInterval(tourIntervalRef.current);
    };
  }, [isPlayingTour]);

  // High-performance canvas rendering loop with continuous motion & particle physics
  useEffect(() => {
    if (!imagesLoaded) return;

    const render = () => {
      timeRef.current += 0.016; // increment time for continuous animations
      const t = timeRef.current;

      // Lerp smoothing (linear interpolation) for ultra-cinematic buttery response
      const target = scrollProgress;
      smoothedProgressRef.current += (target - smoothedProgressRef.current) * 0.08;
      const p = smoothedProgressRef.current;

      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);

      ctx.clearRect(0, 0, width, height);

      // 5-stage image blending with cinematic camera push-in / scale / pan
      const imgs = [
        imagesRef.current['heroPlane'],
        imagesRef.current['lisbonAerial'],
        imagesRef.current['lisbonRoom'],
        imagesRef.current['portugueseBreakfast'],
        imagesRef.current['lisbonBalcony'],
      ];

      // Draw background layers with smooth cross-dissolve & parallax scale
      const stage = p * 4;
      const currentIdx = Math.min(3, Math.floor(stage));
      const nextIdx = Math.min(4, currentIdx + 1);
      const stageProgress = stage - currentIdx;

      // Draw image with aspect cover + zoom effect + subtle breathing movement
      const drawCover = (img: HTMLImageElement, alpha: number, scaleFactor: number, panY: number = 0, panX: number = 0) => {
        if (!img || alpha <= 0.001) return;
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

        const imgRatio = img.naturalWidth / img.naturalHeight;
        const screenRatio = width / height;
        let drawW = width;
        let drawH = height;
        let offX = 0;
        let offY = 0;

        if (screenRatio > imgRatio) {
          drawW = width;
          drawH = width / imgRatio;
          offY = (height - drawH) / 2;
        } else {
          drawH = height;
          drawW = height * imgRatio;
          offX = (width - drawW) / 2;
        }

        // Apply continuous organic camera drift (sway)
        const swayX = Math.sin(t * 0.4) * 8;
        const swayY = Math.cos(t * 0.3) * 6;

        const centerX = width / 2;
        const centerY = height / 2;
        ctx.translate(centerX + panX + swayX, centerY + panY + swayY);
        ctx.scale(scaleFactor, scaleFactor);
        ctx.translate(-centerX, -centerY);

        ctx.drawImage(img, offX, offY, drawW, drawH);
        ctx.restore();
      };

      // Calculate smooth cross-fade curve with cosine easing
      const blend = (1 - Math.cos(stageProgress * Math.PI)) / 2;
      const currentScale = 1.0 + (stageProgress * 0.1) + Math.sin(t * 0.2) * 0.01;
      const nextScale = 1.1 - ((1 - stageProgress) * 0.1);

      const baseImg = imgs[currentIdx];
      const nextImg = imgs[nextIdx];

      if (baseImg) {
        drawCover(baseImg, 1.0, currentScale, -stageProgress * 20, Math.sin(stageProgress * Math.PI) * 10);
      }
      if (nextImg && stageProgress > 0) {
        drawCover(nextImg, blend, nextScale, (1 - stageProgress) * 20, -Math.sin(stageProgress * Math.PI) * 10);
      }

      // -------------------------------------------------------------
      // DYNAMIC MOTION LAYER 1: Airplane Flight across Lisbon Sky (Chapter 1)
      // -------------------------------------------------------------
      if (p < 0.35) {
        const planeAlpha = Math.max(0, 1 - (p / 0.25));
        const planeX = (width * 0.2) + ((t * 22) % (width * 0.9));
        const planeY = (height * 0.28) + Math.sin(t * 0.8) * 8 + (p * 40);

        ctx.save();
        ctx.globalAlpha = planeAlpha * 0.9;
        
        // Plane contrail (vapor trail)
        const trailGrad = ctx.createLinearGradient(planeX - 120, planeY, planeX, planeY);
        trailGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        trailGrad.addColorStop(0.8, 'rgba(255, 235, 200, 0.4)');
        trailGrad.addColorStop(1, 'rgba(255, 255, 255, 0.8)');
        ctx.strokeStyle = trailGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(planeX - 140, planeY + 2);
        ctx.lineTo(planeX - 8, planeY);
        ctx.stroke();

        // Aircraft Silhouette
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = 'rgba(251, 191, 36, 0.8)';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        // Fuselage
        ctx.ellipse(planeX, planeY, 14, 3, 0.05, 0, Math.PI * 2);
        // Wings
        ctx.ellipse(planeX - 2, planeY, 3, 16, 0.2, 0, Math.PI * 2);
        // Tail
        ctx.ellipse(planeX - 10, planeY - 4, 3, 6, -0.3, 0, Math.PI * 2);
        ctx.fill();

        // Flashing navigation beacon
        if (Math.sin(t * 5) > 0.4) {
          ctx.fillStyle = '#ef4444';
          ctx.beginPath();
          ctx.arc(planeX - 2, planeY - 14, 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }

      // -------------------------------------------------------------
      // DYNAMIC MOTION LAYER 2: Sunbeams / God Rays over Lisbon
      // -------------------------------------------------------------
      ctx.save();
      const rayAlpha = (Math.sin(t * 0.5) * 0.05 + 0.12) * (1 - p * 0.3);
      ctx.globalAlpha = rayAlpha;
      ctx.fillStyle = '#fef08a';
      ctx.beginPath();
      ctx.moveTo(width * 0.75, -50);
      ctx.lineTo(width * 0.4 + Math.sin(t * 0.2) * 50, height);
      ctx.lineTo(width * 0.55 + Math.sin(t * 0.2) * 50, height);
      ctx.closePath();
      ctx.fill();
      ctx.restore();

      // -------------------------------------------------------------
      // DYNAMIC MOTION LAYER 3: Steaming Coffee & Pastéis Steam (Chapter 4 & 5)
      // -------------------------------------------------------------
      if (p >= 0.55) {
        // Spawn steam
        if (Math.random() < 0.4) {
          steamParticlesRef.current.push({
            x: width * 0.48 + (Math.random() - 0.5) * 60,
            y: height * 0.72 + (Math.random() - 0.5) * 20,
            size: Math.random() * 8 + 4,
            speedY: -Math.random() * 1.5 - 0.8,
            speedX: Math.sin(t * 2) * 0.8 + (Math.random() - 0.5) * 0.5,
            opacity: 0.35,
            fadeSpeed: 0.005,
            life: 0,
            maxLife: 70,
          });
        }

        // Draw and update steam particles
        ctx.save();
        steamParticlesRef.current.forEach((particle, idx) => {
          particle.y += particle.speedY;
          particle.x += particle.speedX;
          particle.size += 0.35;
          particle.life++;
          particle.opacity = Math.max(0, 0.35 * (1 - particle.life / particle.maxLife));

          ctx.fillStyle = `rgba(255, 245, 230, ${particle.opacity})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        });
        steamParticlesRef.current = steamParticlesRef.current.filter((p) => p.life < p.maxLife);
        ctx.restore();
      }

      // -------------------------------------------------------------
      // DYNAMIC MOTION LAYER 4: Floating Golden Morning Dust Motes
      // -------------------------------------------------------------
      ctx.save();
      dustParticlesRef.current.forEach((dot) => {
        dot.x += dot.speedX;
        dot.y += dot.speedY;
        if (dot.x < 0) dot.x = width;
        if (dot.x > width) dot.x = 0;
        if (dot.y < 0) dot.y = height;
        if (dot.y > height) dot.y = 0;

        const pulse = (Math.sin(t * 2 + dot.x) + 1) / 2;
        ctx.fillStyle = `rgba(253, 230, 138, ${dot.opacity * pulse * 0.7})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();

      // -------------------------------------------------------------
      // CINEMATIC VIGNETTING & TONAL GRADIENT (LIGHT, AIRY LISBON DAWN SUN)
      // -------------------------------------------------------------
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, width * 0.3,
        width / 2, height / 2, width * 0.95
      );
      gradient.addColorStop(0, 'rgba(255, 248, 235, 0.02)');
      gradient.addColorStop(0.7, 'rgba(40, 30, 20, 0.15)');
      gradient.addColorStop(1, 'rgba(30, 22, 16, 0.45)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Top and bottom subtle warm dawn header/footer tint
      const topGrad = ctx.createLinearGradient(0, 0, 0, 130);
      topGrad.addColorStop(0, 'rgba(20, 15, 10, 0.45)');
      topGrad.addColorStop(1, 'rgba(20, 15, 10, 0)');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, 0, width, 130);

      const botGrad = ctx.createLinearGradient(0, height - 140, 0, height);
      botGrad.addColorStop(0, 'rgba(20, 15, 10, 0)');
      botGrad.addColorStop(1, 'rgba(20, 15, 10, 0.45)');
      ctx.fillStyle = botGrad;
      ctx.fillRect(0, height - 140, width, 140);

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [imagesLoaded, scrollProgress]);

  // Determine active chapter based on scroll
  const currentChapter = CHAPTERS.find((c) => scrollProgress >= c.range[0] && scrollProgress <= c.range[1]) || CHAPTERS[0];
  const activeIndex = CHAPTERS.indexOf(currentChapter);

  // Jump to specific chapter
  const jumpToChapter = (index: number) => {
    ambientSound.playCupClick();
    if (!containerRef.current) return;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetProgress = CHAPTERS[index].range[0] + 0.05;
    const targetY = containerRef.current.offsetTop + targetProgress * totalScrollable;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const handleToggleTour = () => {
    const nextState = !isPlayingTour;
    setIsPlayingTour(nextState);
    if (nextState) {
      if (!ambientSound.getStatus()) {
        ambientSound.start();
      }
      ambientSound.playGoldenChime();
    } else {
      ambientSound.playCupClick();
    }
  };

  return (
    <div id="experience" ref={containerRef} className="relative w-full h-[520vh] bg-[#1c1815]">
      {/* Sticky Fullscreen Cinematic Viewport */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        {/* Canvas Visual Layer with Dynamic Motion Rendering */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Top Story Info HUD & Live Motion Tour Toggle */}
        <div className="relative z-20 pt-20 sm:pt-24 px-6 sm:px-12 max-w-7xl mx-auto w-full flex items-center justify-between pointer-events-none">
          <div className="flex items-center space-x-3 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="text-xs font-mono tracking-wider text-amber-200 uppercase">
              {currentChapter.tag}
            </span>
            <span className="text-zinc-500">•</span>
            <span className="text-xs font-mono text-zinc-300 flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-amber-400" />
              {currentChapter.time}
            </span>
          </div>

          <div className="flex items-center gap-3 pointer-events-auto">
            {/* Auto-Play Cinematic Video Tour Button */}
            <button
              onClick={handleToggleTour}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                isPlayingTour
                  ? 'bg-amber-500 text-black border-amber-400 shadow-lg shadow-amber-500/30'
                  : 'bg-black/60 backdrop-blur-md text-amber-300 border-amber-500/40 hover:bg-amber-950/60'
              }`}
              title="Play continuous automated cinematic fly-through"
            >
              {isPlayingTour ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>{t.btnPauseTour}</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-amber-300" />
                  <span className="hidden sm:inline">{t.btnPlayTour}</span>
                  <span className="sm:hidden">{t.btnPlayTour?.split(' ')[0] || 'Tour'}</span>
                </>
              )}
            </button>

            <div className="hidden sm:flex items-center space-x-2 bg-black/50 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-medium text-zinc-300 tracking-wide">
                {currentChapter.location}
              </span>
            </div>
          </div>
        </div>

        {/* Dynamic Story Typography Card (Smoothly transitions as user scrubs) */}
        <div className="relative z-20 px-6 sm:px-12 lg:px-16 max-w-4xl mx-auto w-full my-auto text-center pointer-events-none">
          <div className="transition-all duration-700 transform translate-y-0 opacity-100">
            {/* Subtle Chapter Subtitle / Quote */}
            <p className="text-amber-300/90 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4 flex items-center justify-center gap-2">
              <span className="w-6 h-px bg-amber-400/50" />
              {currentChapter.quote}
              <span className="w-6 h-px bg-amber-400/50" />
            </p>

            {/* Main H1/H2 Heading */}
            {activeIndex === 0 ? (
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-5 sm:mb-6 drop-shadow-2xl">
                {currentChapter.title}
              </h1>
            ) : (
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] mb-4 sm:mb-6 drop-shadow-2xl">
                {currentChapter.title}
              </h2>
            )}

            {/* Narrative Subtext */}
            <p className="text-base sm:text-xl lg:text-2xl text-zinc-200 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              {currentChapter.subtitle}
            </p>

            {/* Chapter 0 Opening Indicator & Instant CTA */}
            {activeIndex === 0 && (
              <div className="mt-8 flex flex-col items-center">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md pointer-events-auto mb-6">
                  <button
                    onClick={onOpenBooking}
                    className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs sm:text-sm py-3.5 px-7 rounded-full transition-all duration-200 tracking-wider uppercase shadow-xl shadow-amber-950/60 cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    {t.btnBookBreakfast}
                  </button>
                  <button
                    onClick={onOpenMenu}
                    className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs sm:text-sm py-3.5 px-6 rounded-full transition-all duration-200 tracking-wider uppercase backdrop-blur-sm cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {t.btnExploreBoxes}
                  </button>
                </div>

                <div className="flex flex-col items-center animate-bounce duration-1000">
                  <span className="text-[11px] sm:text-xs font-medium tracking-widest text-amber-300/90 uppercase mb-2 font-mono">
                    {t.heroBadge} ↓
                  </span>
                  <div className="w-5 h-8 rounded-full border-2 border-amber-400/60 flex items-start justify-center p-1">
                    <div className="w-1.5 h-2 bg-amber-400 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            )}

            {/* Climax Section Call to Action Buttons directly visible in section 4/5 */}
            {activeIndex >= 3 && activeIndex !== 0 && (
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs sm:text-sm py-3.5 px-8 rounded-full transition-all duration-200 tracking-wider uppercase shadow-xl shadow-amber-950/60 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                >
                  {t.btnBookBreakfast}
                </button>
                <button
                  onClick={onOpenMenu}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-medium text-xs sm:text-sm py-3.5 px-8 rounded-full transition-all duration-200 tracking-wider uppercase backdrop-blur-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {t.btnViewFullMenu}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Interactive Navigation & Progress Scrubbing Rail */}
        <div className="relative z-20 pb-8 px-6 sm:px-12 max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Chapter Quick Jump Pills */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 bg-black/50 backdrop-blur-md p-1.5 rounded-full border border-white/10 overflow-x-auto max-w-full">
            {CHAPTERS.map((ch, idx) => {
              const isActive = activeIndex === idx;
              const Icon = ch.icon;
              return (
                <button
                  key={ch.id}
                  onClick={() => jumpToChapter(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-amber-500 text-zinc-950 font-semibold shadow-md'
                      : 'text-zinc-400 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span className="hidden md:inline">{ch.tag?.split('/ ')[1] || ch.tag || `0${idx + 1}`}</span>
                  <span className="md:hidden">0{idx + 1}</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Progress Bar */}
          <div className="flex items-center space-x-3 w-full sm:w-64 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <span className="text-[11px] font-mono text-zinc-400">0%</span>
            <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden relative">
              <div
                className="h-full bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300 rounded-full transition-all duration-75"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <span className="text-[11px] font-mono text-amber-400 font-bold">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
