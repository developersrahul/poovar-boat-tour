import React, { useState } from 'react';

// Exact 6 Key Sights from Poovar boat .pdf
const destinations = [
  {
    id: 'mangroves',
    step: '01',
    name: 'MANGROVE FOREST',
    tag: 'Dense Virgin Canopies',
    coords: '8°18\'42"N • 77°03\'58"E',
    image: '/images/poovar_mangrove_deep.webp',
    description: 'Poovar is famous for quiet canals shaded by thick mangroves. The branches arch over the water to make natural green tunnels where motorboats drift peacefully.',
    sightNotes: 'Kingfishers, egrets, and pond herons nest in the tangled roots along both banks.'
  },
  {
    id: 'beach',
    step: '02',
    name: 'GOLDEN SAND BEACH',
    tag: 'Coastline Sandbar',
    coords: '8°18\'15"N • 77°03\'30"E',
    image: '/images/poovar_golden_beach.webp',
    description: 'The Poovar boat ride goes close to the golden sand beach at the river mouth. The sand spit separates the calm backwaters from the open waves of the Arabian Sea.',
    sightNotes: 'A scenic spot for photos where the river sands meet coastal ocean breezes.'
  },
  {
    id: 'estuary',
    step: '03',
    name: 'NEYYAR ESTUARY',
    tag: 'Pozhi River Confluence',
    coords: '8°18\'22"N • 77°03\'38"E',
    image: '/images/poovar_estuary.webp',
    description: 'The place where the Neyyar River, the calm backwaters, and the Arabian Sea come together is one of the most memorable sights in Poovar.',
    sightNotes: 'Known locally as Pozhimukham, offering wide panoramic horizon vistas.'
  },
  {
    id: 'river-mouth',
    step: '04',
    name: 'POZHI RIVER MOUTH',
    tag: 'Natural Water Boundary',
    coords: '8°18\'10"N • 77°03\'25"E',
    image: '/images/poovar_panorama_backwaters.webp',
    description: 'The river mouth changes shape with the tides and the seasons. Watching the waters meet from the safety of the boat is a highlight of the cruise.',
    sightNotes: 'Dramatic meeting of sweet river water and oceanic swells.'
  },
  {
    id: 'floating-restaurant',
    step: '05',
    name: 'FLOATING RESTAURANT',
    tag: 'Backwater Dining Stop',
    coords: '8°18\'50"N • 77°04\'10"E',
    image: '/images/poovar_floating_dining.webp',
    description: 'The Poovar backwaters feature floating restaurants serving fresh Kerala seafood and local meals. You can request a dining halt when scheduling your ride.',
    sightNotes: 'Traditional Kerala fish fry, tender coconut water, and chai amidst the waters.'
  },
  {
    id: 'mother-mary',
    step: '06',
    name: 'MOTHER MARY STATUE',
    tag: 'Coastal Heritage Landmark',
    coords: '8°18\'35"N • 77°04\'02"E',
    image: '/images/gallery/gallery_16.webp',
    description: 'A historic statue standing on the backwater banks, honoring local fishing families and centuries of coastal heritage along the Neyyar river.',
    sightNotes: 'Revered landmark visited by all standard 2-hour backwater cruise itineraries.'
  }
];

