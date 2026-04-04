import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ProjectCategory } from '../types';
import { navCategories } from '../config/categories';

interface NavItem {
  label: string;
  path: string;
  children?: { label: string; category: ProjectCategory }[];
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { 
    label: 'Projects', 
    path: '/projects',
    children: navCategories,
  },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileProjectOpen, setMobileProjectOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  {/*
  const handleContactClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };
  */}

  const handleProjectClick = (category: ProjectCategory) => {
    navigate(`/projects?category=${category}`);
    setIsMobileMenuOpen(false);
  };

  const isHome = location.pathname === '/';
  const isTransparent = isHome && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        !isTransparent ? 'bg-black/80 backdrop-blur-md py-4 shadow-lg border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/"
          className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-3 h-3 bg-neon-blue rounded-full shadow-[0_0_10px_#00f3ff] group-hover:scale-125 transition-transform duration-300"></div>
          <span className={`bg-clip-text text-transparent bg-gradient-to-r ${!isTransparent ? 'from-white to-gray-400' : 'from-black to-gray-600'}`}>
            JOSHUAHONG
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => {
            const isProjects = item.label === 'Projects';
            const isActive = location.pathname === item.path;
            
            return (
              <div key={item.label} className="relative group">
                <Link
                  to={item.path}
                  className={`text-sm transition-colors relative flex items-center gap-1 focus:outline-none py-2 ${
                    isActive 
                      ? 'text-neon-blue font-bold' 
                      : !isTransparent ? 'text-gray-300 hover:text-white' : 'text-black hover:text-neon-blue font-semibold'
                  }`}
                >
                  {item.label}
                  {isProjects && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                  
                  {/* Underline Indicator */}
                  {!isProjects && (
                    <span className={`absolute bottom-1 left-0 h-0.5 bg-neon-blue transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  )}
                </Link>

                {/* Desktop Dropdown for Projects */}
                {isProjects && item.children && (
                  <div className="absolute left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 w-48">
                    <div className="bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                      {item.children.map((subItem) => (
                        <button
                          key={subItem.category}
                          onClick={() => handleProjectClick(subItem.category)}
                          className="block w-full text-left px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

              
          <button
            onClick={handleContactClick}
            className={`text-sm transition-colors ${!isTransparent ? 'text-gray-300 hover:text-white' : 'text-black hover:text-neon-blue font-semibold'}`}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${!isTransparent ? 'text-white' : 'text-black'} focus:outline-none`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 h-screen overflow-y-auto">
          <div className="flex flex-col p-8 space-y-6">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  onClick={(e) => {
                    if (item.children) {
                      e.preventDefault();
                      setMobileProjectOpen(!mobileProjectOpen);
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className={`text-2xl font-bold text-left flex items-center justify-between w-full ${
                     location.pathname === item.path ? 'text-neon-blue' : 'text-white hover:text-neon-blue'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={20} className={`transition-transform ${mobileProjectOpen ? 'rotate-180' : ''}`} />}
                </Link>
                
                {/* Mobile Submenu */}
                {item.children && mobileProjectOpen && (
                  <div className="mt-4 ml-4 pl-4 border-l border-white/10 space-y-4">
                    {item.children.map((subItem) => (
                      <button
                        key={subItem.category}
                        onClick={() => handleProjectClick(subItem.category)}
                        className="block text-lg text-gray-400 hover:text-white"
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <button
              onClick={handleContactClick}
              className="text-2xl font-bold text-left text-white hover:text-neon-blue"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
