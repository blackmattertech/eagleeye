import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { BUSINESS } from "../data/config";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${BUSINESS.whatsappTel}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-4 bottom-24 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg md:bottom-6"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        className="absolute inset-0 bg-[#25D366]"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <FaWhatsapp className="relative h-7 w-7" />
    </motion.a>
  );
}
