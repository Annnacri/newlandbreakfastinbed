import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { Download, Printer, Copy, Check } from 'lucide-react';
import { ambientSound } from '../utils/audio';
import { useTranslation } from '../hooks';

interface QRCodeStickerProps {
  url?: string;
  className?: string;
  showActions?: boolean;
}

export const QRCodeSticker: React.FC<QRCodeStickerProps> = ({
  url = 'https://breakfastinbedlx-landing1.vercel.app',
  className = '',
  showActions = true,
}) => {
  const { t } = useTranslation();
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Generate crisp QR Code as high-res data URL
    QRCode.toDataURL(url, {
      width: 400,
      margin: 1,
      color: {
        dark: '#f59e0b', // Vibrant Gold / Amber
        light: '#111111', // Dark background
      },
      errorCorrectionLevel: 'H',
    })
      .then((dataUrl) => {
        setQrDataUrl(dataUrl);
      })
      .catch((err) => {
        console.error('Error generating QR code data URL:', err);
      });
  }, [url]);

  const handleCopyLink = async () => {
    try {
      ambientSound.playCupClick();
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Could not copy link', err);
    }
  };

  const handleDownloadSticker = () => {
    ambientSound.playGoldenChime();
    const printCanvas = document.createElement('canvas');
    printCanvas.width = 800;
    printCanvas.height = 800;
    const ctx = printCanvas.getContext('2d');
    if (!ctx) return;

    // Dark background
    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, 800, 800);

    // Amber border
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 16;
    ctx.strokeRect(16, 16, 768, 768);

    // Pill badge: BREAKFAST IN BED LX • LISBON
    ctx.fillStyle = 'rgba(245, 158, 11, 0.18)';
    ctx.beginPath();
    ctx.roundRect(220, 46, 360, 40, 20);
    ctx.fill();
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 15px system-ui, -apple-system, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('BREAKFAST IN BED LX • LISBON', 400, 72);

    // Title: Psst... Hey! Do you need breakfast in bed?
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 30px Georgia, serif';
    ctx.fillText('Psst... Hey! Do you need breakfast in', 400, 130);
    ctx.fillText('bed?', 400, 168);

    // Subtitle
    ctx.fillStyle = '#f3f4f6';
    ctx.font = '15px system-ui, -apple-system, sans-serif';
    ctx.fillText('Fresh artisan pastries, juice & coffee delivered to your door in Lisbon 🥐☕', 400, 202);

    // Generate high-res QR Code and draw
    const qrCanvas = document.createElement('canvas');
    QRCode.toCanvas(qrCanvas, url, {
      width: 380,
      margin: 1,
      color: {
        dark: '#f59e0b',
        light: '#111111',
      },
      errorCorrectionLevel: 'H',
    }).then(() => {
      ctx.drawImage(qrCanvas, 210, 226, 380, 380);

      // Button: SCAN ME TO ORDER NOW
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.roundRect(120, 626, 560, 72, 22);
      ctx.fill();

      ctx.fillStyle = '#111111';
      ctx.font = '900 23px system-ui, -apple-system, sans-serif';
      ctx.fillText('SCAN ME TO ORDER NOW', 400, 671);

      // Bottom URL
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 15px monospace';
      ctx.fillText(url.replace('https://', ''), 400, 735);

      // Trigger download
      const link = document.createElement('a');
      link.download = 'Autocolante_8x8cm_BreakfastInBedLX.png';
      link.href = printCanvas.toDataURL('image/png');
      link.click();
    });
  };

  const handlePrint = () => {
    ambientSound.playCupClick();
    window.print();
  };

  return (
    <div className={`w-full flex flex-col items-center justify-center ${className}`}>
      {/* 8x8cm Luxury Sticker Box - Fully Responsive & Never Clipped */}
      <div className="w-full max-w-[320px] sm:max-w-[360px] bg-[#111111] border-[6px] sm:border-8 border-amber-500 rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-between text-center shadow-2xl relative select-none">
        
        {/* Top Badge */}
        <div className="bg-amber-950/80 border border-amber-500/50 px-3.5 py-1 rounded-full mb-2">
          <span className="text-[10px] sm:text-[11px] font-mono font-bold tracking-widest text-amber-400 uppercase">
            BREAKFAST IN BED LX • LISBON
          </span>
        </div>

        {/* Catchy Hook Header */}
        <div className="space-y-1 mb-2">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-500 leading-tight">
            Psst... Hey! Do you need breakfast in bed?
          </h3>
          <p className="text-[11px] sm:text-xs text-zinc-300 font-normal leading-snug px-1">
            Fresh artisan pastries, juice & coffee delivered to your door in Lisbon 🥐☕
          </p>
        </div>

        {/* Dynamic High-Contrast QR Code - Centered & 100% Visible */}
        <div className="bg-[#111111] p-2 rounded-2xl border border-amber-500/40 my-2 flex items-center justify-center shadow-inner">
          {qrDataUrl ? (
            <img
              src={qrDataUrl}
              alt="QR Code Breakfast in Bed LX"
              className="w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] object-contain block rounded-lg"
            />
          ) : (
            <div className="w-[160px] h-[160px] sm:w-[190px] sm:h-[190px] bg-zinc-900 animate-pulse rounded-lg flex items-center justify-center text-amber-500 text-xs">
              A carregar QR Code...
            </div>
          )}
        </div>

        {/* Scan Button Graphic */}
        <div className="w-full space-y-1.5 mt-1">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => ambientSound.playGoldenChime()}
            className="w-full bg-amber-500 hover:bg-amber-400 text-black font-black text-xs sm:text-sm py-2.5 sm:py-3 px-4 rounded-xl transition-all duration-200 uppercase tracking-wider block shadow-md hover:scale-[1.02] text-center"
          >
            SCAN ME TO ORDER NOW
          </a>
          <p className="text-[10px] sm:text-[11px] font-mono font-medium text-amber-400/90 truncate max-w-full">
            {url.replace('https://', '')}
          </p>
        </div>
      </div>

      {/* Action Buttons (Download, Print, Copy) */}
      {showActions && (
        <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-2 max-w-sm w-full">
          <button
            onClick={handleDownloadSticker}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold py-2.5 px-3.5 rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap"
            title="Descarregar autocolante 8x8cm em alta resolução para impressão"
          >
            <Download className="w-3.5 h-3.5 shrink-0" />
            <span>{t.btnDownloadSticker}</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="flex items-center justify-center gap-1.5 bg-white hover:bg-amber-50 text-[#221a14] border border-amber-900/20 text-xs font-bold py-2.5 px-3 rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap"
            title="Copiar link direto"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-emerald-700">{t.linkCopied}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>{t.btnCopyLink}</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center justify-center gap-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-medium py-2.5 px-3 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            title="Imprimir autocolante"
          >
            <Printer className="w-3.5 h-3.5 text-zinc-600 shrink-0" />
            <span>{t.btnPrint}</span>
          </button>
        </div>
      )}
    </div>
  );
};
