import React, { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Arun & Priya Nair',
    role: 'Honeymoon Couple • Bangalore',
    initials: 'AN',
    quote: 'The 2-hour ride through the mangrove canals was the highlight of our Kerala trip. Completely private, calm water, and the Rs 1,200 flat rate for the entire boat made it honest and straightforward with zero bargaining.',
    rating: 5,
    tag: 'Verified Backwater Traveler',
    cruiseType: 'Honeymoon Couple Cruise'
  },
  {
    id: 2,
    name: 'Deepak Joshi & Family',
    role: 'Family of 6 • Mumbai',
    initials: 'DJ',
    quote: 'Six of us took one boat for Rs 1,200, which worked out to exactly Rs 200 per person. Seeing the Neyyar River meet the sea at the Golden Sand Beach was incredible. Safety life jackets were provided for both our kids.',
    rating: 5,
    tag: 'Family Holiday Booking',
    cruiseType: 'Standard 2-Hour Motor Boat'
  },
  {
    id: 3,
    name: 'Sarah & Michael Clarke',
    role: 'Travelers • London, UK',
    initials: 'SC',
    quote: 'Booked directly via WhatsApp without any hassle or middlemen. The captain was patient, drifted slowly under the dense mangrove tunnels, and gave us ample time for bird photography. Worth every rupee.',
    rating: 5,
    tag: 'International Visitors',
    cruiseType: 'Bird Watching & Sunset Cruise'
  }
];

export default function NeeraTestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(1); // Default to middle family testimonial
  const activeReview = testimonials[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const progressPercent = ((currentIndex + 1) / testimonials.length) * 100;

  return (
    <section id="testimonials" className="relative bg-neera-sand-waves bg-[#f5f3ef] py-20 lg:py-28 overflow-hidden text-[#0d0d0d] border-b border-[#ede8e1]">
      {/* Ambient decorative blurs */}
      

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto neera-reveal">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b19d7f] block">
            TESTIMONIALS
          </span>
          <h2 className="font-marcellus text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.14em] text-[#06192e]">
            CLIENTS FEEDBACK
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
            Real experiences from families, couples, and travelers who enjoyed backwater boat rides with Poovar Boat Tour.
          </p>
        </div>

        {/* =====================================================================
            SMOOTH CONTROLLER BAR: Slide Stepper & Prev/Next
            ===================================================================== */}
        <div className="flex items-center justify-between max-w-md mx-auto p-2.5 bg-white/95 rounded-[7px] border border-gray-200/80 shadow-sm text-xs font-mono uppercase tracking-wider">
          <button
            type="button"
            onClick={handlePrev}
            className="w-9 h-9 rounded-[7px] border border-gray-300 hover:border-[#b19d7f] hover:bg-[#b19d7f] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Previous review"
          >
            <span>&larr;</span>
          </button>

          {/* Dots & Counter */}
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#b19d7f]">0{currentIndex + 1}</span>
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-[7px] transition-all duration-300 cursor-pointer ${
                    currentIndex === i ? 'w-6 bg-[#06192e]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Jump to review ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-gray-400">0{testimonials.length}</span>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-9 h-9 rounded-[7px] border border-gray-300 hover:border-[#b19d7f] hover:bg-[#b19d7f] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            aria-label="Next review"
          >
            <span>&rarr;</span>
          </button>
        </div>

        {/* =====================================================================
            ORGANIC TESTIMONIAL SHOWCASE (Soft curves, glowing badge, fluid layout)
            ===================================================================== */}
        <div className="max-w-3xl mx-auto pt-6">
          <div className="relative bg-white/95 p-8 sm:p-12 md:p-14 rounded-[7px] shadow-2xl border border-white text-center space-y-6">
            
            {/* Floating Monogram Avatar with 7px radius */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-[7px] border-4 border-white shadow-xl flex items-center justify-center bg-[#06192e] text-[#c9b79b]">
              <span className="font-marcellus text-2xl font-bold tracking-wider select-none">
                {activeReview.initials}
              </span>
            </div>

            {/* Stars */}
            <div className="pt-4 flex items-center justify-center gap-1 text-[#b19d7f] text-base">
              {[...Array(activeReview.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            {/* Verbatim Quote */}
            <div className="space-y-4">
              <p className="font-marcellus text-lg sm:text-2xl text-[#06192e] font-normal leading-relaxed italic">
                "{activeReview.quote}"
              </p>
            </div>

            {/* Wave Divider */}
            <div className="py-1 flex justify-center">
              <svg width="100" height="12" viewBox="0 0 100 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6 Q12.5 0 25 6 T50 6 T75 6 T100 6" stroke="#b19d7f" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
            </div>

            {/* Author Details & Verified Tag */}
            <div className="space-y-1">
              <h3 className="font-marcellus text-lg sm:text-xl text-[#06192e] uppercase tracking-wider font-bold">
                {activeReview.name}
              </h3>
              <span className="text-xs font-mono uppercase tracking-[0.18em] text-[#b19d7f] block">
                {activeReview.role}
              </span>
              <div className="pt-2 flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-400">
                <span>🛡 {activeReview.tag}</span>
                <span>•</span>
                <span>{activeReview.cruiseType}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
