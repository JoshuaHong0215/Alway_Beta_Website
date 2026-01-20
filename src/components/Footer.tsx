import React from 'react';
import { Github, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-white mb-2">JOSHUAHONG</h4>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} JOSHUAHONG Portfolio. All rights reserved.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="https://github.com/JoshuaHong0215" className="text-gray-400 hover:text-neon-blue transition-colors transform hover:scale-110">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors transform hover:scale-110">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-neon-blue transition-colors transform hover:scale-110">
            <Instagram size={20} />
          </a>
          <a href="sebin5736@gmail.com" className="text-gray-400 hover:text-neon-blue transition-colors transform hover:scale-110">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;