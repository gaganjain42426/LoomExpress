import { motion } from "framer-motion";

const placeholders = [
  "Artisan at Loom",
  "Natural Dyeing",
  "Village Tour",
  "Weaving Close-up",
  "Rajasthani Thali",
  "Banskho Fort",
];

const InstagramSection = () => (
  <section className="bg-[#F5F1E8] px-6 py-20 md:py-28">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-[#C4735A]">
          Follow Our Story
        </p>
        <h2 className="font-serif text-4xl font-light text-[#2E4F7E]">
          Daily Life at Banskho
        </h2>
        <p className="mt-3 font-sans text-sm text-[#3A3A3A]/70">
          Follow us @vimlaloomcraft for daily stories from the loom
        </p>
      </motion.div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4">
        {placeholders.map((label, i) => (
          <motion.div
            key={i}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            <div
              className="flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #D4A574, #C4735A)" }}
            >
              <div className="text-center text-white/80">
                {/* Instagram icon SVG */}
                <svg
                  className="mx-auto mb-2 h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                <p className="font-sans text-xs">{label}</p>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-[#2E4F7E]/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="font-sans text-xs font-semibold uppercase tracking-wider text-white">
                View on Instagram
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.instagram.com/vimlaloomcraft"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-[#2E4F7E] bg-white px-8 py-3 font-sans text-sm tracking-wide text-[#2E4F7E] transition-all hover:bg-[#2E4F7E] hover:text-white"
        >
          Follow @vimlaloomcraft on Instagram
        </a>
      </div>
    </div>
    {/* Replace placeholders with an Instagram embed widget (e.g., Elfsight, SnapWidget) once your account is active */}
  </section>
);

export default InstagramSection;
