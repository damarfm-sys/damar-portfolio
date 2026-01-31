/**
 * Footer Component
 * Modern Minimalist Design - Clean footer with links and copyright
 */

import { Heart, Linkedin, Github, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 pb-8 border-b border-white/20">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Damar Fatah Mubin</h3>
            <p className="text-white/70 text-sm">
              Front-End Developer dan Data Analyst yang passionate dalam membangun solusi digital yang inovatif.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  Tentang
                </a>
              </li>
              <li>
                <a href="#experience" className="text-white/70 hover:text-white transition-colors">
                  Pengalaman
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/70 hover:text-white transition-colors">
                  Keahlian
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="font-semibold">Ikuti Saya</h4>
            <div className="flex gap-3">
              <a
                href="https://id.linkedin.com/in/damar-fatah-m-b37750299"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/damarfm-sys"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/jdnu4vr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <ul className="space-y-2 text-sm pt-2">
              <li>
                <a href="mailto:damarfm49@gmail.com" className="text-white/70 hover:text-white transition-colors">
                  damarfm49@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:0895323667979" className="text-white/70 hover:text-white transition-colors">
                  0895323667979
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">
            &copy; {currentYear} Damar Fatah Mubin. All rights reserved.
          </p>
            <p className="text-white/60 text-sm flex items-center gap-1">
            Dibuat dengan <Heart className="w-4 h-4 text-red-400" /> menggunakan React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
