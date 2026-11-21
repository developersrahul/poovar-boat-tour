import React, { useState } from 'react';

interface Review {
  id: number;
  name: string;
  origin: string;
  date: string;
  rating: number;
  cruise: string;
  category: 'family' | 'couple' | 'nature' | 'group';
  comment: string;
  badge: string;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: 'Ananya & Rohit Sharma',
    origin: 'Bengaluru, Karnataka',
    date: 'October 2026',
    rating: 5,
    cruise: 'Sunset Cruise',
    category: 'couple',
    badge: 'Verified Couple',
    comment: 'The 2-hour sunset cruise was the highlight of our Kerala trip! We reached the estuary right at golden hour. Standing on the golden sandspit where the river touches the sea was unforgettable. Our boat driver was patient and took great photos for us.'
  },
  {
    id: 2,
    name: 'Suresh Menon & Family',
    origin: 'Chennai, Tamil Nadu',
    date: 'September 2026',
    rating: 5,
    cruise: 'Motor Boat Cruise',
    category: 'family',
    badge: 'Family of 6',
    comment: 'We booked the full boat for 6 family members including my elderly mother. Boarding at Attupuram was very smooth, comfortable life jackets, and no rush at all. Rs 1,200 for 2 full hours was super reasonable compared to what hotel touts quoted us.'
  },
  {
    id: 3,
    name: 'David & Claire Miller',
    origin: 'London, United Kingdom',
    date: 'August 2026',
    rating: 5,
    cruise: 'Bird Watching Cruise',
    category: 'nature',
    badge: 'Wildlife Enthusiast',
    comment: 'We booked the early 6:30 AM cruise for photography. The captain was exceptionally knowledgeable, gently drifting under the mangrove canopy. Spotted three species of kingfishers, Brahminy kites, and cormorants up close. Highly recommended!'
  },
  {
    id: 4,
    name: 'Vikram Joshi & Friends',
    origin: 'Pune, Maharashtra',
    date: 'October 2026',
    rating: 5,
    cruise: 'Motor Boat Cruise + Floating Restaurant',
    category: 'group',
    badge: 'Friend Group',
    comment: 'Booked directly through WhatsApp in 2 minutes. The floating restaurant halt for fresh karimeen fish and fresh tender coconut in the middle of the backwater was amazing. Transparent price, exactly Rs 1,200 as advertised.'
  },
  {
    id: 5,
    name: 'Priyanka & Arjun Nair',
    origin: 'Kochi, Kerala',
    date: 'September 2026',
    rating: 5,
    cruise: 'Honeymoon Cruise',
    category: 'couple',
    badge: 'Honeymooners',
    comment: 'Completely private experience! The quiet mangrove canal archways were magical and surreal. Having the entire boat to ourselves made it peaceful and special. The captain was polite and respected our privacy.'
  },
  {
    id: 6,
    name: 'Dr. Rajesh Patel',
    origin: 'Ahmedabad, Gujarat',
    date: 'July 2026',
    rating: 5,
    cruise: 'Motor Boat Cruise',
    category: 'family',
    badge: 'Family Trip',
    comment: 'Light rain started midway through the tour, but the covered boat roof kept us completely dry and the atmosphere became even more scenic with the cool mist over the river. Excellent safety standards.'
  }
];

export default function GuestReviews() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredReviews = activeCategory === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => r.category === activeCategory);

  return (
    <section className="space-y-6 sm:space-y-8">
      {/* Top Heading & Rating Overview */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 border-b border-[#ede8e1] pb-6">
        <div>
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#b19d7f] block mb-1">
            ➤ GUEST EXPERIENCES
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-marcellus text-[#06192e] tracking-tight uppercase">
            Guest Reviews &amp; Testimonials
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 font-light max-w-xl leading-relaxed">
            Read authentic feedback from families, couples and travelers who chartered our private backwater boats in Poovar.
          </p>
        </div>

        {/* Rating Badge */}
        <div className="flex items-center gap-3 bg-[#f5f3ef] border border-[#ede8e1] p-3 sm:p-3.5 self-start md:self-auto shadow-xs">
          <div className="text-3xl font-bold font-marcellus text-[#06192e]">
            4.9
          </div>
          <div>
            <div className="flex items-center text-[#b19d7f] text-xs">
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
              <i className="ph-fill ph-star"></i>
            </div>
            <span className="text-[11px] text-gray-600 block mt-0.5">
              Based on 340+ verified backwater guest rides
            </span>
          </div>
        </div>
      </div>

      {/* Filter Tabs (Horizontal scroll on mobile) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {[
          { id: 'all', label: 'All Reviews' },
          { id: 'family', label: 'Family Rides' },
          { id: 'couple', label: 'Couples & Sunset' },
          { id: 'nature', label: 'Nature & Birds' },
          { id: 'group', label: 'Group Trips' }
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveCategory(tab.id)}
            className={`px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
              activeCategory === tab.id
                ? 'bg-[#06192e] text-white shadow-xs'
                : 'bg-white hover:bg-gray-100 text-gray-700 border border-[#ede8e1]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {filteredReviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white border border-[#ede8e1] p-5 sm:p-6 shadow-xs hover:border-[#b19d7f] transition flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center text-[#b19d7f] text-xs">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <i key={i} className="ph-fill ph-star"></i>
                  ))}
                </div>
                <span className="text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider text-[#06192e] bg-[#f5f3ef] px-2.5 py-0.5 border border-[#ede8e1]">
                  {rev.badge}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-light">
                "{rev.comment}"
              </p>
            </div>

            <div className="pt-4 border-t border-[#ede8e1] flex items-center justify-between text-xs">
              <div>
                <span className="block font-bold text-[#06192e]">{rev.name}</span>
                <span className="block text-[11px] text-gray-500">{rev.origin}</span>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">
                {rev.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
