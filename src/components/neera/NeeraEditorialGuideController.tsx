import React, { useState } from 'react';

// Exact 10 Topics from Pages 1-4 of "Poovar boat .pdf"
const guideTopics = [
  {
    id: '01',
    category: 'Geography & Atmosphere',
    title: 'What Is Poovar Famous For?',
    image: '/images/poovar_sandspit_ocean.webp',
    imageAlt: 'Poovar Backwater Boating Estuary & Mangroves',
    tag: 'Estuary & Beach Confluence',
    content: [
      'Poovar is a coastal village in Thiruvananthapuram, Kerala, famous for backwater boating where the Neyyar River meets the Arabian Sea, with mangroves and a golden sand beach.',
      'The village has calm canals, fishing boats and green banks. It is a quiet place to slow down, away from the busy beaches nearby.'
    ],
    bullets: [
      'Natural meeting point of Neyyar River and Arabian Sea',
      'Quiet mangrove canopies away from crowded tourist hubs',
      'Traditional wooden and motor boats navigating calm canals'
    ]
  },
  {
    id: '02',
    category: 'Distance & Commute',
    title: 'How Far Is Poovar from Trivandrum?',
    image: '/images/kerala_travel_road.webp',
    imageAlt: 'Route to Poovar from Trivandrum',
    tag: 'Road Connectivity',
    content: [
      'Poovar is about 30 km from Trivandrum airport and 27 km from Trivandrum Central railway station. Kanyakumari is about 71 km away.',
      'Most visitors reach Poovar by taxi or car. If you need a ride, ask about our taxi service when you book.'
    ],
    bullets: [
      '30 km from Trivandrum International Airport (~1 hour drive)',
      '27 km from Trivandrum Central Railway Station',
      '71 km from Kanyakumari (ideal combined day trip)'
    ]
  },
  {
    id: '03',
    category: 'Flat Transparent Rate',
    title: 'Poovar Boating Price',
    image: '/images/poovar_traditional_canoe.webp',
    imageAlt: 'Poovar Boating Direct Price Rate',
    tag: 'One Price Per Boat',
    content: [
      'Poovar Boat Tour charges Rs 1,200 per boat. One boat carries up to 7 people, so the cost is shared by your group.'
    ],
    bullets: [
      'One flat rate: Rs 1,200 for the entire boat',
      'Accommodates up to 7 passengers together',
      'Works out to ~Rs 170 per person for a full group',
      'Direct booking with local captain — zero middleman commission'
    ]
  },
  {
    id: '04',
    category: 'Activities & Itinerary',
    title: 'Things to Do in Poovar',
    image: '/images/poovar_sand_shore.webp',
    imageAlt: 'Golden Sand Beach and Mangroves Poovar',
    tag: 'Must-Do Experiences',
    content: [
      'The best things to do in Poovar are a backwater boat ride, a walk on the golden sand beach and a visit to the mangroves.'
    ],
    bullets: [
      'Boat ride: Take a motor boat through the canals and out toward the sea mouth.',
      'Beach: See the golden sand beach where the river meets the sea.',
      'Mangroves: Look at the mangrove trees and the birds that live in them.',
      'Sunset: Take an evening ride to watch the sky change colour on the water.',
      'Nearby places: Ask us for a taxi trip to nearby tourist spots.'
    ]
  },
  {
    id: '05',
    category: 'Itinerary Comparison',
    title: 'Poovar or Kovalam for a Day Trip?',
    image: '/images/kovalam_lighthouse.webp',
    imageAlt: 'Poovar vs Kovalam Day Trip Comparison',
    tag: 'Calm Waters vs Busy Beach',
    content: [
      'Choose Poovar for a quiet backwater ride and Kovalam for a busy beach. Many visitors do both in one day.',
      'Poovar is calm and based on boating. Kovalam is a busy beach town with shops and restaurants. A taxi from Poovar Boat Tour can help you plan both.'
    ],
    bullets: [
      'Poovar: serene backwaters, dense mangrove forest, quiet beach spit',
      'Kovalam: bustling crescent beaches, restaurants, cafes, shopping',
      'Combined trip: only ~18 km apart, easily covered in a single day'
    ]
  },
  {
    id: '06',
    category: 'Regional Map',
    title: 'Where Is Poovar Located?',
    image: '/images/poovar_floating_dining.webp',
    imageAlt: 'Poovar Coastal Village Kerala Map',
    tag: 'Southern Kerala Coast',
    content: [
      'Poovar is a coastal village in Thiruvananthapuram district, Kerala, near the Tamil Nadu border, where the Neyyar River meets the Arabian Sea.',
      'The village lies at the southern end of Kerala, so it is easy to combine with a trip to Kovalam or Kanyakumari.'
    ],
    bullets: [
      'Located in Thiruvananthapuram district, South Kerala',
      'Situated near the Kerala-Tamil Nadu border',
      'Perfect geographic hub linking Kovalam and Kanyakumari'
    ]
  },
  {
    id: '07',
    category: 'Backwater Watershed',
    title: 'Why Is Poovar Called a Backwater Destination?',
    image: '/images/poovar_mangrove_roots.webp',
    imageAlt: 'Poovar Backwater Canals and Estuary',
    tag: 'Interconnected Waterways',
    content: [
      'Poovar is called a backwater destination because its calm canals, mangroves and river mouth can be explored by boat, with a golden sand beach where the river meets the sea.',
      'Boats are the main way to see this part of Kerala, which is why a boat ride is the best thing to do here.'
    ],
    bullets: [
      'Extensive network of tidal canals and mangrove tunnels',
      'Sheltered from rough ocean waves by the natural sand spit',
      'Inland water transport is the authentic cultural way of life'
    ]
  },
  {
    id: '08',
    category: 'Sights & Wildlife',
    title: 'What Can I See on a Poovar Boat Ride?',
    image: '/images/poovar_heron_mangrove.webp',
    imageAlt: 'Wildlife and Sights on Poovar Boat Ride',
    tag: 'Scenic Highlights',
    content: [
      'On a Poovar boat ride you can see mangroves, calm backwaters, the river-meets-sea estuary and the golden sand beach.',
      'You may also see fishing boats, village life along the banks and water birds.'
    ],
    bullets: [
      'Thick mangrove root tunnels arching over waterways',
      'Pozhi estuary where freshwater meets the Arabian Sea',
      'Golden sand beach separating river from ocean',
      'Water birds: Kingfishers, egrets, herons, and cormorants'
    ]
  },
  {
    id: '09',
    category: 'Day Excursion',
    title: 'Is Poovar a Good Day Trip from Trivandrum?',
    image: '/images/poovar_dusk_horizon.webp',
    imageAlt: 'Poovar Day Trip from Trivandrum',
    tag: 'Convenient Half-Day Tour',
    content: [
      'Yes, Poovar is a good day trip from Trivandrum. It is about 30 km from the airport and 27 km from Trivandrum Central railway station.',
      'A boat ride takes only a few hours, so you can return the same day. Our taxi service can take you there and back.'
    ],
    bullets: [
      'Quick 45–60 minute drive from central Trivandrum',
      '2-hour boat cruise leaves plenty of time for lunch & beach',
      'Return to Trivandrum in the afternoon or evening smoothly'
    ]
  },
  {
    id: '10',
    category: 'Destination Contrast',
    title: 'How Is Poovar Different from Alleppey Backwaters?',
    image: '/images/poovar_shikara_boat.webp',
    imageAlt: 'Poovar vs Alleppey Backwater Comparison',
    tag: 'Intimate Safari vs Houseboat Stays',
    content: [
      'Poovar is smaller and quieter, with an estuary and a beach, while Alleppey is known for long houseboat stays. Poovar rides are short boat cruises.'
    ],
    bullets: [
      'Poovar: 2-hour intimate motorboat rides, mangrove tunnels, beach & estuary confluence',
      'Alleppey: overnight large houseboat journeys across vast lakes and paddy fields',
      'Poovar is ideal for a half-day scenic nature excursion without overnight commitment'
    ]
  }
];

