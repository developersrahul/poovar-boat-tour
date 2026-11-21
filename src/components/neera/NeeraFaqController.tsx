import React, { useState } from 'react';

// Exact 10 Questions and Answers from Pages 4-5 of "Poovar boat .pdf"
const homeFaqs = [
  {
    id: 1,
    num: '01',
    category: 'destination',
    q: '1. What is Poovar famous for?',
    a: 'Poovar is a village in Thiruvananthapuram, Kerala, famous for backwater boating where the Neyyar River meets the Arabian Sea. It also has a golden sand beach and mangrove-lined canals.'
  },
  {
    id: 2,
    num: '02',
    category: 'tariffs',
    q: '2. Is Poovar boating worth it?',
    a: 'Yes. A Poovar boat ride takes you through calm backwaters, mangroves and the river-meets-sea estuary. Poovar Boat Tour offers rides from 1200 per boat.'
  },
  {
    id: 3,
    num: '03',
    category: 'destination',
    q: '3. How far is Poovar from Trivandrum?',
    a: 'Poovar is about 30 km from Trivandrum airport and 27 km from Trivandrum Central railway station. Travel time by road is about 1 hour'
  },
  {
    id: 4,
    num: '04',
    category: 'tariffs',
    q: '4. How long does a Poovar boat ride take?',
    a: 'Poovar Boat Tour offers 1-hour and 2-hour backwater rides.'
  },
  {
    id: 5,
    num: '05',
    category: 'tariffs',
    q: '5. How do I book a Poovar boat ride?',
    a: 'You can book a Poovar boat ride with Poovar Boat Tour through the online booking form on this website or by phone at 7902291301'
  },
  {
    id: 6,
    num: '06',
    category: 'destination',
    q: '6. What boat rides does Poovar Boat Tour offer?',
    a: 'Poovar Boat Tour offers four cruises: a motor boat backwater cruise, a sunset cruise, a honeymoon cruise and a bird watching cruise. See the Services page for details.'
  },
  {
    id: 7,
    num: '07',
    category: 'tariffs',
    q: '7. How many people can sit in one boat?',
    a: 'One boat at Poovar Boat Tour carries up to 7 people on the 2-hour ride.'
  },
  {
    id: 8,
    num: '08',
    category: 'tariffs',
    q: '8. Is the Poovar boating discount still available?',
    a: 'Poovar Boat Tour has advertised a 2-hour ride for one boat at Rs 1,200. Limited offer'
  },
  {
    id: 9,
    num: '09',
    category: 'destination',
    q: '9. What is the best time to visit Poovar?',
    a: 'Poovar can be visited all year, and the cooler months from oct to dec are usually most comfortable. Mornings and evenings are the pleasant times to be on the water.'
  },
  {
    id: 10,
    num: '10',
    category: 'destination',
    q: '10. Can I visit Poovar on the same trip as Kovalam or Kanyakumari?',
    a: 'Yes. Poovar is close to Kovalam and about 71 km from Kanyakumari, so a boat ride fits easily into a day trip from either place.'
  }
];

