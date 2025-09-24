import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Ou use ícones personalizados

interface HeaderProps {
  logoText?: string; // Opcional: texto do logo
  navItems: { label: string; href: string }[]; // Itens de navegação
}

const Header = ({ logoText = 'MyApp', navItems }:HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Animações variantes para Framer Motion
  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const menuVariants = {
    hidden: { y: -300, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
    exit: { y: -300, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/20 border-b border-white/30 shadow-lg"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Container principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo - Animação de pulso sutil */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cor-texto to-cor-elementos rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VR</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cor-texto to-cor-elementos bg-clip-text text-transparent">
              {logoText}
            </span>
          </motion.div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-gray-700 font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:text-destaques hover:shadow-lg hover:shadow-blue-200/50 bg-white/10 backdrop-blur-sm"
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                custom={index + 1}
                whileHover={{ 
                  scale: 1.1, 
                  y: -2,
                  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' // Glow azul inovador
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
                {/* Underline animado */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </nav>

          {/* Botão de Menu Mobile */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg backdrop-blur-sm bg-white/10"
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.1 }}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Menu Mobile - Overlay com slide */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 left-0 right-0 h-full bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.nav
              className="absolute top-16 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-white/30 shadow-xl rounded-b-xl"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Impede fechamento ao clicar no menu
            >
              <ul className="py-4 space-y-4 px-4">
                {navItems.map((item, index) => (
                  <motion.li key={item.href} custom={index} variants={linkVariants}>
                    <a
                      href={item.href}
                      className="block text-gray-700 font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ x: 10, scale: 1.02 }} // Slide lateral no hover
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
