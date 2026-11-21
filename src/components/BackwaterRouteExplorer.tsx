import React, { useState } from 'react';

interface Landmark {
  id: number;
  step: string;
  name: string;
  malayalam: string;
  timing: string;
  image: string;
  summary: string;
  highlights: string[];
  spotlight: string;
  captainTip: string;
}

const LANDMARKS: Landmark[] = [
  {
    id: 1,
    step: 'Stop 01',
    name: 'Attupuram Boarding Jetty',
    malayalam: 'അറ്റുപുറം ബോട്ടിംഗ് ജെട്ടി',
    timing: '00 - 10 Min',
    image: '/images/services/motor_boat_cruise.webp',
    summary: 'Your journey begins at our safe, private boarding jetty at Attupuram–Chalakkara Road, Ucchakkada. Easy vehicle parking, clean boarding pontoons, and personalized life jacket fitting before stepping aboard.',
    highlights: ['Free secure vehicle parking', 'Personalized life jacket fitting', 'Pre-departure safety briefing', 'Direct boarding with no queues'],
    spotlight: 'Boarding Point',
    captainTip: 'Keep your camera ready right from departure as the wide Neyyar backwater opens up immediately.'
  },
  {
    id: 2,
    step: 'Stop 02',
    name: 'Dense Mangrove Forest Canopy',
    malayalam: 'കണ്ടൽക്കാടുകൾ',
    timing: '20 - 45 Min',
    image: '/images/poovar_mangrove_deep.webp',
    summary: 'Glide quietly beneath dense archways of ancient mangroves forming natural green tunnels over the water. Sunlight filters softly through the canopy onto tranquil, emerald-green channels.',
    highlights: ['Natural arching green tunnels', 'Kingfishers & Brahmini kites', 'Ancient mangrove root systems', 'Cool shaded microclimate'],
    spotlight: 'Eco Wonder',
    captainTip: 'Our captains cut engine speeds to near-silent idle so you can hear bird calls and capture mirror-smooth water reflections.'
  },
  {
    id: 3,
    step: 'Stop 03',
    name: 'Mother Mary Shrine & Riverside Village',
    malayalam: 'മാതാവിന്റെ ഗ്രോട്ടോ & മത്സ്യഗ്രാമം',
    timing: '45 - 60 Min',
    image: '/images/poovar_backwater_cruise.webp',
    summary: 'A historical riverside grotto nestled along the riverbank where local fishermen pray for safe voyages. Experience the authentic rhythm of traditional Kerala coastal river life.',
    highlights: ['Historic riverside shrine', 'Traditional fishing canoes', 'Coir retting & coconut palms', 'Warm waves from river folk'],
    spotlight: 'Heritage Landmark',
    captainTip: 'Ask your captain about the legend of King Marthanda Varma who found sanctuary here in Poovar.'
  },
  {
    id: 4,
    step: 'Stop 04',
    name: 'Elephant Rock & Neyyar Confluence',
    malayalam: 'ആനപ്പാറ',
    timing: '60 - 75 Min',
    image: '/images/poovar_panorama_backwaters.webp',
    summary: 'A striking natural geological formation in the water resembling a bathing elephant with its trunk submersed in the Neyyar river. Rich in roosting waterbirds.',
    highlights: ['Elephant-shaped natural rock', 'Roosting egrets and cormorants', 'Wide open river panoramas', 'Breeze from the ocean'],
    spotlight: 'Natural Oddity',
    captainTip: 'The best photo angle is from the western side when the rock silhouette aligns with the coconut skyline.'
  },
  {
    id: 5,
    step: 'Stop 05',
    name: 'Golden Sand Beach & Estuary (Pozhi)',
    malayalam: 'സ്വർണ്ണ മണൽത്തീരം & പൊഴിമുഖം',
    timing: '75 - 100 Min',
    image: '/images/poovar_beach_estuary.webp',
    summary: 'The world-famous Pozhi estuary where the calm freshwater Neyyar river meets the dramatic waves of the Arabian Sea, separated by a pristine spit of golden sand.',
    highlights: ['River on one side, sea on other', 'Golden sandspit walk', 'Dramatic ocean wave break', 'Unobstructed sunset horizon'],
    spotlight: 'Signature Attraction',
    captainTip: 'Step out onto the sandspit for 15-20 minutes. It is one of the few places in India where you stand between a freshwater river and the open sea.'
  },
  {
    id: 6,
    step: 'Stop 06',
    name: 'Floating Seafood Kitchens',
    malayalam: 'ഫ്ളോട്ടിംഗ് റസ്റ്റോറന്റ്',
    timing: '100 - 120 Min',
    image: '/images/poovar_floating_dining.webp',
    summary: 'Traditional wooden floating restaurants moored gently on the estuary. Enjoy freshly prepared Kerala Karimeen Pollichathu, king prawns, or chilled tender coconut water right on the water.',
    highlights: ['Fresh authentic Kerala seafood', 'Tender coconut water on water', 'Panoramic water-level views', 'No obligation (voluntary stop)'],
    spotlight: 'Backwater Dining',
    captainTip: 'Tell your boat driver at boarding if you would like a lunch or snack stop so they reserve a scenic deck table.'
  }
];

