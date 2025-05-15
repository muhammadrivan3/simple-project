import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaRobot, FaImage, FaBrain } from 'react-icons/fa'

const menuItems = [
  {
    title: 'Chatbot',
    desc: 'Interaksi AI pintar',
    icon: <FaRobot className="text-4xl mb-3 text-indigo-500" />,
    to: '/chat',
    available: true,
  },
  {
    title: 'Image Processing',
    desc: 'Olahan & deteksi gambar',
    icon: <FaImage className="text-4xl mb-3 text-green-500" />,
    to: '/image',
    available: false,
  },
  {
    title: 'Decision',
    desc: 'Sistem pakar & keputusan',
    icon: <FaBrain className="text-4xl mb-3 text-pink-500" />,
    to: '/decision',
    available: false,
  },
]

function CardMenu() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {menuItems.map((item, index) =>
          item.available ? (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white p-6 rounded-xl shadow-xl cursor-pointer"
            >
              <Link to={item.to} className="flex flex-col items-center text-center">
                {item.icon}
                <h2 className="text-xl font-bold mb-1">{item.title}</h2>
                <p className="text-gray-600">{item.desc}</p>
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key={index}
              initial={{ opacity: 0.5, scale: 0.9 }}
              animate={{ opacity: 0.6, scale: 1 }}
              className="bg-gray-300 p-6 rounded-xl shadow-inner text-center opacity-50 cursor-not-allowed"
            >
              <div className="flex flex-col items-center">
                {item.icon}
                <h2 className="text-xl font-bold mb-1">{item.title}</h2>
                <p className="text-gray-600">{item.desc}</p>
                <span className="text-sm mt-2 bg-yellow-200 px-2 py-1 rounded-full text-yellow-800 font-semibold">Coming Soon</span>
              </div>
            </motion.div>
          )
        )}
      </div>
    </div>
  )
}

export default CardMenu
