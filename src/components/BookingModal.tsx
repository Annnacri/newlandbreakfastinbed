import React, { useState } from 'react';
import { X, CheckCircle, Clock, MapPin, Calendar, Plus, Minus, Home, Hotel, Bed, HeartHandshake } from 'lucide-react';
import { BreakfastBox } from '../types';
import { MENU_ADDONS, LISBON_NEIGHBORHOODS, getLocalizedBoxes } from '../data/mockData';
import { ambientSound } from '../utils/audio';
import { useTranslation } from '../hooks';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSelectedBox?: BreakfastBox | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSelectedBox,
}) => {
  const { t, language } = useTranslation();
  const boxes = getLocalizedBoxes(language);
  const [step, setStep] = useState(1);
  const [selectedBoxId, setSelectedBoxId] = useState<string>(
    initialSelectedBox?.id || boxes[0].id
  );
  const [boxQuantity, setBoxQuantity] = useState(1);
  const [addonQuantities, setAddonQuantities] = useState<{ [key: string]: number }>({});
  
  // Guest and Delivery details
  const [formData, setFormData] = useState({
    guestName: '',
    email: '',
    phone: '',
    deliveryDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    deliveryTime: '08:30',
    locationType: 'airbnb' as 'airbnb' | 'hotel' | 'guesthouse',
    accommodationName: '',
    neighborhood: 'alfama',
    address: '',
    roomOrFloor: '',
    doorCode: '',
    morningGreeting: 'doorbell' as 'doorbell' | 'quiet_dropoff' | 'balcony_setup',
    specialRequests: '',
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentBox = boxes.find((b) => b.id === selectedBoxId) || boxes[0];
  
  // Calculate pricing
  const boxTotal = Number((currentBox.price * boxQuantity).toFixed(2));
  const addonsTotal = Number(
    Object.entries(addonQuantities).reduce((sum, [addonId, qty]) => {
      const addon = MENU_ADDONS.find((a) => a.id === addonId);
      return sum + (addon ? addon.price * Number(qty) : 0);
    }, 0).toFixed(2)
  );
  const grandTotal = Number((boxTotal + addonsTotal).toFixed(2));

  const handleAddonToggle = (addonId: string, delta: number) => {
    ambientSound.playCupClick();
    setAddonQuantities((prev) => {
      const current = prev[addonId] || 0;
      const updated = Math.max(0, current + delta);
      return { ...prev, [addonId]: updated };
    });
  };

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    ambientSound.playGoldenChime();
    const refNumber = `LX-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refNumber);
    setBookingConfirmed(true);
    setStep(4);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div className="bg-[#fcfbf9] border border-amber-900/15 rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative text-[#2d241d]">
        {/* Header Bar */}
        <div className="px-6 py-5 border-b border-amber-900/10 flex items-center justify-between bg-[#f5ede2]">
          <div>
            <span className="text-[11px] font-mono uppercase text-amber-800 tracking-wider font-bold">
              Breakfast in Bed LX • Hospitality Reservation
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#221a14]">
              {step === 4 ? 'Reservation Confirmed' : 'Book Your Lisbon Morning'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#6b5d52] hover:text-[#221a14] hover:bg-amber-900/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step !== 4 && (
          <div className="px-6 py-3 bg-[#ede2d3] border-b border-amber-900/10 flex items-center justify-between text-xs font-mono">
            <span className={step >= 1 ? 'text-amber-900 font-bold' : 'text-[#7d6f63]'}>
              1. Curate Spread
            </span>
            <span className="text-amber-800/40">→</span>
            <span className={step >= 2 ? 'text-amber-900 font-bold' : 'text-[#7d6f63]'}>
              2. Hotel/Airbnb Details
            </span>
            <span className="text-amber-800/40">→</span>
            <span className={step >= 3 ? 'text-amber-900 font-bold' : 'text-[#7d6f63]'}>
              3. Review & Confirm
            </span>
          </div>
        )}

        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* ---------------- STEP 1: SELECT BOX & ADDONS ---------------- */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-2">
                  Select Breakfast Box Collection:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {boxes.map((box) => {
                    const isSelected = box.id === selectedBoxId;
                    return (
                      <div
                        key={box.id}
                        onClick={() => setSelectedBoxId(box.id)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-amber-100/70 border-amber-600 shadow-md ring-2 ring-amber-400'
                            : 'bg-white border-amber-900/10 hover:border-amber-400 shadow-xs'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <p className="font-serif font-bold text-[#221a14] text-base">{box.name}</p>
                          <span className="text-amber-800 font-bold font-mono">€{box.price.toFixed(2)}</span>
                        </div>
                        <p className="text-xs text-[#5c4f44] line-clamp-2">{box.description}</p>
                        <span className="text-[11px] font-mono text-amber-900 font-medium mt-2 block">
                          Serves: {box.serves}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-amber-900/10 shadow-xs">
                <div>
                  <p className="font-bold text-[#221a14] text-sm">Number of Boxes</p>
                  <p className="text-xs text-[#6e5f54]">Each box is crafted to order</p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setBoxQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center text-amber-900 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono text-base font-bold text-amber-900 w-6 text-center">
                    {boxQuantity}
                  </span>
                  <button
                    onClick={() => setBoxQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-full bg-amber-600 hover:bg-amber-500 flex items-center justify-center text-white cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Addons Section */}
              <div>
                <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-2">
                  Enhance Your Morning (Extras & Salgados):
                </label>
                <div className="space-y-2">
                  {MENU_ADDONS.map((addon) => {
                    const qty = addonQuantities[addon.id] || 0;
                    return (
                      <div
                        key={addon.id}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-amber-900/10 hover:border-amber-400 shadow-xs"
                      >
                        <div className="pr-4">
                          <p className="text-sm font-bold text-[#221a14]">{addon.name}</p>
                          <p className="text-xs text-[#6e5f54]">{addon.description}</p>
                        </div>
                        <div className="flex items-center space-x-3 shrink-0">
                          <span className="font-mono text-sm font-bold text-amber-800">€{addon.price.toFixed(2)}</span>
                          <div className="flex items-center space-x-2">
                            {qty > 0 && (
                              <>
                                <button
                                  onClick={() => handleAddonToggle(addon.id, -1)}
                                  className="w-6 h-6 rounded-full bg-amber-100 hover:bg-amber-200 flex items-center justify-center text-amber-900 text-xs cursor-pointer"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="font-mono text-xs font-bold text-[#221a14] w-4 text-center">
                                  {qty}
                                </span>
                              </>
                            )}
                            <button
                              onClick={() => handleAddonToggle(addon.id, 1)}
                              className="w-7 h-7 rounded-full bg-amber-600 hover:bg-amber-500 flex items-center justify-center text-white text-xs cursor-pointer shadow-xs"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 1 Footer */}
              <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#7d6f63] block font-mono">Subtotal</span>
                  <span className="font-serif text-2xl font-bold text-amber-800">
                    €{grandTotal.toFixed(2)}
                  </span>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs sm:text-sm py-3 px-7 rounded-full transition-colors uppercase tracking-wide cursor-pointer shadow-sm"
                >
                  Proceed to Location Details →
                </button>
              </div>
            </div>
          )}

          {/* ---------------- STEP 2: LOCATION & TIME ---------------- */}
          {step === 2 && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                    Delivery Date:
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.deliveryDate}
                    onChange={(e) => setFormData({ ...formData, deliveryDate: e.target.value })}
                    className="w-full bg-white border border-amber-900/15 rounded-xl px-4 py-2.5 text-[#221a14] text-sm focus:outline-none focus:border-amber-600 shadow-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                    Desired Delivery Slot (15-min window):
                  </label>
                  <select
                    value={formData.deliveryTime}
                    onChange={(e) => setFormData({ ...formData, deliveryTime: e.target.value })}
                    className="w-full bg-white border border-amber-900/15 rounded-xl px-4 py-2.5 text-[#221a14] text-sm focus:outline-none focus:border-amber-600 shadow-xs"
                  >
                    <option value="07:30">07:30 – 07:45 (Early Explorer)</option>
                    <option value="08:00">08:00 – 08:15 (Sunrise Delight)</option>
                    <option value="08:30">08:30 – 08:45 (Classic Morning)</option>
                    <option value="09:00">09:00 – 09:15 (Golden Hour)</option>
                    <option value="09:30">09:30 – 09:45 (Lazy Holiday)</option>
                    <option value="10:00">10:00 – 10:15 (Late Brunch)</option>
                    <option value="10:30">10:30 – 10:45 (Slow Sunday)</option>
                    <option value="11:00">11:00 – 11:15 (Midday Feast)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                  Accommodation Type:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'airbnb', label: 'Airbnb / Apartment', icon: Home },
                    { id: 'hotel', label: 'Hotel / Boutique Suite', icon: Hotel },
                    { id: 'guesthouse', label: 'Guesthouse / Villa', icon: Bed },
                  ].map((item) => {
                    const Icon = item.icon;
                    const isSelected = formData.locationType === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, locationType: item.id as any })}
                        className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all text-xs font-bold cursor-pointer ${
                          isSelected
                            ? 'bg-amber-100 border-amber-600 text-amber-900 ring-2 ring-amber-400'
                            : 'bg-white border-amber-900/15 text-[#5a4d43] hover:text-[#221a14] shadow-xs'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-amber-600" />
                        <span>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                    Hotel Name or Building Name:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Santa Clara 1728 / Alfama View Loft"
                    value={formData.accommodationName}
                    onChange={(e) => setFormData({ ...formData, accommodationName: e.target.value })}
                    className="w-full bg-white border border-amber-900/15 rounded-xl px-4 py-2.5 text-[#221a14] text-sm focus:outline-none focus:border-amber-600 shadow-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                    Lisbon District:
                  </label>
                  <select
                    value={formData.neighborhood}
                    onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                    className="w-full bg-white border border-amber-900/15 rounded-xl px-4 py-2.5 text-[#221a14] text-sm focus:outline-none focus:border-amber-600 shadow-xs"
                  >
                    {LISBON_NEIGHBORHOODS.map((n) => (
                      <option key={n.id} value={n.id}>
                        {n.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                  Street Address & Number:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rua dos Remédios 42"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-white border border-amber-900/15 rounded-xl px-4 py-2.5 text-[#221a14] text-sm focus:outline-none focus:border-amber-600 shadow-xs"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                    Apartment / Suite / Room #:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Suite 304 / 2nd Floor Left"
                    value={formData.roomOrFloor}
                    onChange={(e) => setFormData({ ...formData, roomOrFloor: e.target.value })}
                    className="w-full bg-white border border-amber-900/15 rounded-xl px-4 py-2.5 text-[#221a14] text-sm focus:outline-none focus:border-amber-600 shadow-xs"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                    Door Entry Code (if applicable):
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. #4829 or 'Ring Intercom'"
                    value={formData.doorCode}
                    onChange={(e) => setFormData({ ...formData, doorCode: e.target.value })}
                    className="w-full bg-white border border-amber-900/15 rounded-xl px-4 py-2.5 text-[#221a14] text-sm focus:outline-none focus:border-amber-600 shadow-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                  Morning Arrival Preference:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  {[
                    { id: 'doorbell', title: 'Ring Doorbell', desc: 'Hand deliver with warm smile' },
                    { id: 'quiet_dropoff', title: 'Quiet Doorstep', desc: 'Silent leave & send SMS' },
                    { id: 'balcony_setup', title: 'Full Bed / Table Setup', desc: 'Host arranges tray on bed' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, morningGreeting: opt.id as any })}
                      className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                        formData.morningGreeting === opt.id
                          ? 'bg-amber-100 border-amber-600 text-amber-900 ring-2 ring-amber-400 font-bold'
                          : 'bg-white border-amber-900/15 text-[#5a4d43] hover:text-[#221a14] shadow-xs'
                      }`}
                    >
                      <p className="font-bold">{opt.title}</p>
                      <p className="text-[11px] opacity-80 mt-0.5">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-[#6e5f54] hover:text-[#221a14] text-xs font-mono uppercase font-bold cursor-pointer"
                >
                  ← Back to Spread
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs sm:text-sm py-3 px-7 rounded-full transition-colors uppercase tracking-wide cursor-pointer shadow-sm"
                >
                  Proceed to Guest Details →
                </button>
              </div>
            </div>
          )}

          {/* ---------------- STEP 3: GUEST CONTACT & REVIEW ---------------- */}
          {step === 3 && (
            <form onSubmit={handleConfirmReservation} className="space-y-5">
              <div className="bg-white p-5 rounded-2xl border border-amber-900/10 space-y-2.5 shadow-sm">
                <div className="flex justify-between items-center text-sm border-b border-amber-900/10 pb-2">
                  <span className="font-bold text-[#221a14]">
                    {currentBox.name} (x{boxQuantity})
                  </span>
                  <span className="font-mono text-amber-800 font-bold">€{boxTotal.toFixed(2)}</span>
                </div>
                {Object.entries(addonQuantities).map(([addonId, qty]) => {
                  const item = MENU_ADDONS.find((a) => a.id === addonId);
                  if (!item || Number(qty) <= 0) return null;
                  return (
                    <div key={addonId} className="flex justify-between items-center text-xs text-[#5a4d43]">
                      <span>
                        + {item.name} (x{qty})
                      </span>
                      <span className="font-mono text-amber-800 font-bold">€{(item.price * Number(qty)).toFixed(2)}</span>
                    </div>
                  );
                })}
                <div className="flex justify-between items-center pt-2 text-base font-bold text-[#221a14]">
                  <span>Total Due on Delivery / Card</span>
                  <span className="font-serif text-2xl text-amber-800">€{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                    Lead Guest Full Name:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sophia Montgomery"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    className="w-full bg-white border border-amber-900/15 rounded-xl px-4 py-2.5 text-[#221a14] text-sm focus:outline-none focus:border-amber-600 shadow-xs"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                    WhatsApp / Mobile Phone:
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g. +351 912 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-amber-900/15 rounded-xl px-4 py-2.5 text-[#221a14] text-sm focus:outline-none focus:border-amber-600 shadow-xs"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                  Email for Confirmation & Live Courier Tracking:
                </label>
                <input
                  type="email"
                  placeholder="e.g. sophia@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white border border-amber-900/15 rounded-xl px-4 py-2.5 text-[#221a14] text-sm focus:outline-none focus:border-amber-600 shadow-xs"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-amber-900 font-bold mb-1.5">
                  Special Dietary Notes or Complimentary Gift Message:
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. 'Writing a surprise note for Ana!'"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-white border border-amber-900/15 rounded-xl px-4 py-2 text-[#221a14] text-sm focus:outline-none focus:border-amber-600 shadow-xs"
                />
              </div>

              <div className="pt-4 border-t border-amber-900/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="text-[#6e5f54] hover:text-[#221a14] text-xs font-mono uppercase font-bold cursor-pointer"
                >
                  ← Back to Location
                </button>
                <button
                  type="submit"
                  className="bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs sm:text-sm py-3.5 px-8 rounded-full transition-colors uppercase tracking-wide cursor-pointer shadow-lg shadow-amber-900/20"
                >
                  Confirm Breakfast Reservation (€{grandTotal.toFixed(2)})
                </button>
              </div>
            </form>
          )}

          {/* ---------------- STEP 4: SUCCESS CONFIRMATION ---------------- */}
          {step === 4 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-amber-100 border border-amber-300 rounded-full flex items-center justify-center mx-auto text-amber-800 shadow-xs">
                <CheckCircle className="w-9 h-9" />
              </div>

              <div>
                <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-widest block mb-1">
                  Reservation Voucher #{bookingRef}
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#221a14] mb-2">
                  Your Lisbon Morning is Booked!
                </h3>
                <p className="text-sm text-[#5a4d43] max-w-md mx-auto leading-relaxed">
                  We have registered your delivery to{' '}
                  <strong className="text-amber-900">
                    {formData.accommodationName || formData.address || 'your Lisbon suite'}
                  </strong>{' '}
                  on{' '}
                  <strong className="text-amber-900">
                    {formData.deliveryDate} at {formData.deliveryTime}
                  </strong>
                  .
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-amber-900/10 max-w-md mx-auto text-left text-xs space-y-2 font-mono shadow-xs">
                <div className="flex justify-between">
                  <span className="text-[#6e5f54]">Package:</span>
                  <span className="text-[#221a14] font-bold">{currentBox.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6e5f54]">Timing:</span>
                  <span className="text-amber-800 font-bold">{formData.deliveryTime} AM slot</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6e5f54]">District:</span>
                  <span className="text-[#221a14] capitalize font-medium">{formData.neighborhood}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#6e5f54]">Greeting:</span>
                  <span className="text-[#221a14] capitalize font-medium">{formData.morningGreeting.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between border-t border-amber-900/10 pt-2 text-sm">
                  <span className="text-[#6e5f54]">Total:</span>
                  <span className="text-amber-800 font-bold">€{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs sm:text-sm py-3 px-8 rounded-full uppercase tracking-wide transition-colors cursor-pointer shadow-xs"
                >
                  Return to Experience
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
