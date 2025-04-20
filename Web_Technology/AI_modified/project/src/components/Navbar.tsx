import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 shadow-sm">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
              CP
            </div>
            <span className="text-lg md:text-xl font-heading font-bold">CareerPath</span>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-500 dark:text-gray-400"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-base ${location.pathname === '/' ? 'font-semibold text-primary' : 'text-gray-700 dark:text-gray-300'}`}
            >
              Home
            </Link>
            <Link 
              to="/quiz" 
              className={`text-base ${location.pathname === '/quiz' ? 'font-semibold text-primary' : 'text-gray-700 dark:text-gray-300'}`}
            >
              Career Quiz
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link 
                  to="/" 
                  className={`block py-2 ${location.pathname === '/' ? 'font-semibold text-primary' : 'text-gray-700 dark:text-gray-300'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/quiz" 
                  className={`block py-2 ${location.pathname === '/quiz' ? 'font-semibold text-primary' : 'text-gray-700 dark:text-gray-300'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Career Quiz
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    toggleTheme();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center py-2 text-gray-700 dark:text-gray-300"
                  aria-label="Toggle theme"
                >
                  <span className="mr-2">
                    {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                  </span>
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;