'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import idFlag from '../assets/flags/id.png'; // path ke gambar bendera Indonesia
import enFlag from '../assets/flags/en.png'; // path ke gambar bendera Inggris

export default function ToggleThemeFloating() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState('in');
  const { i18n } = useTranslation();

  // Cek mode gelap dan bahasa saat komponen dimuat
  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDark(theme === 'dark');

    const savedLang = localStorage.getItem('lang') || 'in';
    setLanguage(savedLang);
    i18n.changeLanguage(savedLang);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', 'dark');
    }
    setIsDark(prev => !prev);
  };

  const toggleLanguage = () => {
    const newLang = language === 'in' ? 'en' : 'in';
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.div
      className="fixed top-4 right-4 z-50 flex items-center gap-3 cursor-pointer p-3 rounded-xl shadow-lg backdrop-blur-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Dark/Light Theme Toggle */}
      <div onClick={toggleTheme} className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="w-6 h-6 text-yellow-400" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -180, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="w-6 h-6 text-blue-600" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Language Toggle */}
      <div onClick={toggleLanguage} className="flex items-center space-x-2 p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
        <img
          src={language === 'in' ? idFlag : enFlag}
          alt="flag"
          className="w-5 h-5 rounded-sm"
        />
        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
          {language === 'in' ? 'IN' : 'EN'}
        </span>
      </div>
    </motion.div>
  );
}
