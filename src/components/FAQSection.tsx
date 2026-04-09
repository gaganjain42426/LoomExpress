import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "Do I need any experience to participate in weaving?",
    a: "Not at all. Our expert artisans guide your hands through every step. Guests of all ages and abilities — including children and elderly visitors — have woven their first knots with us. The process is intuitive once you feel it.",
  },
  {
    q: "How far is Banskho from Jaipur?",
    a: "Banskho Village is 40km from Jaipur City Palace — approximately a 50-minute drive. We're located directly on the Delhi-Jaipur Highway, which makes us easy to find. We also offer hotel pickup (₹500 for Indian guests / $12 for international guests).",
  },
  {
    q: "What languages are guides available in?",
    a: "All our guides are fluent in English and Hindi. For other languages, please mention your preference when requesting a booking and we'll do our best to accommodate.",
  },
  {
    q: "Is the food vegetarian? Can dietary requirements be accommodated?",
    a: "Yes, our farm-to-table Rajasthani thali is 100% vegetarian. We can accommodate most dietary requirements (vegan, gluten-free, etc.) with advance notice — just mention it in your booking request.",
  },
  {
    q: "Can I buy rugs? Is there pressure to purchase?",
    a: "Our showroom is open for all guests, featuring rugs from ₹5,000 to ₹5 lakh. There is absolutely no pressure to buy. Our approach is educational — understanding the craft often deepens appreciation for the pieces. Guests who purchase on the day receive a same-day discount.",
  },
  {
    q: "Can I commission a custom rug?",
    a: "Yes. During your showroom visit, you can consult with our team about commissioning a completely custom rug — your dimensions, colours, and pattern. Our team will guide you through the design process.",
  },
  {
    q: "What is the cancellation policy?",
    a: "We understand plans change. Please contact us via WhatsApp or email as soon as possible if you need to reschedule. We do our best to accommodate rescheduling requests with at least 24 hours notice.",
  },
  {
    q: "Is the experience suitable for children?",
    a: "Absolutely. Children love the hands-on weaving session and the village tour — especially the potter's wheel. We recommend the Full Village Immersion for families.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-[#FEFDFB] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 font-sans text-sm uppercase tracking-[0.2em] text-[#C4735A]">
            Good to Know
          </p>
          <h2 className="font-serif text-4xl font-light text-[#2E4F7E] md:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="overflow-hidden border border-[#D4A574]/40 bg-white"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <button
                className="flex min-h-[52px] w-full items-center justify-between gap-4 px-6 py-4 text-left"
                onClick={() => toggle(i)}
              >
                <span className="font-sans text-sm font-medium text-[#3A3A3A] md:text-base">
                  {faq.q}
                </span>
                <span className="flex-shrink-0 text-[#2E4F7E] transition-transform duration-200">
                  {openIndex === i ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Plus className="h-5 w-5" />
                  )}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="border-t border-[#D4A574]/20 px-6 py-4">
                      <p className="font-sans text-sm leading-relaxed text-[#3A3A3A]/80">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
