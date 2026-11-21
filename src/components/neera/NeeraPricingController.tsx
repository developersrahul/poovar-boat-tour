import React, { useState } from 'react';

export default function NeeraPricingController() {
  const [passengerCount, setPassengerCount] = useState(7);

  const flatRate = 1200;
  const perHeadCost = passengerCount === 7 ? 170 : Math.round(flatRate / passengerCount);

  const handleBook = (planName: string) => {
    if (typeof window !== 'undefined' && (window as any).openBookingModal) {
      (window as any).openBookingModal(planName);
    } else {
      window.open(`https://wa.me/917902291301?text=Hello,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(planName)}.`, '_blank');
    }
  };

  return (
    <section id="pricing-plans" className="relative bg-white py-20 lg:py-28 overflow-hidden text-[#0d0d0d] border-b border-[#ede8e1]">
      {/* Background ambient accents */}
      
      

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto neera-reveal">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b19d7f] block">
            GET TO KNOW
          </span>
          <h2 className="font-marcellus text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.14em] text-[#06192e]">
            OUR PRICING PLANS
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            The Poovar Boat Tour price is Rs 1,200 per boat for a 2-hour ride. One boat carries up to 7 people, so the cost is shared across your group. There is one rate for the boat, not a price for each person.
          </p>
        </div>

        {/* =====================================================================
            SMOOTH PASSENGER CALCULATOR CONTROLLER
            ===================================================================== */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-[#faf8f5] rounded-[7px] border border-[#ede8e1] shadow-lg space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-200/80 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#b19d7f] font-bold block">
                Interactive Group Rate Calculator
              </span>
              <h4 className="font-marcellus text-lg text-[#06192e]">
                How Many Guests in Your Group?
              </h4>
            </div>
            <div className="flex items-baseline gap-1.5 self-start sm:self-auto">
              <span className="font-marcellus text-3xl font-bold text-[#06192e]">
                ~Rs {perHeadCost}
              </span>
              <span className="text-xs font-mono text-gray-500 uppercase">
                / Person
              </span>
            </div>
          </div>

          {/* Stepper Pill Controller for Passengers (1 to 7) */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-gray-500">
              <span>Select group size:</span>
              <span className="font-bold text-[#06192e]">{passengerCount} Passengers (Max 7 per boat)</span>
            </div>

            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => {
                const isSelected = passengerCount === num;
                return (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPassengerCount(num)}
                    className={`py-2 px-0.5 sm:py-3 sm:px-2 rounded-[7px] font-mono transition-all duration-300 cursor-pointer flex flex-col items-center justify-center leading-none ${
                      isSelected
                        ? 'bg-[#06192e] text-[#c9b79b] shadow-md scale-105 ring-2 ring-[#b19d7f]'
                        : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold">{num}</span>
                    <span className="text-[8px] sm:text-[10px] uppercase tracking-tighter opacity-80 mt-0.5">{num === 1 ? 'Guest' : 'Guests'}</span>
                  </button>
                );
              })}
            </div>

            <p className="text-[11px] text-gray-500 font-light text-center pt-1">
              * Total boat rate stays constant at <strong>Rs 1,200</strong> regardless of passenger count (up to 7 people).
            </p>
          </div>
        </div>

        {/* =====================================================================
            ORGANIC PRICING CARDS (Rounded-3xl, floating badges, soft shadows)
            ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-2">
          
          {/* Plan 1: Full Group Breakdown */}
          <div className="bg-[#faf8f5] rounded-[7px] border border-gray-200/80 p-8 sm:p-10 flex flex-col justify-between text-center space-y-6 shadow-md hover:shadow-2xl transition-all duration-500">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 block font-semibold">
                STANDARD (FULL GROUP)
              </span>
              <div className="py-3 border-y border-gray-200">
                <span className="font-marcellus text-3xl sm:text-4xl text-[#06192e] font-bold block">
                  ~Rs 170
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#b19d7f] block mt-1">
                  PER HEAD (7 PASSENGERS)
                </span>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed pt-2">
                A full boat of 7 works out to about Rs 170 per person. Ideal for large families and tourist groups traveling together.
              </p>
              <ul className="space-y-2.5 text-xs text-gray-600 font-light text-left border-t border-gray-200 pt-4">
                <li className="flex items-center gap-2">
                  <span className="text-[#b19d7f]">◆</span>
                  <span>2-Hour standard backwater ride</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b19d7f]">◆</span>
                  <span>Mangroves, estuary &amp; beach route</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b19d7f]">◆</span>
                  <span>Life jackets provided for everyone</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handleBook('Standard Group Ride (~Rs 170 / head)')}
              className="w-full py-4 bg-[#06192e] hover:bg-[#b19d7f] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-[7px] transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-0.5"
            >
              Choose Plan
            </button>
          </div>

          {/* Plan 2: Signature 2-Hour Whole Boat (Featured Floating Badge) */}
          <div className="bg-[#faf8f5] rounded-[7px] border-2 border-[#b19d7f] p-8 sm:p-10 flex flex-col justify-between text-center space-y-6 shadow-2xl relative">
            {/* Floating Top Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#b19d7f] text-white text-[10px] font-mono uppercase tracking-[0.22em] px-5 py-1 rounded-[7px] font-bold shadow-md">
              POPULAR CHOICE
            </div>

            <div className="space-y-4 pt-2">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#06192e] block font-bold">
                WHOLE BOAT (UP TO 7 PERSONS)
              </span>
              <div className="py-3 border-y border-[#b19d7f]/40">
                <span className="font-marcellus text-4xl sm:text-5xl text-[#06192e] font-bold block">
                  Rs 1,200
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#b19d7f] block mt-1 font-semibold">
                  ONE FIXED RATE • 2-HOUR RIDE
                </span>
              </div>
              <p className="text-xs text-gray-700 font-light leading-relaxed pt-2">
                Pay one flat rate for your entire family or group. No hidden taxes, no per-person surcharges. Direct booking with local boat team.
              </p>
              <ul className="space-y-2.5 text-xs text-gray-700 font-light text-left border-t border-gray-200 pt-4">
                <li className="flex items-center gap-2">
                  <span className="text-[#b19d7f] font-bold">◆</span>
                  <span><strong>Full private boat</strong> exclusively for your group</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b19d7f] font-bold">◆</span>
                  <span>Mangrove canopy, Neyyar river &amp; golden beach</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b19d7f] font-bold">◆</span>
                  <span>Experienced native driver certified in safety</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b19d7f] font-bold">◆</span>
                  <span>Floating restaurant stop available on request</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handleBook('Whole Boat 2-Hour Ride (Rs 1,200)')}
              className="w-full py-4 bg-[#b19d7f] hover:bg-[#9e8a6d] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-[7px] transition-all duration-300 cursor-pointer shadow-xl hover:-translate-y-0.5"
            >
              Book Whole Boat (Rs 1,200)
            </button>
          </div>

          {/* Plan 3: Private Couple Ride */}
          <div className="bg-[#faf8f5] rounded-[7px] border border-gray-200/80 p-8 sm:p-10 flex flex-col justify-between text-center space-y-6 shadow-md hover:shadow-2xl transition-all duration-500">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 block font-semibold">
                PRIVATE COUPLE (HONEYMOON)
              </span>
              <div className="py-3 border-y border-gray-200">
                <span className="font-marcellus text-3xl sm:text-4xl text-[#06192e] font-bold block">
                  Rs 600
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[#b19d7f] block mt-1">
                  EACH (RS 1,200 FOR BOAT)
                </span>
              </div>
              <p className="text-xs text-gray-600 font-light leading-relaxed pt-2">
                A couple booking a boat for themselves pays Rs 600 each. Complete privacy, scenic backwaters, quiet canals, and romantic vistas.
              </p>
              <ul className="space-y-2.5 text-xs text-gray-600 font-light text-left border-t border-gray-200 pt-4">
                <li className="flex items-center gap-2">
                  <span className="text-[#b19d7f]">◆</span>
                  <span>Total seclusion with dedicated captain</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b19d7f]">◆</span>
                  <span>Stunning sunset &amp; estuary photo opportunities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#b19d7f]">◆</span>
                  <span>Flexible duration &amp; optional dining halt</span>
                </li>
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handleBook('Honeymoon Couple Ride (Rs 1,200 / Rs 600 each)')}
              className="w-full py-4 bg-[#06192e] hover:bg-[#b19d7f] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-[7px] transition-all duration-300 cursor-pointer shadow-lg hover:-translate-y-0.5"
            >
              Choose Plan
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
