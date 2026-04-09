import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useNationality } from "@/context/NationalityContext";

const ContactSection = () => {
  const { visitorType } = useNationality();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", experience: "", date: "", message: "" });
  };

  const pickupCost =
    visitorType === "foreign" ? "$12" : visitorType === "indian" ? "₹500" : "₹500 / $12";

  return (
    <section id="contact" className="bg-[#F5F1E8] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        {/* 2-column: Plan Your Visit + Map */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          {/* Left: Plan Your Visit */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-2 font-sans text-sm uppercase tracking-[0.2em] text-[#C4735A]">
              Find Us
            </p>
            <h2 className="mb-8 font-serif text-3xl font-light text-[#2E4F7E]">
              How to Reach Banskho
            </h2>

            <div className="space-y-5">
              {[
                {
                  icon: "📍",
                  label: "Location",
                  value:
                    "Banskho Village, Rajasthan — 40km from Jaipur City Palace, on the Delhi-Jaipur Highway",
                },
                {
                  icon: "🕐",
                  label: "Hours",
                  value: "Daily experiences, Morning & Afternoon slots",
                },
                {
                  icon: "🚗",
                  label: "From Jaipur",
                  value:
                    "50-minute drive. We're on the Delhi-Jaipur Highway — easy to find.",
                },
                {
                  icon: "🏨",
                  label: "Hotel Pickup",
                  value: `Available from any Jaipur hotel. ${
                    visitorType === "indian"
                      ? "₹500 extra"
                      : visitorType === "foreign"
                      ? "$12 extra"
                      : "Indian: ₹500 extra | International: $12 extra"
                  }`,
                },
                {
                  icon: "📞",
                  label: "Phone / WhatsApp",
                  value: "+91-XXXXXXXXXX",
                },
                {
                  icon: "📧",
                  label: "Email",
                  value: "bookings@vimlaloomcraft.com",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="mt-0.5 text-lg">{item.icon}</span>
                  <div>
                    <p className="font-sans text-xs font-semibold uppercase tracking-wider text-[#3A3A3A]/50">
                      {item.label}
                    </p>
                    <p className="mt-0.5 font-sans text-sm text-[#3A3A3A]">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded bg-[#25D366] px-6 py-3.5 font-sans text-sm font-medium text-white transition-all hover:bg-[#1ebe5a]"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.271c-1.477.816-2.768 1.988-3.736 3.42-1.02 1.54-1.557 3.294-1.557 5.129 0 1.312.226 2.59.67 3.802L2.98 19.47l4.239-1.111c1.7.886 3.6 1.354 5.534 1.354 2.82 0 5.464-.732 7.746-2.122 1.477-.816 2.768-1.988 3.736-3.42 1.02-1.54 1.557-3.294 1.557-5.129 0-1.312-.226-2.59-.67-3.802l1.228-4.26-4.239 1.111c-1.7-.886-3.6-1.354-5.534-1.354z" />
              </svg>
              💬 Chat with Us on WhatsApp
            </a>
          </motion.div>

          {/* Right: Map Placeholder */}
          <motion.div
            className="flex h-full min-h-[320px] flex-col items-center justify-center bg-[#2E4F7E] p-8 text-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-serif text-xl font-light text-white">
              Google Maps — Banskho Village
            </p>
            <p className="mt-3 font-sans text-xs italic text-white/50">
              Embed your Google Maps iframe here once you have the share link for the location.
            </p>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          className="mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="mb-8 text-center font-serif text-3xl font-light text-[#2E4F7E]">
            Send Us a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name *"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border-b border-[#D4A574]/60 bg-transparent py-3 font-sans text-sm text-[#3A3A3A] placeholder:text-[#3A3A3A]/40 focus:border-[#2E4F7E] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                maxLength={255}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border-b border-[#D4A574]/60 bg-transparent py-3 font-sans text-sm text-[#3A3A3A] placeholder:text-[#3A3A3A]/40 focus:border-[#2E4F7E] focus:outline-none"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="tel"
                placeholder="Phone (Optional)"
                maxLength={20}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border-b border-[#D4A574]/60 bg-transparent py-3 font-sans text-sm text-[#3A3A3A] placeholder:text-[#3A3A3A]/40 focus:border-[#2E4F7E] focus:outline-none"
              />
              <select
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                className="w-full border-b border-[#D4A574]/60 bg-transparent py-3 font-sans text-sm text-[#3A3A3A] focus:border-[#2E4F7E] focus:outline-none"
              >
                <option value="">Experience Type</option>
                <option value="artisan">Artisan Introduction — 2–3 Hours</option>
                <option value="immersion">Full Village Immersion — 4–5 Hours</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Preferred Date (e.g. 15 April 2026)"
              maxLength={50}
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full border-b border-[#D4A574]/60 bg-transparent py-3 font-sans text-sm text-[#3A3A3A] placeholder:text-[#3A3A3A]/40 focus:border-[#2E4F7E] focus:outline-none"
            />

            <textarea
              placeholder="Your message or any questions..."
              rows={4}
              maxLength={1000}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none border-b border-[#D4A574]/60 bg-transparent py-3 font-sans text-sm text-[#3A3A3A] placeholder:text-[#3A3A3A]/40 focus:border-[#2E4F7E] focus:outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#2E4F7E] py-4 font-sans text-xs uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
            >
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
