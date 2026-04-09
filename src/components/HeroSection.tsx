import { motion } from "framer-motion";
import heroImage from "@/assets/hero-weaver.jpg";
import logo from "@/assets/vimla-logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Master weaver crafting a heritage rug at a traditional handloom"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.img
          src={logo}
          alt="Vimla LoomCraft Experience"
          className="mb-8 h-20 w-auto brightness-0 invert"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h1
          className="max-w-4xl text-5xl font-light leading-tight tracking-tight text-primary-foreground md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Where Every Knot Tells a Story
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg font-sans font-light text-primary-foreground/80 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Experience the soul of Banskho through heritage rug-making and mountain-side luxury.
        </motion.p>

        <motion.a
          href="#packages"
          className="mt-10 border border-primary-foreground/40 px-8 py-3 font-sans text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          Explore Experiences
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
