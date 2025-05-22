import React from "react";
import { FaHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import donateText from "../data/donate_overlay.json";

const DonateOverlay = ({ onClose }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "in" ? "in" : "en";
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>

        <div className="flex justify-center mb-4">
          <div className="bg-pink-100 p-3 rounded-full">
            <FaHeart className="text-pink-600 text-2xl" />
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2">{donateText.title[lang]}</h2>
        <p className="text-sm text-gray-600 mb-4">
          {donateText.description[lang]}
        </p>

        <div className="space-y-2">
          <a
            href="https://saweria.co/xMRx"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg transition"
          >
            {donateText.saweria[lang]}
          </a>

          <a
            href="https://ko-fi.com/muhammadrivan"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
           {donateText.kofi[lang]}
          </a>
        </div>
      </div>
    </div>
  );
};

export default DonateOverlay;
