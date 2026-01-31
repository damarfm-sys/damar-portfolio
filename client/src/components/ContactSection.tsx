/**
 * Contact Section Component
 * Modern Minimalist Design - Contact form and information
 * Features: Contact form with FormSubmit integration, social links, and call-to-action
 */

import { Mail, Phone, MapPin, Send, Linkedin, Github, Instagram } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Submit to FormSubmit
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_next', window.location.href);

      const response = await fetch('https://formsubmit.co/damarfm49@gmail.com', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        toast.success('Pesan Anda telah terkirim! Terima kasih telah menghubungi saya.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Terjadi kesalahan. Silakan coba lagi nanti.');
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'damarfm49@gmail.com',
      href: 'mailto:damarfm49@gmail.com',
    },
    {
      icon: Phone,
      label: 'Telepon',
      value: '0895323667979',
      href: 'tel:0895323667979',
    },
    {
      icon: MapPin,
      label: 'Lokasi',
      value: 'Jakarta, Indonesia',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 dark:bg-[#1F2937]/50">
      <div className="container space-y-16">
        {/* Section Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-heading-lg text-foreground">Hubungi Saya</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-heading-md text-foreground">Informasi Kontak</h3>

            {/* Contact Items */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-white dark:hover:bg-[#2D3748] transition-colors duration-200"
                  >
                    <div className="flex-shrink-0">
                      <Icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                      <p className="text-foreground/70 hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-border">
              <h4 className="font-semibold text-foreground mb-4">Terhubung dengan Saya</h4>
              <div className="flex gap-4">
                <a
                  href="https://id.linkedin.com/in/damar-fatah-m-b37750299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-foreground text-white rounded-lg flex items-center justify-center hover:bg-[#111827] dark:hover:bg-[#D1D5DB] transition-colors duration-200"
                  title="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/damarfm-sys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-foreground text-white rounded-lg flex items-center justify-center hover:bg-[#111827] dark:hover:bg-[#D1D5DB] transition-colors duration-200"
                  title="GitHub"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/jdnu4vr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-foreground text-white rounded-lg flex items-center justify-center hover:bg-[#111827] dark:hover:bg-[#D1D5DB] transition-colors duration-200"
                  title="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background dark:bg-[#1F2937] rounded-lg p-8 border border-border shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Nama Anda"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="email@example.com"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subjek
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Subjek pesan"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-foreground text-white rounded-lg hover:bg-[#111827] dark:hover:bg-[#D1D5DB] transition-colors duration-200 font-semibold flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
