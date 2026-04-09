import React, { useState } from "react";
import { motion } from "framer-motion";

const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.5 }}
    >
      <motion.a
        href="https://wa.me/918003225164"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-110"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          className="h-7 w-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.869 1.271c-1.477.816-2.768 1.988-3.736 3.42-1.02 1.54-1.557 3.294-1.557 5.129 0 1.312.226 2.59.67 3.802L2.98 19.47l4.239-1.111c1.7.886 3.6 1.354 5.534 1.354 2.82 0 5.464-.732 7.746-2.122 1.477-.816 2.768-1.988 3.736-3.42 1.02-1.54 1.557-3.294 1.557-5.129 0-1.312-.226-2.59-.67-3.802l1.228-4.26-4.239 1.111c-1.7-.886-3.6-1.354-5.534-1.354z" />
        </svg>

        {/* Tooltip */}
        <motion.div
          className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded bg-gray-900 px-3 py-2 text-sm text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          pointerEvents="none"
        >
          Chat with us
        </motion.div>
      </motion.a>
    </motion.div>
  );
};

export default WhatsAppButton;
