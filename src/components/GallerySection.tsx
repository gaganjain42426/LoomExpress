import { motion } from "framer-motion";
import mountainFort from "@/assets/mountain-fort.jpg";
import artisanTeam from "@/assets/artisan-team.jpg";
import showroom from "@/assets/showroom.jpg";

const galleryItems = [
  {
    image: mountainFort,
    title: "The Ancient Fort",
    description: "A sentinel above Banskho, offering panoramic mountain views at sunrise.",
    alt: "Ancient Rajasthani fort perched atop a mountain at golden hour",
  },
  {
    image: artisanTeam,
    title: "200+ Master Artisans",
    description: "Generations of skill, preserved and celebrated under one roof.",
    alt: "Large team of artisan weavers working at traditional handlooms",
  },
  {
    image: showroom,
    title: "The Luxury Showroom",
    description: "A curated gallery of the world's finest hand-knotted heritage rugs.",
    alt: "Elegant luxury rug showroom with handwoven carpets on display",
  },
];

const GallerySection = () => {
  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
            The Estate
          </p>
          <h2 className="text-4xl font-light text-foreground md:text-5xl">
            Discover Banskho
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="group overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80"
                />
                <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/20" />
              </div>
              <div className="pt-5">
                <h3 className="text-xl font-light text-foreground">{item.title}</h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
