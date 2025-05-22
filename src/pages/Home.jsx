import React from 'react'
import CardMenu from '../components/Card/CardMenu'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t, i18n } = useTranslation()
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100  py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
           {t('welcome_text.part1')} <span className="text-blue-600">{t('welcome_text.part2')}</span>
        
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
         {t('description')}
        </p>
      </motion.div>

      <CardMenu />
    </div>
  )
}

export default Home
