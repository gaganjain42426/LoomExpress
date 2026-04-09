import React from "react";
import { useNationality } from "@/context/NationalityContext";

const PricingToggle: React.FC = () => {
  const { visitorType, toggleVisitorType } = useNationality();

  if (!visitorType) return null;

  return (
    <div className="fixed top-6 right-6 z-40">
      <button
        onClick={toggleVisitorType}
        className="rounded-full bg-[#2E4F7E] px-4 py-2 text-xs font-light uppercase tracking-wider text-white transition-all hover:bg-[#C4735A]"
      >
        {visitorType === "indian" ? "Switch to International Pricing" : "Switch to Indian Pricing"}
      </button>
    </div>
  );
};

export default PricingToggle;
