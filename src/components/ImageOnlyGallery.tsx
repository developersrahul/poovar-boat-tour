import React, { useState, useMemo } from 'react';

export type CategoryKey =
  | 'all'
  | 'neyyar-river'
  | 'mangroves'
  | 'coconut-island'
  | 'birds-watching'
  | 'forest-island'
  | 'floating'
  | 'elephant-rock'
  | 'mother-mary'
  | 'estuary-point'
  | 'horse-ride'
  | 'sunset';

interface GalleryItem {
  id: number;
  src: string;
  categories: CategoryKey[];
  aspect: string;
  alt: string;
}

const galleryImages: GalleryItem[] = [
  // 1. NEYYAR RIVER & MANGROVES
  {
    id: 1,
    src: '/images/gallery/gallery_01_safari_boat_cruise.webp',
    categories: ['neyyar-river', 'mangroves'],
    aspect: 'aspect-[16/9]',
    alt: 'Poovar Safari Boat Cruise Navigating Through Neyyar River & Mangrove Canal'
  },
  {
    id: 2,
    src: '/images/gallery/gallery_02_elephant_rock_landmark.webp',
    categories: ['elephant-rock'],
    aspect: 'aspect-[3/2]',
    alt: 'Elephant Rock Natural Coastal Landmark & Sea Formation - Poovar Backwaters'
  },
  {
    id: 3,
    src: '/images/gallery/gallery_03_tourists_covered_boat.webp',
    categories: ['neyyar-river', 'mangroves'],
    aspect: 'aspect-[3/4]',
    alt: 'Guests Seated Inside Covered Safari Motorboat Exploring Mangroves'
  },
  {
    id: 4,
    src: '/images/gallery/gallery_04_poovar_estuary_confluence.webp',
    categories: ['estuary-point'],
    aspect: 'aspect-[3/2]',
    alt: 'Poovar Estuary Point Where Neyyar River Confluences with Arabian Sea'
  },
  {
    id: 5,
    src: '/images/gallery/gallery_05_dense_mangrove_tunnel.webp',
    categories: ['mangroves'],
    aspect: 'aspect-[9/16]',
    alt: 'Front View from Safari Boat Entering Dense Mangrove Tree Tunnel'
  },
  {
    id: 6,
    src: '/images/gallery/gallery_06_aerial_drone_neyyar_river.webp',
    categories: ['neyyar-river', 'coconut-island'],
    aspect: 'aspect-[9/16]',
    alt: 'Aerial Drone View of Neyyar River Winding Through Coconut Palm Forest'
  },
  {
    id: 7,
    src: '/images/gallery/gallery_07_coconut_forest_island.webp',
    categories: ['coconut-island', 'forest-island'],
    aspect: 'aspect-[3/2]',
    alt: 'Coconut & Forest Island Surrounded by Neyyar River Backwaters with Tour Boats'
  },
  {
    id: 8,
    src: '/images/gallery/gallery_08_aerial_golden_sand_beach.webp',
    categories: ['estuary-point'],
    aspect: 'aspect-[16/9]',
    alt: 'Aerial Panorama of Poovar Golden Sand Beach Sandspit and Estuary'
  },
  {
    id: 9,
    src: '/images/gallery/gallery_09_striped_canopy_boat_mangrove.webp',
    categories: ['mangroves'],
    aspect: 'aspect-[3/2]',
    alt: 'Safari Cruiser with Striped Awning Floating in Calm Mangrove Canal'
  },
  {
    id: 10,
    src: '/images/gallery/gallery_10_motorboat_mangrove_canopy.webp',
    categories: ['mangroves', 'neyyar-river'],
    aspect: 'aspect-[4/3]',
    alt: 'Motor Safari Boat Navigating Under Arching Mangrove Forest Canopy'
  },
  {
    id: 11,
    src: '/images/gallery/gallery_11_floating_resort_cottages.webp',
    categories: ['floating'],
    aspect: 'aspect-[4/3]',
    alt: 'Traditional Red-Roofed Floating Cottages on Poovar Backwaters'
  },
  {
    id: 12,
    src: '/images/gallery/gallery_12_poovar_motor_safari_boat.webp',
    categories: ['neyyar-river'],
    aspect: 'aspect-[16/9]',
    alt: 'Poovar Motor Safari Boat with Happy Guests Gliding on Neyyar River'
  },
  {
    id: 13,
    src: '/images/gallery/gallery_13_mother_mary_statue_shrine.webp',
    categories: ['mother-mary'],
    aspect: 'aspect-[3/2]',
    alt: 'Mother Mary Statue & Cross Rock Shrine on Poovar Island'
  },
  {
    id: 14,
    src: '/images/gallery/gallery_14_estuary_beach_arabian_sea.webp',
    categories: ['estuary-point'],
    aspect: 'aspect-[3/2]',
    alt: 'Golden Sand Beach at Estuary Point with Rolling Arabian Sea Waves'
  },
  {
    id: 15,
    src: '/images/gallery/gallery_15_safari_cruiser_mangroves.webp',
    categories: ['mangroves'],
    aspect: 'aspect-[3/2]',
    alt: 'Safari Cruiser Floating Gracefully Through Lush Mangrove Channels'
  },
  {
    id: 16,
    src: '/images/gallery/gallery_16_speed_cruiser_emerald_waters.webp',
    categories: ['neyyar-river', 'mangroves'],
    aspect: 'aspect-[3/2]',
    alt: 'Safari Tour Boat Floating in Pristine Emerald Backwaters'
  },
  {
    id: 17,
    src: '/images/gallery/gallery_17_coconut_island_towering_palms.webp',
    categories: ['coconut-island', 'forest-island'],
    aspect: 'aspect-[16/9]',
    alt: 'Coconut Palm Island with Soaring Palms in Poovar Backwaters'
  }
];

