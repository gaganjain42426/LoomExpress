import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNationality } from "@/context/NationalityContext";
import logo from "@/assets/vimla-logo.png";

const NationalityModal: React.FC = () => {
  const { visitorType, setVisitorType, isLoaded } = useNationality();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Only decide after localStorage has been read
    if (isLoaded) {
      setShowModal(!visitorType);
    }
  }, [visitorType, isLoaded]);

  const handleSelect = (type: "indian" | "foreign") => {
    setVisitorType(type);
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <motion.div
        className="w-full max-w-2xl rounded-lg bg-[#F5F1E8] p-8 md:p-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-center">
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Vimla LoomCraft"
            className="mx-auto mb-8 h-16 w-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />

          {/* Heading */}
          <motion.h2
            className="text-3xl font-light text-[#3A3A3A] md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Welcome to Vimla LoomCraft Experience
          </motion.h2>

          {/* Subtext */}
          <motion.p
            className="mt-4 text-lg text-[#3A3A3A]/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            To show you the right pricing, please tell us where you're from
          </motion.p>

          {/* Buttons */}
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* Indian Citizen Button */}
            <motion.button
              onClick={() => handleSelect("indian")}
              className="group relative overflow-hidden border-2 border-[#2E4F7E] bg-white p-8 transition-all duration-300 hover:bg-[#2E4F7E]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-3xl">🇮🇳</span>
              <p className="mt-4 text-xl font-light text-[#3A3A3A] transition-colors group-hover:text-white">
                Indian Citizen
              </p>
              <p className="mt-2 text-sm text-[#3A3A3A]/60 transition-colors group-hover:text-white/80">
                See pricing in Indian Rupees
              </p>
            </motion.button>

            {/* International Visitor Button */}
            <motion.button
              onClick={() => handleSelect("foreign")}
              className="group relative overflow-hidden border-2 border-[#2E4F7E] bg-white p-8 transition-all duration-300 hover:bg-[#2E4F7E]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-3xl">🌍</span>
              <p className="mt-4 text-xl font-light text-[#3A3A3A] transition-colors group-hover:text-white">
                International Visitor
              </p>
              <p className="mt-2 text-sm text-[#3A3A3A]/60 transition-colors group-hover:text-white/80">
                See pricing in USD
              </p>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NationalityModal;
