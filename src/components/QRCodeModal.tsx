import React from 'react';
import { X, QrCode, Sparkles, Smartphone, Hotel } from 'lucide-react';
import { QRCodeSticker } from './QRCodeSticker';
import { ambientSound } from '../utils/audio';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRCodeModal: React.FC<QRCodeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-[#faf7f2] border border-amber-900/20 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#ffffff] px-6 py-4 border-b border-amber-900/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
              <QrCode className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-lg font-bold text-[#221a14]">
                QR Code & Autocolante Oficial 8x8cm
              </h2>
              <p className="text-xs text-[#7a6b5e]">
                Breakfast in Bed LX • Lisboa
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              ambientSound.playCupClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Sticker Visual Preview */}
            <div className="md:col-span-6 flex justify-center">
              <QRCodeSticker />
            </div>

            {/* Explanatory & Hotel Host Information */}
            <div className="md:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 text-xs font-mono font-bold px-3 py-1 rounded-full border border-amber-300">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Kit Para Hóspedes & Alojamentos</span>
              </div>

              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#221a14] leading-tight">
                Acesso Imediato no Telemóvel do Hóspede
              </h3>

              <p className="text-sm text-[#5a4d43] leading-relaxed">
                Este QR Code liga diretamente à landing page oficial do Breakfast in Bed LX com catálogo de menus, cálculo de totais e som de guitarra portuguesa.
              </p>

              <div className="space-y-2.5 pt-2 text-xs text-[#4a3f36]">
                <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-amber-900/10 shadow-xs">
                  <Smartphone className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Para Turistas no Computador:</strong> Aponte a câmara do seu smartphone ao ecrã para abrir e encomendar logo na cama.
                  </span>
                </div>

                <div className="flex items-start gap-2 bg-white p-3 rounded-xl border border-amber-900/10 shadow-xs">
                  <Hotel className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                  <span>
                    <strong>Para Anfitriões de Airbnb & Hotéis:</strong> Descarregue o ficheiro PNG em 8x8cm para imprimir autocolantes, cartões de boas-vindas ou porta-chaves do quarto.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
