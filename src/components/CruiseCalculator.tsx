import React, { useState } from 'react';

interface CruiseOption {
  id: string;
  name: string;
  basePrice: number;
  durationText: string;
  icon: string;
  badge?: string;
  description: string;
}

const CRUISE_OPTIONS: CruiseOption[] = [
  {
    id: 'motor-boat',
    name: 'Motor Boat Cruise',
    basePrice: 1200,
    durationText: '2 Hours Standard',
    icon: 'ph-sailboat',
    badge: 'Most Popular',
    description: 'Our signature cruise covering backwater canals, mangrove tunnel, estuary and golden beach.'
  },
  {
    id: 'sunset',
    name: 'Sunset Cruise',
    basePrice: 1200,
    durationText: '2 Hours (5:00 PM - 6:30 PM)',
    icon: 'ph-sun-horizon',
    badge: 'Golden Hour',
    description: 'Evening boat ride timed for gentle breezes, soft reflections and glowing sunset over the Arabian Sea.'
  },
  {
    id: 'honeymoon',
    name: 'Honeymoon Cruise',
    basePrice: 1200,
    durationText: '2 Hours Private',
    icon: 'ph-heart',
    badge: 'Romantic',
    description: 'Private serene cruise for couples to experience tranquil backwaters and isolated sands in privacy.'
  },
  {
    id: 'bird-watching',
    name: 'Bird Watching Cruise',
    basePrice: 1200,
    durationText: '2 Hours Early Morning',
    icon: 'ph-binoculars',
    badge: 'Wildlife Focus',
    description: 'Slow-speed quiet navigation through inner mangrove waterways for bird watchers & photographers.'
  },
  {
    id: 'taxi',
    name: 'Sightseeing Taxi Service',
    basePrice: 0,
    durationText: 'Custom Duration',
    icon: 'ph-taxi',
    badge: 'Custom Tour',
    description: 'Airport/railway pickup, drop, and combined local sightseeing in Kovalam, Kanyakumari or Trivandrum.'
  }
];

