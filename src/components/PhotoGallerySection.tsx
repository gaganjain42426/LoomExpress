import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  label: string;
  category: string;
  aspect: "portrait" | "landscape";
}

const galleryItems: GalleryItem[] = [
  { label: "Master Weaver at Loom", category: "artisans", aspect: "portrait" },
  { label: "Guests Weaving Together", category: "guests", aspect: "landscape" },
  { label: "Banskho Village Path", category: "village", aspect: "landscape" },
  { label: "Natural Dyeing Process", category: "craft", aspect: "portrait" },
  { label: "International Guests", category: "guests", aspect: "portrait" },
  { label: "Artisan Detail Work", category: "artisans", aspect: "landscape" },
  { label: "Banskho Fort View", category: "village", aspect: "portrait" },
  { label: "Spinning the Wool", category: "craft", aspect: "landscape" },
  { label: "Group Photo at Loom", category: "guests", aspect: "portrait" },
];

const filters = ["All", "Artisans", "Guests", "Village", "Craft Process"];
const filterKeys: Record<string, string> = {
  All: "all",
  Artisans: "artisans",
  Guests: "guests",
  Village: "village",
  "Craft Process": "craft",
};

const PhotoGallerySection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = galleryItems.filter(
    (item) =>
      filterKeys[activeFilter] === "all" || item.category === filterKeys[activeFilter]
  );

  const prev = () =>
    setLightboxIndex((idx) =>
      idx !== null ? (idx > 0 ? idx - 1 : filtered.length - 1) : null
    );

  const next = () =>
    setLightboxIndex((idx) =>
      idx !== null ? (idx < filtered.length - 1 ? idx + 1 : 0) : null
    );

  return (
    <section id="gallery" className="bg-[#FEFDFB] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-[#C4735A]">
            The Experience in Pictures
          </p>
          <h2 className="font-serif text-4xl font-light text-[#2E4F7E] md:text-5xl">
            A Glimpse of Banskho
          </h2>
        </motion.div>

        {/* Filter buttons */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`rounded px-4 py-2 font-sans text-sm transition-all duration-200 ${
                activeFilter === f
                  ? "bg-[#2E4F7E] text-white"
                  : "border border-[#D4A574] bg-[#FEFDFB] text-[#3A3A3A] hover:border-[#2E4F7E]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="columns-1 gap-4 sm:columns-2 md:columns-3"
          >
            {filtered.map((item, i) => (
              <div
                key={item.label}
                className={`mb-4 break-inside-avoid cursor-pointer overflow-hidden rounded ${
                  item.aspect === "portrait" ? "h-72" : "h-48"
                } group relative`}
                onClick={() => setLightboxIndex(i)}
              >
                <div
                  className="flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(${135 + i * 20}deg, #D4A574 0%, #C4735A 100%)`,
                    opacity: 0.85,
                  }}
                >
                  <p className="font-sans text-sm text-white/90">{item.label}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-[#2E4F7E]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="font-sans text-xs font-semibold uppercase tracking-widest text-white">
                    View
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="mt-6 text-center font-sans text-xs italic text-[#3A3A3A]/50">
          📸 Full gallery coming soon — follow us @vimlaloomcraft for daily updates
        </p>

        <div className="mt-10 text-center">
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded bg-[#C4735A] px-8 py-3 font-sans text-sm font-medium text-white transition-all hover:bg-[#b36349]"
          >
            Experience This Yourself → Request a Booking
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute right-5 top-5 text-white/80 hover:text-white"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <motion.div
              className="flex h-[60vh] w-full max-w-3xl items-center justify-center rounded"
              style={{
                background: `linear-gradient(135deg, #D4A574, #C4735A)`,
              }}
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-serif text-xl text-white">
                {filtered[lightboxIndex]?.label}
              </p>
            </motion.div>

            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallerySection;
