import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { useNationality } from "@/context/NationalityContext";

interface Experience {
  title: string;
  duration: string;
  indianPrice: number;
  foreignPrice: number;
  foreignPriceDisplay: string;
  description: string;
  features: string[];
  takeHome: string;
  popular?: boolean;
  accentColor: string;
}

const experiences: Experience[] = [
  {
    title: "Artisan Introduction",
    duration: "2–3 Hours",
    indianPrice: 1500,
    foreignPrice: 35,
    foreignPriceDisplay: "$35",
    description:
      "An intimate introduction to the world of heritage rug-making. Watch master artisans at work, learn about natural dyes and ancient weaving techniques, and visit our luxury showroom.",
    features: [
      "Traditional folk music welcome ceremony",
      "Full process showcase with expert guide (dyeing, spinning, weaving)",
      "Tea/coffee & light snacks",
      "Showroom visit with finished rugs (₹5K–₹5L)",
      "Open Gypsy ride to & from the village",
    ],
    takeHome: "Photos, memories & artisan chai experience",
    accentColor: "#2E4F7E",
  },
  {
    title: "Full Village Immersion",
    duration: "4–5 Hours",
    indianPrice: 3000,
    foreignPrice: 80,
    foreignPriceDisplay: "$80",
    description:
      "A full-day journey into the heart of Banskho. Weave your own section of a rug, feast on a farm-to-table Rajasthani thali, and explore the village's living heritage.",
    features: [
      "Everything in the Artisan Introduction",
      "1.5-hour hands-on weaving session (you weave your own section to take home)",
      "Farm-to-table Rajasthani vegetarian thali lunch",
      "Heritage village tour by Open Gypsy (Banskho Fort, Haveli, bangle & pot-making)",
      "Souvenir gift to take home",
    ],
    takeHome: "Your hand-woven sample, souvenir gift & a full Rajasthani meal",
    popular: true,
    accentColor: "#C4735A",
  },
];

const PackagesSection = () => {
  const { visitorType } = useNationality();

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
            Our Experiences
          </p>
          <h2 className="text-4xl font-light text-foreground md:text-5xl">
            Choose Your Journey
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className={`group relative flex flex-col overflow-hidden border border-border transition-all duration-500 hover:-translate-y-1 hover:border-primary hover:shadow-xl ${
                exp.popular ? "md:col-span-1" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full" style={{ backgroundColor: exp.accentColor }} />

              <div className="flex flex-col flex-1 p-8">
                {exp.popular && (
                  <span className="absolute right-6 top-5 bg-[#C4735A] px-3 py-1 font-sans text-xs uppercase tracking-widest text-white">
                    Most Popular
                  </span>
                )}

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-light text-foreground md:text-3xl">{exp.title}</h3>
                  <p className="mt-1 font-sans text-sm uppercase tracking-wider text-muted-foreground">
                    {exp.duration}
                  </p>
                </div>
                <Clock className="h-6 w-6 flex-shrink-0 text-foreground" strokeWidth={1.5} />
              </div>

              <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground">{exp.description}</p>

              <ul className="mt-6 flex-1 space-y-3">
                {exp.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 font-sans text-sm text-charcoal">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-sans text-sm uppercase tracking-wider text-muted-foreground">Pricing</p>
                <p className="mt-2 text-3xl font-light text-foreground">
                  {visitorType === "indian"
                    ? `₹${exp.indianPrice.toLocaleString("en-IN")}`
                    : `${exp.foreignPriceDisplay}`}
                  <span className="font-sans text-sm text-muted-foreground"> per person</span>
                </p>
                <p className="mt-2 text-xs font-light text-muted-foreground">
                  + Optional hotel pickup: {visitorType === "indian" ? "₹500" : visitorType === "foreign" ? "$12" : "₹500 / $12"}
                </p>
              </div>

              {/* What you'll take home */}
              <div className="mt-4 rounded bg-[#F5F1E8] px-4 py-3">
                <p className="font-sans text-xs text-[#3A3A3A]/70">
                  <span className="font-semibold text-[#2E4F7E]">What you'll take home: </span>
                  {exp.takeHome}
                </p>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-6 block border border-primary py-3 text-center font-sans text-xs uppercase tracking-[0.15em] text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"
              >
                Request a Booking
              </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
