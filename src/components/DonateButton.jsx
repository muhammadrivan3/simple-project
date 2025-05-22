import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import DonateOverlay from "./DonateOverlay";
import { useTranslation } from "react-i18next";

const DonateButton = () => {
  const [open, setOpen] = useState(false);
    const { i18n } = useTranslation();
    const lang = i18n.language === "in" ? "in" : "en";

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="fixed flex justify-center items-center gap-2 bottom-5 right-5 z-40 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition"
        title="Dukung Kami"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaHeart className="text-xl" />
        <span className="font-medium">{lang==="in"?"a kasihan a":"Donate"}</span>
      </motion.button>

      {open && <DonateOverlay onClose={() => setOpen(false)} />}
    </>
  );
};

export default DonateButton;
