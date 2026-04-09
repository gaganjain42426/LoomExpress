import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "I've done cooking classes, walking tours, pottery — but nothing has stayed with me like sitting at that loom. The artisan guided my hands and I actually made something. I cried a little.",
    name: "Sarah M.",
    country: "United Kingdom",
    flag: "🇬🇧",
  },
  {
    quote:
      "The folk music welcome alone was worth the trip. Then the thali lunch from their own garden. Then the fort. I didn't want to leave. Book the full day — don't do the short one.",
    name: "Arjun K.",
    country: "Mumbai",
    flag: "🇮🇳",
  },
  {
    quote:
      "We were a group of 8 from Germany. The team handled everything perfectly. The artisans were patient, funny, and incredibly skilled. The rug I commissioned is now the centrepiece of my living room.",
    name: "Klaus & Ingrid",
    country: "Germany",
    flag: "🇩🇪",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="bg-[#F5F1E8] px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-[#C4735A]">
          Guest Stories
        </p>
        <h2 className="font-serif text-4xl font-light text-[#2E4F7E] md:text-5xl">
          What Our Guests Say
        </h2>
        <p className="mt-4 font-sans text-sm text-[#3A3A3A]/70">
          Rated 5★ by guests from across the world
        </p>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="flex flex-col border-t-[3px] border-[#D4A574] bg-[#FEFDFB] p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <div className="flex gap-0.5 text-[#D4A574]">
              {[...Array(5)].map((_, si) => (
                <span key={si} className="text-lg">★</span>
              ))}
            </div>
            <p className="mt-5 flex-1 font-serif text-base italic leading-relaxed text-[#3A3A3A]">
              "{t.quote}"
            </p>
            <div className="mt-6 border-t border-[#D4A574]/30 pt-4">
              <p className="font-sans text-sm font-semibold text-[#3A3A3A]">
                — {t.name} {t.flag}
              </p>
              <p className="font-sans text-xs text-[#3A3A3A]/60">{t.country}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-sans text-sm text-[#3A3A3A]/70">
          Join 500+ guests who've experienced Banskho →{" "}
          <button
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="font-semibold text-[#C4735A] underline-offset-2 hover:underline"
          >
            Request a Booking
          </button>
        </p>
      </motion.div>
    </div>
  </section>
);

export default TestimonialsSection;
