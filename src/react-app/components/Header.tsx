import { Cloud, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-2 rounded-lg shadow-lg">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CloudGuard</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('expertise')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Expertise
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all font-medium">
              Get Started
            </button>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
              Services
            </button>
            <button onClick={() => scrollToSection('expertise')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left">
              Expertise
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all font-medium">
              Get Started
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
