import React, { useState } from 'react';

// Exact 5 Services from Poovar boat .pdf
const cruiseOptions = [
  {
    id: 'motor-boat',
    tabLabel: 'Motor boat cruise',
    title: 'MOTOR BOAT CRUISE',
    badge: 'Standard 2-Hour Backwater Ride',
    specs: 'Zona Neyyar Estuary • Up to 7 Persons • 2 Hours Duration',
    price: 'Rs 1,200',
    priceNote: 'Per boat (up to 7 guests) • Direct Captain Rate',
    image: '/images/poovar_traditional_canoe.webp',
    description: 'The standard Poovar Boat Tour ride is 2 hours on the backwaters for up to 7 people. Your ride goes through quiet canals lined with mangroves, past the place where the Neyyar River meets the Arabian Sea, and along the golden sand beach.',
    points: [
      'Mangrove forest canopy canals',
      'Neyyar River & Pozhi estuary confluence',
      'Golden Sand Beach shoreline',
      'Floating restaurant pass & photo stops'
    ]
  },
  {
    id: 'sunset-cruise',
    tabLabel: 'Sunset cruise',
    title: 'SUNSET BOAT CRUISE',
    badge: 'Late Afternoon Golden Hour',
    specs: 'Golden Hour Route • Up to 7 Persons • 5:00 PM – 6:30 PM',
    price: 'Rs 1,200',
    priceNote: 'Per boat • Recommended for photography',
    image: '/images/poovar_golden_sunset.webp',
    description: 'The sunset cruise starts in the late afternoon, between 5:00 PM and 6:30 PM. Watch evening light over the river and the sea from the calm water. The sunset cruise is one of the most popular rides, so booking in advance is a good idea.',
    points: [
      'Dusk sky over Arabian Sea horizon',
      'Golden reflections across backwater estuary',
      'Cool evening coastal breeze',
      'Spacious calm ride for families & couples'
    ]
  },
  {
    id: 'honeymoon-cruise',
    tabLabel: 'Honeymoon cruise',
    title: 'HONEYMOON COUPLE CRUISE',
    badge: 'Private Couple Experience',
    specs: 'Private Boat • 2 Persons • Scenic Secluded Canals',
    price: 'Rs 1,200',
    priceNote: 'Per boat • Total privacy & dedicated driver',
    image: '/images/poovar_floating_cottage.webp',
    description: 'A private boat ride for couples on the calm backwaters of Poovar. Enjoy quiet canals, beautiful views, and time together on the water. A couple booking a boat for themselves pays Rs 600 each.',
    points: [
      'Private 2-passenger boat charter',
      'Scenic halts for photographs',
      'Shaded secluded mangrove passageways',
      'Optional floating restaurant halt'
    ]
  },
  {
    id: 'bird-watching',
    tabLabel: 'Bird watching cruise',
    title: 'BIRD WATCHING CRUISE',
    badge: 'Mangrove Biodiversity Route',
    specs: 'Morning Bird Habitat Route • Up to 7 Persons • Binocular Halts',
    price: 'Rs 1,200',
    priceNote: 'Per boat • Best between 6:30 AM and 9:00 AM',
    image: '/images/poovar_cormorant.webp',
    description: 'Poovar is home to many water birds, kingfishers, egrets, and herons that nest in the mangroves. A slow morning boat cruise is the best way to watch birds along the riverbanks in peace.',
    points: [
      'Early morning quiet waters',
      'Spot kingfishers, brahminy kites & darters',
      'Slow engine idle for wildlife observation',
      'Guided navigation through dense creek channels'
    ]
  },
  {
    id: 'taxi-service',
    tabLabel: 'Taxi service',
    title: 'TAXI SERVICE & TOURS',
    badge: 'Airport, Railway & Sightseeing',
    specs: 'Air-Conditioned Car • Trivandrum & Kanyakumari Routes',
    price: 'On Request',
    priceNote: 'Direct quote based on pickup location',
    image: '/images/kerala_travel_road.webp',
    description: 'We can arrange pick-up and drop for your boat ride, and a trip to nearby tourist spots. Trivandrum airport is 30 km away, Trivandrum Central railway station is 27 km away, and Kanyakumari is 71 km away. Tell us where you need a taxi from when you book.',
    points: [
      'Trivandrum Airport pickup (30 km)',
      'Trivandrum Central Railway drop (27 km)',
      'Kanyakumari day excursion (71 km)',
      'Clean air-conditioned tourist vehicle'
    ]
  }
];