export default function BackwaterRouteExplorer() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeLandmark = LANDMARKS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : LANDMARKS.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < LANDMARKS.length - 1 ? prev + 1 : 0));
  };

  const handleBookRoute = () => {
    if (typeof (window as any).openBookingModal === 'function') {
      (window as any).openBookingModal(`Full Backwater Route Tour - Stopping at ${activeLandmark.name}`);
    } else {
      window.open('https://wa.me/917902291301?text=Hello%20Poovar%20Boat%20Tour,%20I%20would%20like%20to%20book%20the%20complete%206-Stop%20Backwater%20Route.', '_blank');
    }
  };

  return (
    <div className="bg-white border border-[#ede8e1] shadow-xs overflow-hidden">
      {/* Top Section Header */}
      <div className="p-5 sm:p-7 md:p-8 lg:p-10 border-b border-[#ede8e1] flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="text-[#b19d7f] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] block mb-1">
            ➤ VISUAL SIGHTSEEING GUIDE
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-marcellus text-[#06192e] tracking-tight uppercase">
            The 6 Signature Stops of Poovar
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-2 font-light max-w-2xl leading-relaxed">
            Every 2-hour Poovar Boat Tour follows a complete curated circuit through virgin mangroves, cultural shrines, and the estuary. Click through each stop below.
          </p>
        </div>
        <div className="flex items-center gap-2 self-start md:self-auto">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous stop"
            className="w-9 h-9 sm:w-10 sm:h-10 border border-[#ede8e1] hover:border-[#06192e] hover:bg-[#06192e] hover:text-white flex items-center justify-center transition cursor-pointer text-gray-700"
          >
            <i className="ph-bold ph-caret-left text-sm sm:text-base"></i>
          </button>
          <span className="text-xs font-semibold text-gray-500 px-2 font-mono">
            0{activeIdx + 1} / 0{LANDMARKS.length}
          </span>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next stop"
            className="w-9 h-9 sm:w-10 sm:h-10 border border-[#ede8e1] hover:border-[#06192e] hover:bg-[#06192e] hover:text-white flex items-center justify-center transition cursor-pointer text-gray-700"
          >
            <i className="ph-bold ph-caret-right text-sm sm:text-base"></i>
          </button>
        </div>
      </div>

      {/* Interactive Step Navigation Bar (Touch-friendly & horizontal swipe) */}
      <div className="bg-[#f5f3ef] px-3 sm:px-6 md:px-8 py-2.5 sm:py-3 border-b border-[#ede8e1] overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-2 min-w-max">
          {LANDMARKS.map((lm, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={lm.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#06192e] text-white shadow-xs'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-[#ede8e1]'
                }`}
              >
                <span className={`w-5 h-5 text-[10px] flex items-center justify-center font-bold font-mono ${
                  isActive ? 'bg-[#b19d7f] text-white' : 'bg-[#f5f3ef] text-gray-600'
                }`}>
                  0{idx + 1}
                </span>
                <span className="whitespace-nowrap">{lm.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Stop Showcase Content */}
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
        {/* Left Column: Image with Floating Tags */}
        <div className="lg:col-span-6 relative overflow-hidden aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] bg-[#06192e] group border border-[#ede8e1]">
          <img
            src={activeLandmark.image}
            alt={activeLandmark.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
          
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-2">
            <span className="px-2.5 sm:px-3 py-1 bg-black/60 backdrop-blur-md text-white font-mono text-[10px] sm:text-xs font-semibold border border-white/20">
              {activeLandmark.step}
            </span>
            <span className="px-2.5 sm:px-3 py-1 bg-[#b19d7f] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              {activeLandmark.spotlight}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between text-white text-[11px] sm:text-xs">
            <span className="font-mono bg-black/50 backdrop-blur-md px-2.5 sm:px-3 py-1 border border-white/20">
              ⏱️ Timing: {activeLandmark.timing}
            </span>
            <span className="text-[10px] sm:text-[11px] text-white/80 hidden sm:inline">
              Included in 2-Hr Tour
            </span>
          </div>
        </div>

        {/* Right Column: Detailed Narrative & Highlights */}
        <div className="lg:col-span-6 space-y-4 sm:space-y-5">
          <div className="space-y-1">
            <span className="text-[11px] sm:text-xs font-mono text-[#b19d7f] font-semibold block">
              {activeLandmark.malayalam}
            </span>
            <h4 className="text-xl sm:text-2xl md:text-3xl font-marcellus text-[#06192e] uppercase">
              {activeLandmark.name}
            </h4>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
            {activeLandmark.summary}
          </p>

          <div className="space-y-2 pt-2 border-t border-[#ede8e1]">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#06192e] block">
              Key Route Highlights:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
              {activeLandmark.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2">
                  <i className="ph-bold ph-check text-[#b19d7f] flex-shrink-0"></i>
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Captain's Tip */}
          <div className="p-3.5 sm:p-4 bg-[#f5f3ef] border border-[#ede8e1] text-xs text-[#06192e] flex items-start gap-2.5 sm:gap-3">
            <i className="ph-bold ph-compass text-[#b19d7f] text-lg flex-shrink-0 mt-0.5"></i>
            <div>
              <strong className="block text-[#06192e] font-semibold mb-0.5 uppercase tracking-wide text-[11px]">Captain's Local Tip:</strong>
              <span className="text-gray-700 font-light leading-relaxed">{activeLandmark.captainTip}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={handleBookRoute}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#06192e] hover:bg-[#b19d7f] text-white font-bold text-xs uppercase tracking-[0.18em] transition cursor-pointer shadow-sm text-center"
            >
              Book Complete 6-Stop Circuit
            </button>
            <span className="text-xs font-mono text-gray-600 text-center sm:text-left">
              Rs 1,200 per boat (up to 7 pax)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
