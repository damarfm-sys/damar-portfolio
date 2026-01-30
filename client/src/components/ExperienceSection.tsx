/**
 * Experience Section Component
 * Modern Minimalist Design - Timeline layout for work experience and education
 * Features: Vertical timeline with cards and decorative connectors
 */

import { Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      type: 'work',
      title: 'Crew Store',
      company: 'PT. Fajar Mitra Indah (FamilyMart)',
      location: 'Jakarta Pusat',
      startDate: 'Mei 2022',
      endDate: 'Juli 2025',
      description: 'Bekerja sebagai Crew Store di FamilyMart selama lebih dari 3 tahun dengan tanggung jawab penuh dalam operasional toko, customer service, dan inventory management.',
      icon: Briefcase,
    },
  ];

  const education = [
    {
      type: 'education',
      title: 'Lulusan Teknik Kendaaraan Ringan',
      company: 'SMKN 54 JAKARTA',
      location: 'Jakarta Pusat',
      startDate: 'Jan 2018',
      endDate: 'Mei 2021',
      description: 'Menyelesaikan pendidikan menengah kejuruan dengan fokus pada teknik otomotif dan keterampilan praktis industri.',
      icon: GraduationCap,
    },
  ];

  const allItems = [...experiences, ...education];

  return (
    <section id="experience" className="py-20 md:py-32 bg-muted/30 dark:bg-[#1F2937]/50">
      <div className="container space-y-16">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-heading-lg text-foreground">Pengalaman & Pendidikan</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Perjalanan karir dan pendidikan yang membentuk keahlian saya di industri teknologi.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-foreground via-foreground to-secondary" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {allItems.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="relative"
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Content (alternates) */}
                    <div className={isEven ? 'order-1' : 'order-2'}>
                      {isEven && (
                        <div className="text-right space-y-2">
                          <div className="text-sm font-semibold text-foreground">
                            {item.startDate} - {item.endDate}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Center Dot */}
                    <div className={isEven ? 'order-2' : 'order-1'}>
                      <div className="flex justify-center">
                        <div className="w-12 h-12 bg-white border-4 border-foreground rounded-full flex items-center justify-center shadow-lg">
                          <Icon className="w-6 h-6 text-foreground" />
                        </div>
                      </div>
                    </div>

                    {/* Right Content (alternates) */}
                    <div className={isEven ? 'order-3' : 'order-1'}>
                      {!isEven && (
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-foreground">
                            {item.startDate} - {item.endDate}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className={`md:${isEven ? 'col-start-1' : 'col-start-2'} bg-background dark:bg-[#1F2937] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-border`}>
                    <div className="flex items-center gap-3 md:hidden mb-4">
                      <Icon className="w-5 h-5 text-foreground flex-shrink-0 mt-1" />
                      <div className="text-xs font-semibold text-foreground">
                        {item.startDate} - {item.endDate}
                      </div>
                    </div>
                    <h3 className="text-heading-md text-foreground mb-1">{item.title}</h3>
                    <p className="text-foreground font-semibold mb-2">{item.company}</p>
                    <p className="text-sm text-foreground/60 mb-3">{item.location}</p>
                    <p className="text-body text-foreground/80">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