export default function CruiseCalculator() {
  const [selectedCruise, setSelectedCruise] = useState<CruiseOption>(CRUISE_OPTIONS[0]);
  const [duration, setDuration] = useState<string>('2hr');
  const [passengers, setPassengers] = useState<number>(4);
  const [includeFloatingRestaurant, setIncludeFloatingRestaurant] = useState<boolean>(true);
  const [includeBeachWalk, setIncludeBeachWalk] = useState<boolean>(true);

  // 1 boat holds up to 7 pax
  const boatsNeeded = Math.ceil(passengers / 7);
  
  // Pricing calculation
  const isTaxi = selectedCruise.id === 'taxi';
  let ratePerBoat = 1200;
  if (duration === '1hr') {
    ratePerBoat = 800;
  } else if (duration === '3hr') {
    ratePerBoat = 1800;
  }

  const totalFare = isTaxi ? 'Custom Quote' : `Rs ${(ratePerBoat * boatsNeeded).toLocaleString('en-IN')}`;
  const perPersonCost = !isTaxi && passengers > 0 
    ? `~Rs ${Math.round((ratePerBoat * boatsNeeded) / passengers)} / person` 
    : 'Custom Rate';

  const generateWhatsAppMessage = () => {
    let msg = `Hello Poovar Boat Tour! I would like to book a backwater ride:%0A%0A`;
    msg += `*Cruise:* ${selectedCruise.name}%0A`;
    msg += `*Duration:* ${duration === '1hr' ? '1 Hour Express' : duration === '2hr' ? '2 Hours Standard' : '3 Hours Safari'}%0A`;
    msg += `*Passengers:* ${passengers} Guests (${boatsNeeded} ${boatsNeeded > 1 ? 'Boats' : 'Boat'})%0A`;
    if (!isTaxi) {
      msg += `*Estimated Fare:* ${totalFare} (${perPersonCost})%0A`;
    }
    msg += `*Optional Halts:* ${includeFloatingRestaurant ? 'Floating Restaurant Halt (Yes)' : 'No'}, ${includeBeachWalk ? 'Golden Beach Walk (Yes)' : 'No'}%0A%0A`;
    msg += `Please confirm slot availability for my date.`;
    return msg;
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/917902291301?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
  };

  const handleModalBooking = () => {
    const detail = `${selectedCruise.name} (${passengers} Guests, ${duration === '1hr' ? '1hr' : duration === '2hr' ? '2hr' : '3hr'}) - ${totalFare}`;
    if (typeof (window as any).openBookingModal === 'function') {
      (window as any).openBookingModal(detail);
    } else {
      handleWhatsAppClick();
    }
  };

  return (
    <div className="bg-white border border-[#ede8e1] shadow-xs overflow-hidden">
      {/* Header Bar matching Neera Midnight Ocean Navy */}
      <div className="bg-[#06192e] text-white p-5 sm:p-7 md:p-8 relative overflow-hidden border-b border-white/10">
        <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-48 h-48 bg-[#b19d7f]/15 rounded-full blur-2xl pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#b19d7f]/20 text-[#b19d7f] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] mb-2 border border-[#b19d7f]/30">
              <i className="ph-fill ph-calculator text-xs"></i> INTERACTIVE TARIFF ESTIMATOR
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-marcellus text-white tracking-tight uppercase">
              Instant Cruise Fare Calculator
            </h3>
            <p className="text-white/80 text-xs sm:text-sm mt-1 font-light max-w-xl leading-relaxed">
              Select your cruise preferences to view transparent group pricing. All rates are per boat (up to 7 guests per boat) with no hidden fees.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-3.5 py-2 border border-white/15 self-start md:self-auto">
            <i className="ph-fill ph-shield-check text-[#b19d7f] text-lg"></i>
            <span className="text-xs text-white/90 font-medium">Captain Direct • No Markup</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
        {/* Left Inputs (7 Cols) */}
        <div className="lg:col-span-7 space-y-5 sm:space-y-6">
          {/* Step 1: Choose Cruise */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2.5">
              <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#06192e]">
                Step 1: Select Your Cruise Experience
              </label>
              <span className="text-gray-500 font-mono text-[10px] sm:text-[11px]">Single boat capacity: 7 pax</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {CRUISE_OPTIONS.map((cruise) => {
                const isSelected = selectedCruise.id === cruise.id;
                return (
                  <button
                    key={cruise.id}
                    type="button"
                    onClick={() => setSelectedCruise(cruise)}
                    className={`text-left p-3 sm:p-3.5 border transition-all relative cursor-pointer ${
                      isSelected
                        ? 'border-[#b19d7f] bg-[#f5f3ef] shadow-xs ring-1 ring-[#b19d7f]'
                        : 'border-[#ede8e1] hover:border-[#b19d7f]/50 bg-white hover:bg-[#f5f3ef]/50'
                    }`}
                  >
                    {cruise.badge && (
                      <span className={`absolute top-2.5 right-2.5 text-[8.5px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 ${
                        isSelected ? 'bg-[#06192e] text-[#b19d7f]' : 'bg-[#ede8e1] text-gray-700'
                      }`}>
                        {cruise.badge}
                      </span>
                    )}
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className={`w-7 h-7 flex items-center justify-center text-sm ${
                        isSelected ? 'bg-[#06192e] text-[#b19d7f]' : 'bg-[#f5f3ef] text-[#06192e]'
                      }`}>
                        <i className={`ph-bold ${cruise.icon}`}></i>
                      </div>
                      <h4 className="font-semibold text-xs sm:text-sm text-[#06192e] pr-12">
                        {cruise.name}
                      </h4>
                    </div>
                    <p className="text-[11px] text-gray-600 line-clamp-2 leading-relaxed font-light">
                      {cruise.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Duration */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#06192e] mb-2">
              Step 2: Choose Duration
            </label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setDuration('1hr')}
                className={`py-2.5 sm:py-3 px-1 sm:px-3 border text-center transition cursor-pointer ${
                  duration === '1hr'
                    ? 'border-[#06192e] bg-[#06192e] text-white font-bold'
                    : 'border-[#ede8e1] bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="text-xs sm:text-sm font-semibold">1 Hour</div>
                <div className={`text-[9px] sm:text-[10px] mt-0.5 ${duration === '1hr' ? 'text-white/70' : 'text-gray-500'}`}>Quick Glimpse</div>
              </button>
              <button
                type="button"
                onClick={() => setDuration('2hr')}
                className={`py-2.5 sm:py-3 px-1 sm:px-3 border text-center transition cursor-pointer relative ${
                  duration === '2hr'
                    ? 'border-[#06192e] bg-[#06192e] text-white font-bold ring-1 ring-[#06192e]'
                    : 'border-[#ede8e1] bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#b19d7f] text-white text-[7px] sm:text-[8px] font-bold uppercase px-1.5 py-0.5 tracking-wider whitespace-nowrap">
                  Recommended
                </span>
                <div className="text-xs sm:text-sm font-semibold">2 Hours</div>
                <div className={`text-[9px] sm:text-[10px] mt-0.5 ${duration === '2hr' ? 'text-white/70' : 'text-gray-500'}`}>Full Estuary Tour</div>
              </button>
              <button
                type="button"
                onClick={() => setDuration('3hr')}
                className={`py-2.5 sm:py-3 px-1 sm:px-3 border text-center transition cursor-pointer ${
                  duration === '3hr'
                    ? 'border-[#06192e] bg-[#06192e] text-white font-bold'
                    : 'border-[#ede8e1] bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="text-xs sm:text-sm font-semibold">3 Hours</div>
                <div className={`text-[9px] sm:text-[10px] mt-0.5 ${duration === '3hr' ? 'text-white/70' : 'text-gray-500'}`}>Deep Explorer</div>
              </button>
            </div>
          </div>

          {/* Step 3: Passenger Count */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#06192e]">
                Step 3: Number of Guests
              </label>
              <span className="text-[11px] sm:text-xs font-bold text-[#06192e] bg-[#f5f3ef] px-2.5 py-0.5 border border-[#ede8e1] font-mono">
                {passengers} {passengers === 1 ? 'Guest' : 'Guests'} • {boatsNeeded} {boatsNeeded === 1 ? 'Boat' : 'Boats'}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="1"
                max="21"
                step="1"
                value={passengers}
                onChange={(e) => setPassengers(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 appearance-none cursor-pointer accent-[#06192e]"
              />
            </div>
            <div className="flex justify-between text-[9px] sm:text-[11px] text-gray-500 mt-1 font-mono">
              <span>1 Pax (Solo)</span>
              <span>7 Pax (1 Boat)</span>
              <span>14 Pax (2 Boats)</span>
              <span>21 Pax (3 Boats)</span>
            </div>
          </div>

          {/* Step 4: Optional Complimentary Halts */}
          <div>
            <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#06192e] mb-2">
              Step 4: Complimentary Halts &amp; Preferences
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <label className={`flex items-start gap-2.5 p-3 border cursor-pointer transition ${
                includeFloatingRestaurant ? 'border-[#b19d7f] bg-[#f5f3ef]' : 'border-[#ede8e1] bg-white'
              }`}>
                <input
                  type="checkbox"
                  checked={includeFloatingRestaurant}
                  onChange={(e) => setIncludeFloatingRestaurant(e.target.checked)}
                  className="mt-0.5 accent-[#06192e] h-4 w-4"
                />
                <span className="text-xs text-[#06192e] font-medium leading-tight">
                  Floating Restaurant Stopover
                  <span className="block text-[10px] text-gray-500 font-normal mt-0.5">Kerala seafood or tender coconut water</span>
                </span>
              </label>

              <label className={`flex items-start gap-2.5 p-3 border cursor-pointer transition ${
                includeBeachWalk ? 'border-[#b19d7f] bg-[#f5f3ef]' : 'border-[#ede8e1] bg-white'
              }`}>
                <input
                  type="checkbox"
                  checked={includeBeachWalk}
                  onChange={(e) => setIncludeBeachWalk(e.target.checked)}
                  className="mt-0.5 accent-[#06192e] h-4 w-4"
                />
                <span className="text-xs text-[#06192e] font-medium leading-tight">
                  Golden Sand Beach Walk
                  <span className="block text-[10px] text-gray-500 font-normal mt-0.5">Walk the sandspit between river &amp; sea</span>
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Output Summary Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#06192e] text-white p-5 sm:p-7 md:p-8 relative overflow-hidden shadow-xl border border-white/10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#b19d7f]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-5 sm:space-y-6 relative z-10">
            <div className="border-b border-white/10 pb-4">
              <span className="text-[#b19d7f] text-[10px] font-bold uppercase tracking-widest block mb-1">
                Your Estimated Tariff
              </span>
              <h4 className="text-xl sm:text-2xl font-marcellus text-white uppercase">
                {selectedCruise.name}
              </h4>
              <p className="text-xs text-white/70 mt-0.5">
                {duration === '1hr' ? '1 Hour Express' : duration === '2hr' ? '2 Hours Full Estuary Tour' : '3 Hours Deep Safari'}
              </p>
            </div>

            {/* Price Figures */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-3xl sm:text-4xl font-marcellus font-bold text-white tracking-tight">
                  {totalFare}
                </span>
                {!isTaxi && (
                  <span className="text-xs text-white/60">
                    total for {boatsNeeded} {boatsNeeded === 1 ? 'boat' : 'boats'}
                  </span>
                )}
              </div>
              <p className="text-xs text-[#b19d7f] font-medium">
                {perPersonCost} • Shared equally among {passengers} {passengers === 1 ? 'person' : 'people'}
              </p>
            </div>

            {/* Inclusions Checklist */}
            <div className="space-y-2.5 pt-2 border-t border-white/10">
              <span className="text-[11px] font-bold uppercase tracking-wider text-white/60 block">
                Included in Your Ride:
              </span>
              <ul className="text-xs text-white/85 space-y-2 font-light">
                <li className="flex items-center gap-2">
                  <i className="ph-bold ph-check text-[#b19d7f] flex-shrink-0"></i>
                  <span>Private boat for your group (no strangers)</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ph-bold ph-check text-[#b19d7f] flex-shrink-0"></i>
                  <span>Life jackets for all adults &amp; kids</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ph-bold ph-check text-[#b19d7f] flex-shrink-0"></i>
                  <span>Certified local captain &amp; navigator</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ph-bold ph-check text-[#b19d7f] flex-shrink-0"></i>
                  <span>Mangrove forest canopy, estuary &amp; beach views</span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ph-bold ph-check text-[#b19d7f] flex-shrink-0"></i>
                  <span>Free jetty parking &amp; boarding assistance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-3 relative z-10 border-t border-white/10 mt-6">
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full py-3.5 px-4 bg-[#b19d7f] hover:bg-[#9e8a6d] text-white font-bold text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.98]"
            >
              <i className="ph-bold ph-whatsapp-logo text-base"></i>
              <span>Book via WhatsApp Now</span>
            </button>

            <button
              type="button"
              onClick={handleModalBooking}
              className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-[0.18em] transition border border-white/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="ph-bold ph-calendar-check text-[#b19d7f]"></i>
              <span>Reserve Online / Request Call</span>
            </button>

            <p className="text-[10px] text-center text-white/50">
              Pay upon arrival at the jetty • UPI, Cash or Card accepted
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