export default function NeeraEditorialGuideController() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'controller' | 'editorial'>('controller');

  const activeTopic = guideTopics[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? guideTopics.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === guideTopics.length - 1 ? 0 : prev + 1));
  };

  const progressPercent = ((activeIndex + 1) / guideTopics.length) * 100;

  return (
    <section id="destination-guide" className="py-20 lg:py-28 bg-[#faf9f5] text-[#0d0d0d] border-b border-[#ede8e1] relative overflow-hidden">
      {/* Decorative ambient background accents */}
      
      

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header with View Mode Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b19d7f] block mb-2">
              DESTINATION GUIDE &amp; ESSENTIALS
            </span>
            <h2 className="font-marcellus text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.12em] text-[#06192e] leading-tight">
              EXPLORE POOVAR BACKWATERS
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
              Everything you need to know about visiting Poovar, boat rates, estuary geography, and planning your backwater trip.
            </p>
          </div>

          {/* View Mode Toggle Button */}
          <div className="flex items-center gap-2 p-1 bg-[#ede8e1]/70 rounded-[7px] self-start md:self-auto text-xs font-mono uppercase tracking-wider">
            <button
              type="button"
              onClick={() => setViewMode('controller')}
              className={`px-4 py-1.5 rounded-[7px] transition-all cursor-pointer ${
                viewMode === 'controller'
                  ? 'bg-[#06192e] text-white font-bold shadow-md'
                  : 'text-gray-600 hover:text-[#06192e]'
              }`}
            >
              Interactive Controller
            </button>
            <button
              type="button"
              onClick={() => setViewMode('editorial')}
              className={`px-4 py-1.5 rounded-[7px] transition-all cursor-pointer ${
                viewMode === 'editorial'
                  ? 'bg-[#06192e] text-white font-bold shadow-md'
                  : 'text-gray-600 hover:text-[#06192e]'
              }`}
            >
              View All 10 Topics
            </button>
          </div>
        </div>

        {/* =====================================================================
            VIEW MODE 1: SMOOTH CONTROLLER VIEW (Interactive Deck)
            ===================================================================== */}
        {viewMode === 'controller' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Smooth Controller Navigation Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white/95 rounded-[7px] border border-gray-200/80 shadow-sm">
              
              {/* Stepper counter & animated progress line */}
              <div className="flex items-center gap-4">
                <span className="font-marcellus text-lg text-[#06192e] font-bold">
                  TOPIC {activeTopic.id}
                </span>
                <span className="text-gray-300">/</span>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  {activeTopic.category}
                </span>
                <div className="hidden sm:block w-32 h-1 bg-gray-200 rounded-[7px] overflow-hidden ml-2">
                  <div
                    className="h-full bg-[#b19d7f] transition-all duration-500 ease-out rounded-[7px]"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Prev / Next Controller Buttons */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-[7px] border border-gray-300 hover:border-[#b19d7f] hover:bg-[#b19d7f] hover:text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                >
                  <span>&larr;</span>
                  <span>Previous</span>
                </button>
                <span className="text-xs font-mono text-gray-400">
                  {activeTopic.id} of 10
                </span>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 rounded-[7px] border border-gray-300 hover:border-[#b19d7f] hover:bg-[#b19d7f] hover:text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer active:scale-95"
                >
                  <span>Next</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>

            {/* Quick Topic Scrubber Chips (01 to 10) */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
              {guideTopics.map((topic, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`flex-shrink-0 px-3.5 py-1.5 rounded-[7px] text-[11px] font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#b19d7f] text-white font-bold shadow-md scale-105'
                        : 'bg-white/70 text-gray-600 hover:bg-white hover:text-[#06192e] border border-gray-200/60'
                    }`}
                  >
                    <span>{topic.id}. {topic.title.replace('?', '').slice(0, 22)}...</span>
                  </button>
                );
              })}
            </div>

            {/* Active Topic Showcase (Organic layout, rounded-[7px] imagery, floating badge) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center pt-2">
              
              {/* Left Column: Rich Editorial Content */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#b19d7f] font-bold block">
                    {activeTopic.id} • {activeTopic.category}
                  </span>
                  <h3 className="font-marcellus text-2xl sm:text-3xl lg:text-4xl uppercase tracking-[0.12em] text-[#06192e] leading-snug">
                    {activeTopic.title}
                  </h3>
                </div>

                {/* Verbatim Paragraphs from PDF */}
                <div className="space-y-3">
                  {activeTopic.content.map((p, i) => (
                    <p key={i} className="text-sm sm:text-base text-gray-700 font-light leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Bullets with Bronze Accents */}
                <div className="space-y-2.5 pt-2 border-t border-gray-200/80">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400 block font-bold">
                    Key Highlights:
                  </span>
                  <ul className="space-y-2">
                    {activeTopic.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700 font-light">
                        <span className="text-[#b19d7f] font-bold text-xs mt-0.5">◆</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2 flex items-center gap-4">
                  <a
                    href="/pricing/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#06192e] hover:bg-[#b19d7f] text-white text-xs font-bold uppercase tracking-[0.18em] rounded-[7px] transition-all duration-300 shadow-md"
                  >
                    <span>View Boat Rates</span>
                    <span>&rarr;</span>
                  </a>
                  <a
                    href="tel:+917902291301"
                    className="text-xs font-bold uppercase tracking-[0.16em] text-[#b19d7f] hover:text-[#06192e] transition-colors"
                  >
                    Call: 7902291301
                  </a>
                </div>
              </div>

              {/* Right Column: High-Res Authentic Image in Curved Organic Frame */}
              <div className="lg:col-span-5 relative">
                <div className="relative overflow-hidden rounded-[7px] shadow-2xl border border-white group">
                  <img
                    key={activeTopic.id}
                    src={activeTopic.image}
                    alt={activeTopic.imageAlt}
                    loading="lazy"
                    className="w-full h-80 sm:h-[440px] aspect-[4/3] sm:aspect-[16/11] object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-4 left-4 bg-[#06192e]/95 text-[#c9b79b] border border-[#b19d7f]/40 px-3.5 py-1.5 rounded-[7px] text-[10px] font-mono uppercase tracking-widest shadow-lg">
                    {activeTopic.tag}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-3.5 rounded-[7px] shadow-lg border border-white/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#b19d7f] font-bold block">
                      Poovar Backwater Guide
                    </span>
                    <span className="text-xs font-marcellus text-[#06192e] font-semibold block truncate">
                      {activeTopic.title}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        )}

        {/* =====================================================================
            VIEW MODE 2: EDITORIAL MAGAZINE LIST (No rigid boxed cards!)
            Flowing seamless magazine layout with subtle hairline dividers
            ===================================================================== */}
        {viewMode === 'editorial' && (
          <div className="space-y-12 animate-fadeIn divide-y divide-gray-200">
            {guideTopics.map((topic) => (
              <div key={topic.id} className="pt-10 first:pt-0 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#b19d7f] font-bold block">
                    {topic.id} • {topic.category}
                  </span>
                  <h3 className="font-marcellus text-2xl sm:text-3xl uppercase tracking-[0.12em] text-[#06192e]">
                    {topic.title}
                  </h3>
                  <div className="space-y-2">
                    {topic.content.map((p, i) => (
                      <p key={i} className="text-sm text-gray-700 font-light leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {topic.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-gray-600 font-light">
                        <span className="text-[#b19d7f] font-bold">◆</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-[7px] overflow-hidden shadow-lg border border-gray-200">
                    <img
                      src={topic.image}
                      alt={topic.imageAlt}
                      loading="lazy"
                      className="w-full h-48 sm:h-56 object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
