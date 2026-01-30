/**
 * Header Component
 * Modern Minimalist Design - Clean navigation with dark mode toggle
 * Sticky header with smooth scroll behavior and theme switching
 */

import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Tentang', href: '#about' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background shadow-md dark:shadow-lg'
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#1F2937] to-[#111827] dark:from-[#E5E7EB] dark:to-[#D1D5DB] rounded-lg flex items-center justify-center">
            <span className="text-white dark:text-[#111827] font-bold text-lg">D</span>
          </div>
          <span className="font-bold text-xl text-foreground hidden sm:inline">
            Damar
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm"
            >
              {item.label}
            </a>
          ))}
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            title={theme === 'light' ? 'Aktifkan Dark Mode' : 'Aktifkan Light Mode'}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-foreground" />
            )}
          </button>
          
          <a
            href="#contact"
            className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-[#111827] dark:hover:bg-[#D1D5DB] transition-colors duration-200 font-medium text-sm"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted transition-colors"
            title={theme === 'light' ? 'Aktifkan Dark Mode' : 'Aktifkan Light Mode'}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5 text-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-foreground" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-[#111827] dark:hover:bg-[#D1D5DB] transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