export default function ImageOnlyGallery() {
  const [selectedFilter, setSelectedFilter] = useState<CategoryKey>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filteredImages = useMemo(() => {
    if (selectedFilter === 'all') return galleryImages;
    return galleryImages.filter((img) => img.categories.includes(selectedFilter));
  }, [selectedFilter]);

  const counts = useMemo(() => {
    const res: Record<string, number> = {
      'all': galleryImages.length,
      'neyyar-river': 0,
      'mangroves': 0,
      'coconut-island': 0,
      'birds-watching': 0,
      'forest-island': 0,
      'floating': 0,
      'elephant-rock': 0,
      'mother-mary': 0,
      'estuary-point': 0,
      'horse-ride': 0,
      'sunset': 0,
    };
    galleryImages.forEach((img) => {
      img.categories.forEach((cat) => {
        if (cat in res) res[cat]++;
      });
    });
    return res;
  }, []);

  const filterTabs = [
    { key: 'all' as CategoryKey, label: 'All Highlights', count: counts['all'] },
    { key: 'neyyar-river' as CategoryKey, label: 'Neyyar River', count: counts['neyyar-river'] },
    { key: 'mangroves' as CategoryKey, label: 'Mangroves Forest & Island', count: counts['mangroves'] },
    { key: 'coconut-island' as CategoryKey, label: 'Coconut Island', count: counts['coconut-island'] },
    { key: 'forest-island' as CategoryKey, label: 'Forest Island', count: counts['forest-island'] },
    { key: 'floating' as CategoryKey, label: 'Floating Cottages & Restaurant', count: counts['floating'] },
    { key: 'elephant-rock' as CategoryKey, label: 'Elephant Rock', count: counts['elephant-rock'] },
    { key: 'mother-mary' as CategoryKey, label: 'Mother Mary Statue', count: counts['mother-mary'] },
    { key: 'estuary-point' as CategoryKey, label: 'Estuary Point', count: counts['estuary-point'] },
    { key: 'birds-watching' as CategoryKey, label: 'Birds Watching Area', count: counts['birds-watching'] },
    { key: 'horse-ride' as CategoryKey, label: 'Horse Ride', count: counts['horse-ride'] },
    { key: 'sunset' as CategoryKey, label: 'Sunset', count: counts['sunset'] },
  ].filter((tab) => tab.count > 0);

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Category Navigation Pills (Official Tour Sights Menu) */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 max-w-6xl mx-auto px-2">
        {filterTabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setSelectedFilter(tab.key)}
            className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-[7px] text-xs font-mono uppercase tracking-widest transition-all duration-300 cursor-pointer ${
              selectedFilter === tab.key
                ? 'bg-[#06192e] text-[#b19d7f] font-bold shadow-md ring-1 ring-[#b19d7f]/40'
                : 'bg-white text-gray-600 hover:text-[#06192e] hover:bg-[#faf9f5] border border-[#ede8e1]'
            }`}
          >
            <span>{tab.label}</span>
            <span className="ml-1.5 opacity-60 text-[10px]">({tab.count})</span>
          </button>
        ))}
      </div>

      {/* Editorial Big Image Card Masonry View (2 Generous Columns) */}
      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            onClick={() => setSelectedImage(img)}
            className="break-inside-avoid group relative rounded-[7px] overflow-hidden bg-[#06192e] cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500 border border-[#ede8e1] mb-8"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto min-h-[300px] sm:min-h-[400px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            
            {/* Subtle Gradient & Hover Title */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#06192e]/90 via-[#06192e]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 sm:p-8">
              <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#b19d7f] block font-bold mb-1.5">
                ✦ Poovar Tour Highlight
              </span>
              <p className="font-marcellus text-lg sm:text-xl text-white uppercase tracking-wider leading-snug">
                {img.alt}
              </p>
              <div className="pt-2.5 flex items-center gap-2 text-xs font-mono text-[#b19d7f]">
                <i className="ph-bold ph-arrows-out-simple text-sm"></i>
                <span>Click to Expand Full Resolution</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#06192e]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 w-10 h-10 rounded-[7px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-mono transition cursor-pointer border border-white/20"
              aria-label="Close image preview"
            >
              ✕
            </button>
            <div className="relative rounded-[7px] overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[80vh] w-auto max-w-full object-contain"
              />
              <div className="bg-[#06192e] text-white p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-t border-white/10">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#b19d7f] block font-bold">
                    Poovar Tour Itinerary Highlight
                  </span>
                  <span className="font-marcellus text-base uppercase tracking-wider text-white">
                    {selectedImage.alt}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const idx = filteredImages.findIndex(i => i.id === selectedImage.id);
                    const next = filteredImages[(idx + 1) % filteredImages.length];
                    setSelectedImage(next);
                  }}
                  className="text-xs font-mono text-[#b19d7f] hover:text-white uppercase tracking-widest flex items-center gap-1 cursor-pointer"
                >
                  <span>Next Image</span>
                  <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
