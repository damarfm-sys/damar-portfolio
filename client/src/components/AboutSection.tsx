/**
 * About Section Component
 * Modern Minimalist Design - Clean layout with profile information
 * Features: Profile image, bio, and key highlights
 */

import { Code2, BarChart3, Zap } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: 'Front-End Development',
      description: 'Spesialisasi dalam membangun interface yang responsif dan user-friendly dengan teknologi terkini.',
    },
    {
      icon: BarChart3,
      title: 'Data Analysis',
      description: 'Kemampuan menganalisis data dan mengubahnya menjadi insights yang actionable untuk bisnis.',
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Pendekatan sistematis dalam menyelesaikan masalah teknis dengan solusi yang efisien.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container space-y-16">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-heading-lg text-foreground">Tentang Saya</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Lulusan SMK Teknik Kendaaraan Ringan dengan pengalaman praktis di industri retail dan passion untuk teknologi.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Profile Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-heading-md text-foreground">Profil Singkat</h3>
              <p className="text-body text-foreground/80">
                Saya Damar Fatah M, biasa dipanggil Damar, seorang lulusan sekolah (SMK) tahun 2021 dari Jurusan Teknik Kendaaraan Ringan. Saya memiliki minat dalam bidang Teknologi dan Finance, dan juga memiliki keahlian menganalisis data.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-heading-md text-foreground">Informasi Kontak</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-primary min-w-fit">Email:</span>
                  <a href="mailto:damarfm49@gmail.com" className="text-primary hover:underline">
                    damarfm49@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-primary min-w-fit">Telepon:</span>
                  <a href="tel:0895323667979" className="text-primary hover:underline">
                    0895323667979
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-primary min-w-fit">Lokasi:</span>
                  <span className="text-foreground/80">Jln. Kampung Rawa Selatan 5, 10550 Jakarta</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-muted rounded-lg hover:shadow-lg transition-shadow duration-300 border border-border"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">3+</div>
            <p className="text-sm text-foreground/70">Tahun Pengalaman</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">5+</div>
            <p className="text-sm text-foreground/70">Proyek Selesai</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">8+</div>
            <p className="text-sm text-foreground/70">Keahlian Teknis</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">100%</div>
            <p className="text-sm text-foreground/70">Dedikasi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
