import { motion } from "framer-motion";
import rugTexture from "@/assets/rug-texture.jpg";
import organicGarden from "@/assets/organic-garden.jpg";

const LoomToTableSection = () => {
  return (
    <section className="bg-muted px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Full Village Immersion
          </p>
          <h2 className="text-4xl font-light text-foreground md:text-5xl">
            Farm, Loom & Table
          </h2>
        </motion.div>

        <div className="grid items-center gap-0 md:grid-cols-2">
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={rugTexture}
              alt="Close-up of hand-woven rug texture showing intricate knot detail"
              className="h-[400px] w-full object-cover md:h-[520px]"
            />
          </motion.div>

          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={organicGarden}
              alt="Organic garden with cows grazing and mountains in the background"
              className="h-[400px] w-full object-cover md:h-[520px]"
            />
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="font-sans text-base leading-relaxed text-muted-foreground">
            In our Full Village Immersion, lunch isn't an afterthought — it's part of the experience. Our organic garden grows the vegetables that land on your thali the same morning. Our two resident cows provide fresh milk for your chai. Everything on your plate comes from within walking distance of where you sit. This is Rajasthani hospitality at its most honest.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LoomToTableSection;