export default function NeeraDestinationRoute() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeDest = destinations[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const progressPercent = ((currentIndex + 1) / destinations.length) * 100;

  return (
    <section id="destination-route" className="relative bg-[#f8f6f0] py-20 lg:py-28 overflow-hidden text-[#0d0d0d] border-b border-[#ede8e1]">
      {/* Soft background ambient gradients */}
      
      

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto neera-reveal">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b19d7f] block">
            BEST DESTINATIONS
          </span>
          <h2 className="font-marcellus text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.14em] text-[#06192e]">
            EXPLORE DESTINATIONS
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Key sights included in our standard 2-hour Poovar backwater cruise through mangroves, estuary, and beach.
          </p>
        </div>

        {/* =====================================================================
            SMOOTH CONTROLLER BAR: Milestone Timeline Scrubber & Arrows
            ===================================================================== */}
        <div className="flex flex-col items-center gap-6">
          
          {/* Milestone Stepper Timeline with Connecting Line */}
          <div className="w-full max-w-4xl px-2 sm:px-6 relative">
            {/* Background connecting track */}
            <div className="absolute top-1/2 left-6 right-6 -translate-y-1/2 h-1 bg-gray-200 rounded-[7px] -z-0" />
            {/* Animated active progress fill */}
            <div
              className="absolute top-1/2 left-6 -translate-y-1/2 h-1 bg-[#b19d7f] rounded-[7px] transition-all duration-500 ease-out -z-0"
              style={{
                width: `calc(${progressPercent}% - 3rem)`
              }}
            />

            {/* 6 Milestone Nodes */}
            <div className="flex items-center justify-between relative z-10">
              {destinations.map((d, idx) => {
                const isActive = currentIndex === idx;
                const isPassed = currentIndex >= idx;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className="flex flex-col items-center gap-2 group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-[7px] flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-[#06192e] text-[#c9b79b] ring-4 ring-[#b19d7f]/40 scale-110'
                          : isPassed
                          ? 'bg-[#b19d7f] text-white'
                          : 'bg-white text-gray-400 border border-gray-300 hover:border-[#b19d7f]'
                      }`}
                    >
                      {d.step}
                    </div>
                    <span
                      className={`hidden md:block text-[10px] font-marcellus uppercase tracking-wider max-w-[80px] text-center leading-tight transition-colors ${
                        isActive ? 'text-[#06192e] font-bold' : 'text-gray-400 group-hover:text-gray-700'
                      }`}
                    >
                      {d.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Stepper Controls Bar */}
          <div className="flex items-center justify-between w-full max-w-xl p-3 bg-white/95 rounded-[7px] border border-gray-200/80 shadow-sm text-xs font-mono uppercase tracking-wider">
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2 rounded-[7px] border border-gray-200 hover:border-[#b19d7f] hover:bg-[#b19d7f] hover:text-white flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>&larr;</span>
              <span>Prev Stop</span>
            </button>

            <div className="flex items-center gap-2">
              <span className="font-bold text-[#b19d7f]">STOP {activeDest.step}</span>
              <span className="text-gray-300">•</span>
              <span className="text-[#06192e] font-semibold">{activeDest.name}</span>
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 rounded-[7px] border border-gray-200 hover:border-[#b19d7f] hover:bg-[#b19d7f] hover:text-white flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>Next Stop</span>
              <span>&rarr;</span>
            </button>
          </div>

        </div>

        {/* =====================================================================
            ORGANIC ROUTE SHOWCASE (No rigid rectangular box)
            ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-2">
          
          {/* Left Column: Curved Photo with Floating GPS Badge */}
          <div className="lg:col-span-7 relative">
            <div className="relative overflow-hidden rounded-[7px] shadow-2xl border border-white group">
              <img
                key={activeDest.id}
                src={activeDest.image}
                alt={activeDest.name}
                loading="lazy"
                className="w-full h-80 sm:h-[420px] lg:h-[460px] object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating GPS Pill */}
              <div className="absolute top-5 left-5 bg-[#06192e]/95 text-[#c9b79b] border border-[#b19d7f]/40 px-4 py-1.5 rounded-[7px] text-[10px] font-mono uppercase tracking-widest shadow-lg flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#b19d7f] rounded-[7px] animate-ping" />
                <span>GPS: {activeDest.coords}</span>
              </div>

              {/* Tag Badge */}
              <div className="absolute bottom-5 left-5 bg-white/95 px-4 py-2 rounded-[7px] shadow-xl border border-white">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#b19d7f] font-bold block">
                  Milestone {activeDest.step} of 06
                </span>
                <span className="font-marcellus text-base sm:text-lg text-[#06192e] font-semibold block">
                  {activeDest.name}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Destination Details & Nautical Notes */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#b19d7f] font-bold block">
                {activeDest.tag}
              </span>
              <h3 className="font-marcellus text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.12em] text-[#06192e] leading-snug">
                {activeDest.name}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              {activeDest.description}
            </p>

            {/* Skipper Sight Notes */}
            <div className="p-5 bg-white/80  rounded-[7px] border border-gray-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#b19d7f] font-bold">
                <span>📍 Skipper Observation Notes</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                {activeDest.sightNotes}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).openBookingModal) {
                    (window as any).openBookingModal(`Poovar Backwater Ride via ${activeDest.name} (Rs 1,200)`);
                  }
                }}
                className="px-8 py-3.5 bg-[#06192e] hover:bg-[#b19d7f] text-white font-bold uppercase tracking-[0.2em] text-xs rounded-[7px] transition-all duration-300 shadow-xl cursor-pointer"
              >
                Book This Route
              </button>
              <a
                href="/services/"
                className="px-6 py-3.5 border border-gray-300 hover:border-[#06192e] text-[#06192e] font-bold uppercase tracking-[0.18em] text-xs rounded-[7px] transition-all duration-300 hover:bg-white"
              >
                View Full Route Map
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
