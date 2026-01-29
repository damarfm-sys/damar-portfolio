/**
 * Skills Section Component
 * Modern Minimalist Design - Skill badges with proficiency indicators
 * Features: Skill categories, progress indicators, and visual hierarchy
 */

import { Code2, Database, Palette, BarChart3 } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      skills: [
        { name: 'React', proficiency: 85 },
        { name: 'TypeScript', proficiency: 80 },
        { name: 'Tailwind CSS', proficiency: 90 },
        { name: 'HTML/CSS', proficiency: 95 },
        { name: 'JavaScript', proficiency: 90 },
      ],
    },
    {
      title: 'Data Analysis',
      icon: BarChart3,
      skills: [
        { name: 'Data Visualization', proficiency: 85 },
        { name: 'Excel Analysis', proficiency: 90 },
        { name: 'Data Interpretation', proficiency: 85 },
        { name: 'Business Intelligence', proficiency: 75 },
      ],
    },
    {
      title: 'Tools & Software',
      icon: Palette,
      skills: [
        { name: 'Microsoft Word', proficiency: 95 },
        { name: 'Microsoft Excel', proficiency: 95 },
        { name: 'Microsoft PowerPoint', proficiency: 90 },
        { name: 'Git/GitHub', proficiency: 85 },
      ],
    },
    {
      title: 'Languages',
      icon: Database,
      skills: [
        { name: 'Bahasa Indonesia', proficiency: 100 },
        { name: 'English', proficiency: 70 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="container space-y-16">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-heading-lg text-foreground">Keahlian & Kompetensi</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Kumpulan keahlian teknis dan soft skills yang saya kuasai untuk mendukung kesuksesan proyek.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={categoryIndex}
                className="bg-muted/50 rounded-lg p-8 border border-border hover:shadow-lg transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                  <h3 className="text-heading-md text-foreground">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm font-semibold text-primary">{skill.proficiency}%</span>
                      </div>
                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-500"
                          style={{ width: `${skill.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Additional Info */}
        <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
          <h3 className="text-heading-md text-foreground mb-4">Fokus Pengembangan</h3>
          <p className="text-body text-foreground/80 mb-4">
            Saya terus belajar dan mengembangkan keahlian dalam teknologi terbaru, khususnya di bidang frontend development dan data analytics. Saya percaya bahwa pembelajaran berkelanjutan adalah kunci untuk tetap relevan di industri teknologi yang dinamis.
          </p>
          <div className="flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Data Visualization', 'Web Performance'].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