export default function NeeraBoatTabSelector() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeCruise = cruiseOptions[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cruiseOptions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cruiseOptions.length - 1 ? 0 : prev + 1));
  };

  const handleBook = () => {
    if (typeof window !== 'undefined' && (window as any).openBookingModal) {
      (window as any).openBookingModal(`${activeCruise.title} (${activeCruise.price})`);
    } else {
      window.open(`https://wa.me/917902291301?text=Hello,%20I%20would%20like%20to%20book%20the%20${encodeURIComponent(activeCruise.title)}.`, '_blank');
    }
  };

  const progressPercent = ((currentIndex + 1) / cruiseOptions.length) * 100;

  return (
    <section id="boat-selector" className="relative bg-[#faf8f5] py-20 lg:py-28 overflow-hidden text-[#0d0d0d] border-b border-[#ede8e1]">
      {/* Subtle organic background ambient glow */}
      
      

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto neera-reveal">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b19d7f] block">
            HAPPY JOURNEY
          </span>
          <h2 className="font-marcellus text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.14em] text-[#06192e]">
            SELECT YOUR RIGHT BOAT !
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light max-w-xl mx-auto">
            Choose from our signature backwater cruises. All boat rides feature direct captain rates with zero middleman commissions.
          </p>
        </div>

        {/* =====================================================================
            SMOOTH CONTROLLER BAR: Segmented Pills + Arrows + Progress Scrubber
            ===================================================================== */}
        <div className="flex flex-col items-center gap-5">
          {/* Segmented Pill Navigation Track */}
          <div className="relative p-1.5 bg-[#ede8e1]/70  rounded-[7px] shadow-inner max-w-full overflow-x-auto no-scrollbar flex items-center gap-1">
            {cruiseOptions.map((opt, idx) => {
              const isActive = currentIndex === idx;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative px-4 sm:px-6 py-2.5 rounded-[7px] text-xs font-marcellus uppercase tracking-[0.14em] transition-all duration-300 whitespace-nowrap cursor-pointer z-10 ${
                    isActive
                      ? 'text-white font-bold shadow-md'
                      : 'text-gray-600 hover:text-[#06192e]'
                  }`}
                >
                  {/* Smooth active background pill indicator */}
                  {isActive && (
                    <span className="absolute inset-0 bg-[#06192e] rounded-[7px] -z-10 shadow-lg animate-fadeIn" />
                  )}
                  <span>{opt.tabLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Controller Counter & Arrow Buttons */}
          <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-[0.2em] text-[#06192e]">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous cruise"
              className="w-9 h-9 rounded-[7px] border border-gray-300 hover:border-[#b19d7f] hover:bg-[#b19d7f] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              <span className="text-sm">&larr;</span>
            </button>

            {/* Slide Index Counter & Animated Progress */}
            <div className="flex items-center gap-3">
              <span className="font-bold text-[#b19d7f]">0{currentIndex + 1}</span>
              <div className="w-24 sm:w-32 h-1 bg-gray-200 rounded-[7px] overflow-hidden">
                <div
                  className="h-full bg-[#b19d7f] transition-all duration-500 ease-out rounded-[7px]"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <span className="text-gray-400">0{cruiseOptions.length}</span>
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next cruise"
              className="w-9 h-9 rounded-[7px] border border-gray-300 hover:border-[#b19d7f] hover:bg-[#b19d7f] hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            >
              <span className="text-sm">&rarr;</span>
            </button>
          </div>
        </div>

        {/* =====================================================================
            ORGANIC ASYMMETRIC SHOWCASE (No rigid enclosed box)
            Fluid rounded cards with floating badges and clean typography
            ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-4">
          
          {/* Left Column: Curved Photo Frame with Floating Glass Badge */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden rounded-[7px] shadow-2xl border border-white/60 group">
              <img
                key={activeCruise.id}
                src={activeCruise.image}
                alt={activeCruise.title}
                loading="lazy"
                className="w-full h-80 sm:h-[440px] lg:h-[480px] object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge */}
              <div className="absolute top-5 left-5 bg-[#06192e]/95 border border-[#b19d7f]/40 text-[#c9b79b] px-4 py-1.5 rounded-[7px] text-[11px] font-mono uppercase tracking-[0.2em] shadow-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#b19d7f] rounded-[7px] animate-pulse" />
                <span>{activeCruise.badge}</span>
              </div>

              {/* Floating Rate Tag */}
              <div className="absolute bottom-5 right-5 bg-white/95 text-[#06192e] px-5 py-2.5 rounded-[7px] shadow-2xl border border-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block">Flat Rate</span>
                <span className="font-marcellus text-xl sm:text-2xl font-bold text-[#06192e]">{activeCruise.price}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Fluid Editorial Content & Booking Action */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b19d7f] block font-semibold">
                {activeCruise.specs}
              </span>
              <h3 className="font-marcellus text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.12em] text-[#06192e] leading-snug">
                {activeCruise.title}
              </h3>
            </div>

            <div className="py-3 border-y border-gray-200/80 flex items-baseline justify-between">
              <div>
                <span className="text-3xl sm:text-4xl font-marcellus text-[#06192e] font-bold block">
                  {activeCruise.price}
                </span>
                <span className="text-xs text-gray-500 font-light block mt-0.5">
                  {activeCruise.priceNote}
                </span>
              </div>
              <span className="px-3 py-1 bg-[#b19d7f]/15 text-[#9e8a6d] rounded-[7px] text-[10px] font-mono uppercase tracking-wider font-bold">
                Max 7 Guests
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
              {activeCruise.description}
            </p>

            {/* Verbatim Point Highlights */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 block font-bold">
                Cruise Inclusions:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700 font-light">
                {activeCruise.points.map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 bg-white/70  p-2 rounded-[7px] border border-gray-200/60 shadow-xs">
                    <span className="text-[#b19d7f] font-bold text-xs">◆</span>
                    <span className="leading-tight">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleBook}
                className="flex-1 sm:flex-initial px-8 py-3.5 bg-[#06192e] hover:bg-[#b19d7f] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-[7px] transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
              >
                Book This Ride
              </button>
              <a
                href="tel:+917902291301"
                className="px-6 py-3.5 border border-gray-300 hover:border-[#06192e] text-[#06192e] font-bold uppercase tracking-[0.18em] text-xs rounded-[7px] transition-all duration-300 hover:bg-white flex items-center gap-2"
              >
                <span>Call Captain</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