export default function NeeraFaqController() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'tariffs' | 'destination'>('all');
  const [openIds, setOpenIds] = useState<number[]>([1]); // First question open by default
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleExpandAll = () => {
    setOpenIds(homeFaqs.map((f) => f.id));
  };

  const handleCollapseAll = () => {
    setOpenIds([]);
  };

  const filteredFaqs = homeFaqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq-block" className="py-24 bg-[#06192e] text-white border-t border-[#b19d7f]/20 relative overflow-hidden">
      {/* Ambient background glows */}
      
      

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b19d7f] block">
            QUESTIONS &amp; ANSWERS
          </span>
          <h2 className="font-marcellus text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.12em] text-white">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed">
            Everything you need to know about our Kerala backwater boat rides, bookings, and visiting Poovar.
          </p>
        </div>

        {/* =====================================================================
            SMOOTH CONTROLLER BAR: Filter Pills, Search Bar & Expand/Collapse
            ===================================================================== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-white/5  rounded-[7px] border border-white/10 shadow-lg">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar w-full md:w-auto">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-[7px] text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#b19d7f] text-white font-bold shadow-md'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              All (10)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('tariffs')}
              className={`px-4 py-2 rounded-[7px] text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === 'tariffs'
                  ? 'bg-[#b19d7f] text-white font-bold shadow-md'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Tariffs &amp; Booking (5)
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('destination')}
              className={`px-4 py-2 rounded-[7px] text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                selectedCategory === 'destination'
                  ? 'bg-[#b19d7f] text-white font-bold shadow-md'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              Destination &amp; Timing (5)
            </button>
          </div>

          {/* Quick Search & Expand/Collapse Controller */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
            <div className="relative flex-1 md:w-56">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3.5 py-1.5 pl-8 bg-black/40 border border-white/15 rounded-[7px] text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#b19d7f] transition-colors"
              />
              <span className="absolute left-2.5 top-2 text-white/40 text-xs">🔍</span>
            </div>

            <button
              type="button"
              onClick={openIds.length === homeFaqs.length ? handleCollapseAll : handleExpandAll}
              className="px-3.5 py-1.5 rounded-[7px] border border-white/20 hover:border-[#b19d7f] text-[11px] font-mono uppercase tracking-wider text-white/80 hover:text-white transition-all cursor-pointer whitespace-nowrap"
            >
              {openIds.length === homeFaqs.length ? 'Collapse All' : 'Expand All'}
            </button>
          </div>

        </div>

        {/* =====================================================================
            SMOOTH ACCORDION (No enclosed boxes! Sleek hairline dividers)
            ===================================================================== */}
        <div className="divide-y divide-white/15 border-y border-white/15">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className={`transition-colors duration-300 ${
                  isOpen ? 'bg-white/[0.04]' : 'hover:bg-white/[0.02]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full py-6 px-4 sm:px-6 flex items-center justify-between gap-6 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-xs font-bold text-[#b19d7f] px-2.5 py-1 bg-white/5 rounded-[7px] border border-[#b19d7f]/30">
                      {faq.num}
                    </span>
                    <h3 className="font-marcellus text-base sm:text-lg text-white group-hover:text-[#c9b79b] tracking-wide transition-colors">
                      {faq.q}
                    </h3>
                  </div>

                  {/* Smooth rotating controller button */}
                  <div
                    className={`w-8 h-8 rounded-[7px] border border-white/20 flex items-center justify-center text-sm text-[#b19d7f] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-45 bg-[#b19d7f] text-white border-transparent' : 'group-hover:border-[#b19d7f]'
                    }`}
                  >
                    +
                  </div>
                </button>

                {/* Smooth Animated Accordion Body */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out px-4 sm:px-6 ${
                    isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                  }`}
                >
                  <div className="pl-12 sm:pl-16 pr-4 sm:pr-8">
                    <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA banner */}
        <div className="p-8 rounded-[7px] bg-gradient-to-r from-black/60 via-[#06192e] to-black/60 border border-[#b19d7f]/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div>
            <h4 className="font-marcellus text-lg uppercase tracking-wider text-white">Have more questions or ready to book?</h4>
            <p className="text-xs text-white/70 mt-1">Direct booking with local boat team • Call 7902291301 or book online</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/contact/"
              className="px-7 py-3.5 bg-[#b19d7f] hover:bg-[#9e8a6d] text-white font-bold uppercase tracking-[0.18em] text-xs rounded-[7px] transition-all duration-300 shadow-xl"
            >
              Book Now
            </a>
            <a
              href="tel:+917902291301"
              className="px-7 py-3.5 border border-[#b19d7f]/50 hover:bg-white/10 text-white font-bold uppercase tracking-[0.18em] text-xs rounded-[7px] transition-all duration-300"
            >
              Call Direct: 7902291301
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
