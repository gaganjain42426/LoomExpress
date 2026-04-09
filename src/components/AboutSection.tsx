import { motion } from "framer-motion";

const stats = [
  { num: "200+", label: "Master Artisans" },
  { num: "400 yrs", label: "Craft Heritage" },
  { num: "40km", label: "From Jaipur City Palace" },
];

const AboutSection = () => (
  <section id="about" className="bg-[#FEFDFB] px-6 py-24 md:py-32">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-[#C4735A]">
          Our Story
        </p>
        <h2 className="font-serif text-4xl font-light text-[#2E4F7E] md:text-5xl">
          400 Years. 200 Artisans. One Village.
        </h2>
      </motion.div>

      <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
        {/* Left: Text */}
        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-sans text-base leading-relaxed text-[#3A3A3A]">
            Banskho is not a tourism project. It was a weaving village long before visitors arrived — and it will be one long after they leave.
          </p>
          <p className="font-sans text-base leading-relaxed text-[#3A3A3A]">
            For over 400 years, the families of Banskho have practiced the art of hand-knotted rug weaving. Technique passed from grandmother to grandchild, from master to apprentice, knot by patient knot.
          </p>
          <p className="font-sans text-base leading-relaxed text-[#3A3A3A]">
            Today, more than 200 artisans work here — not in a demonstration center, not for show — but filling real international orders for clients across the world. Vimla International, our parent company, has built that bridge between Banskho's craft and the world's living rooms for decades.
          </p>
          <p className="font-sans text-base leading-relaxed text-[#3A3A3A]">
            The Vimla LoomCraft Experience was born from a simple belief: the best way to appreciate what these artisans make is to sit beside them and try it yourself.
          </p>
        </motion.div>

        {/* Right: Placeholder image */}
        <motion.div
          className="flex h-80 items-center justify-center bg-[#2E4F7E] md:h-[420px]"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-sans text-sm uppercase tracking-widest text-white/50">
            Artisan / Village Portrait
          </p>
        </motion.div>
      </div>

      {/* Stats row */}
      <motion.div
        className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center border border-[#D4A574]/40 bg-[#FEFDFB] px-8 py-8 text-center"
          >
            <span className="font-serif text-5xl font-light text-[#2E4F7E]">{stat.num}</span>
            <span className="mt-2 font-sans text-sm text-[#3A3A3A]/70">{stat.label}</span>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
