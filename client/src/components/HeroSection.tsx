/**
 * Hero Section Component
 * Modern Minimalist Design - Typography-first approach with background image
 * Features: Large heading, subheading, CTA button, and decorative elements
 */

import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/70 z-1" />

      {/* Content */}
      <div className="container relative z-10 text-center space-y-6 md:space-y-8 px-4">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-display md:text-6xl lg:text-7xl text-foreground leading-tight">
            Damar Fatah Mubin
          </h1>
          <p className="text-xl md:text-2xl text-primary font-semibold">
            Front-End Developer & Data Analyst
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Saya adalah seorang developer yang passionate dalam membangun aplikasi web yang efisien dan berbasis data. Dengan keahlian dalam teknis frontend dan analisis data, saya siap membawa bisnis Anda ke level berikutnya.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#111827] transition-all duration-200 font-semibold flex items-center justify-center gap-2 group"
          >
            Mulai Proyek
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#experience"
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors duration-200 font-semibold"
          >
            Lihat Pengalaman
          </a>
        </div>

        {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-foreground rounded-full animate-pulse" />
            </div>
          </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 opacity-10 z-0">
        <img src="/images/tech-accent-1.png" alt="" className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 left-10 w-24 h-24 opacity-5 z-0">
        <img src="/images/tech-accent-2.png" alt="" className="w-full h-full" />
      </div>
    </section>
  );
}
