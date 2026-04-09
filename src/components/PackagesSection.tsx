import { motion } from "framer-motion";
import { Clock, Music, Mountain, Sunrise } from "lucide-react";

const packages = [
  {
    title: "The Artisan's Touch",
    duration: "4 Hours",
    description: "An intimate introduction to the world of heritage rug-making.",
    features: [
      "Traditional folk music welcome ceremony",
      "Full factory immersion with master artisans",
      "2-hour hands-on loom workshop",
      "Complimentary chai & local sweets",
    ],
    icon: Clock,
  },
  {
    title: "The Banskho Soul",
    duration: "8 Hours",
    description: "A day-long journey into the heart of village life and craftsmanship.",
    features: [
      "Everything in The Artisan's Touch",
      "Heritage walk through the village",
      "Mountain sunset trek to the ancient fort",
      "Farm-to-table dinner from our organic garden",
    ],
    icon: Mountain,
    featured: true,
  },
  {
    title: "The Heritage Immersion",
    duration: "24 Hours",
    description: "The complete Banskho experience — stay, create, and connect.",
    features: [
      "Everything in The Banskho Soul",
      "Overnight stay in private Guest Suites",
      "Morning cow milking & fresh breakfast",
      "Fort Trek with sunrise & mountain breakfast",
    ],
    icon: Sunrise,
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Curated Experiences
          </p>
          <h2 className="text-4xl font-light text-foreground md:text-5xl">
            Three Pillars of Banskho
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              className={`group relative flex flex-col border border-border p-8 transition-all duration-500 hover:border-primary hover:shadow-lg ${
                pkg.featured ? "border-primary md:-mt-4 md:mb-0 md:pb-12" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-8 bg-primary px-4 py-1 font-sans text-xs uppercase tracking-widest text-primary-foreground">
                  Most Popular
                </span>
              )}
              <pkg.icon className="mb-4 h-6 w-6 text-foreground" strokeWidth={1.5} />
              <h3 className="text-2xl font-light text-foreground md:text-3xl">{pkg.title}</h3>
              <p className="mt-1 font-sans text-sm uppercase tracking-wider text-muted-foreground">
                {pkg.duration}
              </p>
              <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">
                {pkg.description}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 font-sans text-sm text-charcoal">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#invite"
                className="mt-8 block border border-primary py-3 text-center font-sans text-xs uppercase tracking-[0.15em] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                Request an Invite
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
