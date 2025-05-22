import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaRobot, FaImage, FaBrain, FaChartLine,
  FaCogs, FaRegFileCode
} from 'react-icons/fa';
import projectData from '../../data/project_catalog.json';

function CardMenu() {
  const getCategoryIcon = (category) => {
    const baseClass = "text-2xl";
    switch (category) {
      case 'Diagnosis': return <FaBrain className={`${baseClass} text-indigo-500`} />;
      case 'Cybersecurity': return <FaRobot className={`${baseClass} text-emerald-500`} />;
      case 'Image Processing & Computer Vision': return <FaImage className={`${baseClass} text-sky-500`} />;
      case 'Natural Language Processing (NLP)': return <FaRegFileCode className={`${baseClass} text-purple-500`} />;
      case 'Decision Support System (DSS) Umum': return <FaCogs className={`${baseClass} text-yellow-500`} />;
      case 'Perbankan & Finansial':
      case 'Prediction System': return <FaChartLine className={`${baseClass} text-rose-500`} />;
      default: return <FaRegFileCode className={`${baseClass} text-gray-400`} />;
    }
  };

  const getStatusBadge = (status) => {
    const base = "text-xs font-semibold px-2 py-0.5 rounded-full";
    if (status === "coming_soon") return <span className={`${base} bg-rose-100 text-rose-600 dark:bg-rose-900 dark:text-rose-200`}>Coming Soon</span>;
    if (status === "in_progress") return <span className={`${base} bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200`}>In Progress</span>;
    return <span className={`${base} bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200`}>Free Access</span>;
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white px-6 py-12 rounded-xl shadow-lg transition-colors duration-300">
      <h1 className="text-3xl font-extrabold text-center mb-10 tracking-tight">🧠 AI Project Showcase</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.projectData.map(category => (
          <div
            key={category.id}
            className="bg-gray-100 border border-gray-300 shadow-md hover:shadow-xl rounded-2xl transition-all duration-300 p-6 space-y-4 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700"
          >
            <div className="flex items-center gap-3 mb-2">
              {getCategoryIcon(category.category)}
              <h2 className="text-lg font-semibold">{category.category}</h2>
            </div>

            <ul className="space-y-3">
              {category.projects.map(project => (
                <motion.li
                  key={project.id}
                  whileHover={{ scale: 1.015 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  className="border border-gray-300 bg-gray-50 hover:bg-gray-100 rounded-xl p-3 transition-colors duration-200 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <Link to={`/projects/${project.slug}`} className="flex flex-col space-y-1">
                    <span className="text-sm font-medium truncate">{project.name}</span>
                    <div className='flex items-end justify-end'>
                      {getStatusBadge(project.status)}
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardMenu;
