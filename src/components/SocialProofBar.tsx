const stats = [
  { icon: "⭐", stat: "5-Star Rated", desc: "Experience" },
  { icon: "🌍", stat: "40+ Countries", desc: "Guests from worldwide" },
  { icon: "👐", stat: "200 Artisans", desc: "Master weavers" },
  { icon: "🏰", stat: "400 Years", desc: "Craft heritage" },
];

const SocialProofBar = () => (
  <div className="border-b border-t border-[#D4A574]/50 bg-[#F5F1E8] px-6 py-7">
    <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`flex flex-col items-center text-center ${
            i > 0 ? "md:border-l md:border-[#D4A574]/40" : ""
          }`}
        >
          <span className="text-2xl">{s.icon}</span>
          <span className="mt-1 font-sans text-base font-bold text-[#2E4F7E]">{s.stat}</span>
          <span className="font-sans text-[13px] text-[#3A3A3A]/70">{s.desc}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SocialProofBar;
