import React from 'react'
import CardMenu from '../components/CardMenu'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-300 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Selamat Datang di <span className="text-indigo-600">Simple Tools Ai</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Gunakan berbagai simple fitur AI seperti Chatbot, Pemrosesan Gambar, dan Sistem Pengambilan Keputusan.
        </p>
      </motion.div>

      <CardMenu />
    </div>
  )
}

export default Home
