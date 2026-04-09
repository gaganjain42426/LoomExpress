import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNationality } from "@/context/NationalityContext";
import logo from "@/assets/vimla-logo.png";

const navLinks = [
  { label: "Experiences", href: "#packages" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [pricingOpen, setPricingOpen] = useState(false);
  const { visitorType, setVisitorType } = useNationality();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPricingOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#F5F1E8] shadow-[0_2px_12px_rgba(0,0,0,0.08)]" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start"
          >
            <span
              className={`font-serif text-xl leading-tight transition-colors duration-300 ${
                scrolled ? "text-[#2E4F7E]" : "text-white"
              }`}
            >
              Vimla LoomCraft
            </span>
            <span className="font-sans text-[10px] tracking-[0.18em] text-[#D4A574]">
              EXPERIENCE
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className={`group relative font-sans text-sm tracking-[0.05em] transition-colors duration-300 ${
                  scrolled ? "text-[#3A3A3A]" : "text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-[#C4735A] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Right: Pricing toggle + CTA */}
          <div className="hidden items-center gap-3 md:flex">
            {visitorType && (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setPricingOpen((p) => !p)}
                  className={`flex items-center gap-1.5 rounded border px-3 py-1.5 font-sans text-xs tracking-wide transition-all duration-300 ${
                    scrolled
                      ? "border-[#D4A574]/60 text-[#3A3A3A] hover:border-[#2E4F7E]"
                      : "border-white/40 text-white hover:border-white"
                  }`}
                >
                  {visitorType === "indian" ? "🇮🇳 Indian Pricing" : "🌍 Intl. Pricing ($)"}
                  <ChevronDown
                    className={`h-3 w-3 transition-transform duration-200 ${
                      pricingOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {pricingOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 min-w-[210px] overflow-hidden rounded border border-[#D4A574]/50 bg-[#FEFDFB] shadow-lg"
                    >
                      <button
                        onClick={() => {
                          setVisitorType(visitorType === "indian" ? "foreign" : "indian");
                          setPricingOpen(false);
                        }}
                        className="w-full px-4 py-3 text-left font-sans text-sm text-[#3A3A3A] transition-colors hover:bg-[#F5F1E8]"
                      >
                        {visitorType === "indian"
                          ? "🌍 Switch to International ($)"
                          : "🇮🇳 Switch to Indian (₹)"}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
            <button
              onClick={() => scrollTo("#contact")}
              className="rounded bg-[#C4735A] px-5 py-2.5 font-sans text-sm font-medium text-white transition-all hover:bg-[#b36349]"
            >
              Request a Booking
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className={`p-1 transition-colors duration-300 md:hidden ${
              scrolled ? "text-[#2E4F7E]" : "text-white"
            }`}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[60] bg-black/40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.3 }}
              className="fixed inset-x-0 top-0 z-[70] bg-[#F5F1E8] shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-[#D4A574]/30 px-6 py-5">
                <div>
                  <span className="font-serif text-xl text-[#2E4F7E]">Vimla LoomCraft</span>
                  <span className="ml-2 font-sans text-[10px] tracking-widest text-[#D4A574]">
                    EXPERIENCE
                  </span>
                </div>
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6 text-[#3A3A3A]" />
                </button>
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="flex min-h-[48px] w-full items-center border-b border-[#D4A574]/20 px-6 font-sans text-sm text-[#3A3A3A] hover:bg-[#D4A574]/10"
                >
                  {link.label}
                </button>
              ))}

              {visitorType && (
                <button
                  onClick={() => {
                    setVisitorType(visitorType === "indian" ? "foreign" : "indian");
                    setMenuOpen(false);
                  }}
                  className="flex min-h-[48px] w-full items-center border-b border-[#D4A574]/20 px-6 font-sans text-sm text-[#3A3A3A] hover:bg-[#D4A574]/10"
                >
                  {visitorType === "indian"
                    ? "🌍 Switch to International Pricing ($)"
                    : "🇮🇳 Switch to Indian Pricing (₹)"}
                </button>
              )}

              <div className="p-6">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full rounded bg-[#C4735A] py-3.5 font-sans text-sm font-medium text-white"
                >
                  Request a Booking
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
