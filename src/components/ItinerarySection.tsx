import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNationality } from "@/context/NationalityContext";

interface Step {
  icon: string;
  title: string;
  duration: string;
  description: string;
  highlight?: boolean;
}

const artisanSteps: Step[] = [
  {
    icon: "🚙",
    title: "Open Gypsy Arrival",
    duration: "15–20 min",
    description:
      "Your adventure begins with a scenic open-top Gypsy ride from the main road to Banskho Village — 40km of Rajasthani countryside.",
  },
  {
    icon: "🎵",
    title: "Royal Welcome",
    duration: "15–20 min",
    description:
      "Arrive to live Rajasthani folk music and dance. A flower garland is placed around your neck. This is not a museum. This is a living tradition.",
  },
  {
    icon: "🎨",
    title: "Process Showcase with Expert Guide",
    duration: "45 min",
    description:
      "Walk through each stage of rug-making: natural dyeing with indigo & madder, wool spinning, plying, and finally watching master weavers at their looms. Ask anything.",
  },
  {
    icon: "☕",
    title: "Chai & Conversation Break",
    duration: "10–15 min",
    description:
      "Fresh chai or coffee, light snacks, and informal time with your guide and artisans.",
  },
  {
    icon: "🏬",
    title: "Luxury Showroom Visit",
    duration: "30–45 min",
    description:
      "Explore finished rugs ranging from ₹5,000 to ₹5 lakh. Meet the artisan who made the one you're admiring. No pressure — just appreciation.",
  },
  {
    icon: "🚙",
    title: "Open Gypsy Return",
    duration: "10–15 min",
    description:
      "Drop-off at your pickup point, with memories (and possibly a rug) in hand.",
  },
];

const immersionSteps: Step[] = [
  {
    icon: "🚙",
    title: "Open Gypsy Arrival",
    duration: "15–20 min",
    description:
      "Same scenic arrival — but today you'll be here long enough to feel the rhythm of village life.",
  },
  {
    icon: "🎵",
    title: "Royal Welcome",
    duration: "15–20 min",
    description: "Live folk music, flower garland, and a warm Rajasthani greeting.",
  },
  {
    icon: "☕",
    title: "Chai & Orientation",
    duration: "10–15 min",
    description:
      "Settle in with a cup of chai and a quick introduction to what the day holds.",
  },
  {
    icon: "🧶",
    title: "Hands-On Weaving with Expert Artisan",
    duration: "1.5 hrs",
    description:
      "This is the heart of the experience. You sit at an actual loom. An expert artisan guides your hands. You tie real knots. You weave your own section of a rug — and you take it home.",
    highlight: true,
  },
  {
    icon: "🏬",
    title: "Showroom Visit & Shopping",
    duration: "30–45 min",
    description:
      "Same as the Artisan Introduction — explore the showroom, meet the makers.",
  },
  {
    icon: "🍽️",
    title: "Farm-to-Table Rajasthani Thali Lunch",
    duration: "30 min",
    description:
      "A pure vegetarian thali made from vegetables harvested that morning from our organic garden. Dal, roti, sabzi, rice, seasonal sides. Prepared on-site.",
  },
  {
    icon: "🏰",
    title: "Village Heritage Tour by Open Gypsy",
    duration: "~1.5–2 hrs",
    description:
      "Drive through Banskho's narrow lanes. Watch bangle-makers and potters at work — try your hand at both. Visit Banskho Fort on the hilltop for a panoramic view. Tour a traditional Rajasthani haveli.",
  },
  {
    icon: "🎁",
    title: "Souvenir & Farewell",
    duration: "15 min",
    description:
      "Receive your handmade souvenir gift — a coaster, keychain, or the woven sample you made. A send-off with gratitude.",
  },
];

const TimelineItem = ({ step, isLast }: { step: Step; isLast: boolean }) => (
  <div className="flex gap-4 md:gap-6">
    {/* Left: circle + connector */}
    <div className="flex flex-col items-center">
      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#2E4F7E] text-xl shadow-sm">
        {step.icon}
      </div>
      {!isLast && (
        <div
          className="mt-2 flex-1 border-l-2 border-dashed border-[#D4A574]/60"
          style={{ minHeight: "1.5rem" }}
        />
      )}
    </div>
    {/* Right: card */}
    <div
      className={`mb-6 flex-1 rounded p-5 ${
        step.highlight
          ? "border-l-4 border-[#2E4F7E] bg-[#EEF2F8]"
          : "border border-[#D4A574]/30 bg-[#FEFDFB]"
      }`}
    >
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3
          className={`font-serif text-lg font-medium text-[#2E4F7E] ${
            step.highlight ? "text-xl" : ""
          }`}
        >
          {step.title}
        </h3>
        <span className="rounded bg-[#C4735A] px-2.5 py-0.5 font-sans text-xs font-medium text-white">
          {step.duration}
        </span>
      </div>
      <p className="mt-2 font-sans text-sm leading-relaxed text-[#3A3A3A]/80">
        {step.description}
      </p>
    </div>
  </div>
);

const ItinerarySection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { visitorType } = useNationality();

  const tabs = [
    { label: "Artisan Introduction", sublabel: "2–3 hrs", steps: artisanSteps },
    { label: "Full Village Immersion", sublabel: "4–5 hrs", steps: immersionSteps },
  ];

  return (
    <section id="itinerary" className="bg-[#F5F1E8] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-[#C4735A]">
            Experience Itinerary
          </p>
          <h2 className="font-serif text-4xl font-light text-[#2E4F7E] md:text-5xl">
            Every Moment, Crafted
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm leading-relaxed text-[#3A3A3A]/70">
            Here's exactly what your day at Banskho looks like — from the moment the Open Gypsy
            picks you up, to your last cup of chai.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mb-10 flex gap-3 overflow-x-auto pb-1">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`min-w-[180px] flex-1 rounded px-5 py-3 text-center font-sans text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? "bg-[#2E4F7E] text-white shadow-sm"
                  : "border border-[#D4A574]/50 bg-[#FEFDFB] text-[#3A3A3A] hover:border-[#2E4F7E]"
              }`}
            >
              <span className="block">{tab.label}</span>
              <span
                className={`block text-xs font-normal ${
                  activeTab === i ? "text-white/70" : "text-[#3A3A3A]/50"
                }`}
              >
                {tab.sublabel}
              </span>
            </button>
          ))}
        </div>

        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {tabs[activeTab].steps.map((step, i) => (
              <TimelineItem
                key={i}
                step={step}
                isLast={i === tabs[activeTab].steps.length - 1}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer note */}
        <div className="mt-4 rounded border border-[#D4A574]/40 bg-[#FEFDFB] px-5 py-4">
          <p className="font-sans text-sm text-[#3A3A3A]/70">
            📍 All experiences include tea/coffee. Hotel pickup available for an additional{" "}
            <strong>
              {visitorType === "foreign"
                ? "$12 (International)"
                : visitorType === "indian"
                ? "₹500 (Indian)"
                : "₹500 (Indian) / $12 (International)"}
            </strong>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;
