import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaRobot, FaImage, FaBrain, FaChartLine, FaCogs, FaRegFileCode } from 'react-icons/fa';
import projectData from '../../data/project_catalog.json';
import { useTranslation } from 'react-i18next';

function CategoryIcon({ category }) {
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
}

function StatusBadge({ status }) {
  const base = "text-xs font-semibold px-2 py-0.5 rounded-full";
  if (status === "coming_soon") return <span className={`${base} bg-rose-100 text-rose-600 dark:bg-rose-900 dark:text-rose-200`}>Coming Soon</span>;
  if (status === "in_progress") return <span className={`${base} bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-200`}>In Progress</span>;
  return <span className={`${base} bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-200`}>Free Access</span>;
}

function CardMenu() {
  
  
  const { i18n } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-6 py-12 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-colors duration-300">
      <motion.h1
        className="text-3xl font-extrabold text-center mb-10 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block mr-2">🧠</span> AI Project Showcase
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.projectData.map((category, i) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 shadow-lg backdrop-blur-sm bg-opacity-80 hover:shadow-2xl transition-all duration-300 rounded-2xl p-6 space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <CategoryIcon category={category.category[i18n.language]} />
              <h2 className="text-lg font-semibold">{category.category[i18n.language]}</h2>
            </div>

            <ul className="space-y-3">
              {category.projects.map(project => (
                <motion.li
                  key={project.id}
                  whileHover={{
                    scale: 1.03,
                    rotate: -0.3,
                  }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  className="group border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl p-3 transition-colors duration-200 shadow-sm"
                >
                  <Link to={`/projects/${project.slug}`} className="flex flex-col space-y-1">
                    <span className="text-sm font-medium truncate group-hover:underline tracking-wide transition-all duration-150">
                      {project.name[i18n.language]}
                    </span>
                    <div className='flex items-end justify-end'>
                      <StatusBadge status={project.status[i18n.language]} />
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default CardMenu;
