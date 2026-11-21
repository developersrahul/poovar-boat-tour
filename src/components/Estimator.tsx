import React, { useState } from 'react';

export default function Estimator() {
  const [duration, setDuration] = useState<'2hr' | '1hr'>('2hr');
  const [boatType, setBoatType] = useState<'motorboat' | 'canoe' | 'couple'>('motorboat');

  // Only ₹1,200 for 2hr motorboat ride is referenced from existing site.
  // All other combinations are unconfirmed tariff, so we request direct captain quote rather than inventing numbers.
  const getEstimate = () => {
    if (duration === '2hr' && boatType === 'motorboat') {
      return { price: '₹1,200*', isEstimate: true, note: '*Standard rate from existing website. Subject to season & confirmation.' };
    }
    return { price: 'Get Direct Quote', isEstimate: false, note: 'Direct captain tariff via WhatsApp without middleman markup.' };
  };

  const getPackageName = () => {
    const dStr = duration === '2hr' ? '2-Hour Full Estuary Tour' : '1-Hour Scenic Ride';
    const bStr =
      boatType === 'motorboat'
        ? 'Motorboat (Up to 7 Pax)'
        : boatType === 'canoe'
        ? 'Country Canoe'
        : 'Private Couple Special';
    return `${dStr} — ${bStr}`;
  };

  const handleWhatsApp = () => {
    const pkg = getPackageName();
    const est = getEstimate();
    const priceText = est.isEstimate ? `Estimated Fare: ${est.price}` : 'Requesting best seasonal quote';
    const msg = encodeURIComponent(
      `Hello Poovar Boat Tour, I would like to check availability and rate for:\n• Package: ${pkg}\n• ${priceText}\nPlease let me know available departure slots.`
    );
    window.open(`https://wa.me/917902291301?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-navy-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 relative shadow-2xl border border-white/10 overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-gold-300 text-xs uppercase tracking-widest-tag font-semibold block mb-1">
            Instant Calculator
          </span>
          <h3 className="font-marcellus text-2xl sm:text-3xl font-normal text-white">
            Cruise Estimator
          </h3>
        </div>
        <span className="bg-white/10 text-white/90 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Neyyar Estuary
        </span>
      </div>

      {/* Duration Selector */}
      <div className="mb-5">
        <label className="block text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
          1. Select Ride Duration
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setDuration('2hr')}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all ${
              duration === '2hr'
                ? 'bg-gold-400 text-sailux-950 font-bold shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            2 Hours (Full Estuary Tour)
          </button>
          <button
            type="button"
            onClick={() => setDuration('1hr')}
            className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all ${
              duration === '1hr'
                ? 'bg-gold-400 text-sailux-950 font-bold shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            1 Hour (Canalway Ride)
          </button>
        </div>
      </div>

      {/* Boat Type Selector */}
      <div className="mb-6">
        <label className="block text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
          2. Select Boat Type
        </label>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setBoatType('motorboat')}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              boatType === 'motorboat'
                ? 'bg-gold-400 text-sailux-950 font-bold shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Motorboat (Up to 7 Pax)
          </button>
          <button
            type="button"
            onClick={() => setBoatType('canoe')}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              boatType === 'canoe'
                ? 'bg-gold-400 text-sailux-950 font-bold shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Country Canoe
          </button>
          <button
            type="button"
            onClick={() => setBoatType('couple')}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
              boatType === 'couple'
                ? 'bg-gold-400 text-sailux-950 font-bold shadow-md'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            Private Couples Special
          </button>
        </div>
      </div>

      {/* Result Display */}
      <div className="pt-5 border-t border-white/15">
        <div className="flex justify-between items-baseline mb-2">
          <span className="text-xs uppercase tracking-wider text-white/70 font-semibold">
            Estimated Package Price:
          </span>
          <span className="font-marcellus text-3xl sm:text-4xl text-gold-300">
            {getEstimate().price}
          </span>
        </div>

        <p className="text-[11px] text-white/60 mb-4 leading-normal">
          {getEstimate().note}
        </p>

        <button
          type="button"
          onClick={handleWhatsApp}
          className="w-full bg-white hover:bg-neutral-100 text-sailux-950 font-bold text-xs uppercase tracking-wider py-4 px-6 rounded-full flex items-center justify-center gap-2 shadow-xl hover:-translate-y-0.5 transition-all"
        >
          <span>Enquire This Selection on WhatsApp →</span>
        </button>
      </div>
    </div>
  );
}
