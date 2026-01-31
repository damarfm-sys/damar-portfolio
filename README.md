# Damar Fatah Mubin - Portfolio Website

Professional portfolio website for Damar Fatah Mubin, Front-End Developer & Data Analyst.

## 🌐 Live Demo

Visit the live website: [damarfm-sys.github.io/damar-portfolio](https://damarfm-sys.github.io/damar-portfolio)

## ✨ Features

- **Modern Minimalist Design** - Clean and professional monochrome theme
- **Dark Mode Toggle** - Switch between light and dark themes
- **Responsive Design** - Fully responsive on desktop, tablet, and mobile devices
- **Smooth Scrolling** - Smooth navigation between sections
- **Contact Form** - Integrated with FormSubmit for email delivery
- **SEO Optimized** - Meta tags, structured data (JSON-LD), robots.txt, and sitemap.xml
- **Download CV** - Easy CV download button
- **Social Media Links** - LinkedIn, GitHub, and Instagram profiles
- **Experience Timeline** - Visual timeline of work experience and education
- **Skills Showcase** - Display of technical skills with progress indicators

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Form Handling**: FormSubmit
- **Notifications**: Sonner
- **Routing**: Wouter
- **Build Tool**: Vite

## 📁 Project Structure

```
portfolio-damar/
├── client/
│   ├── public/
│   │   ├── images/
│   │   ├── CV.pdf
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── SkillsSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ScrollToTop.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── .github/
│   └── workflows/
│       └── deploy.yml
├── vite.config.ts
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/damarfm-sys/damar-portfolio.git
cd damar-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm run build
```

The build output will be in the `dist` directory.

## 📝 Configuration

### Contact Form

The contact form is configured to send emails to `damarfm49@gmail.com` via FormSubmit. To change the email:

1. Open `client/src/components/ContactSection.tsx`
2. Update the email in the fetch URL:
```typescript
const response = await fetch('https://formsubmit.co/your-email@example.com', {
```

### GitHub Pages Base Path

The site is configured to deploy to `https://damarfm-sys.github.io/damar-portfolio/`. The base path is set in `vite.config.ts`:

```typescript
base: process.env.NODE_ENV === 'production' ? '/damar-portfolio/' : '/',
```

## 🔧 Customization

### Colors & Theme

Edit `client/src/index.css` to customize the color palette. The current theme uses:
- Primary: Dark Gray (#1F2937)
- Background: White/Dark based on theme
- Accent: Grayscale gradient

### Content

Update the following files to customize content:
- `client/src/components/HeroSection.tsx` - Hero section text
- `client/src/components/AboutSection.tsx` - About section
- `client/src/components/ExperienceSection.tsx` - Work experience and education
- `client/src/components/SkillsSection.tsx` - Skills list

## 📦 Deployment

### GitHub Pages (Automatic)

The site automatically deploys to GitHub Pages when you push to the `main` branch. The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles the build and deployment.

### Manual Deployment

```bash
pnpm run build
# Push the dist folder to GitHub Pages
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Damar Fatah Mubin**
- Email: damarfm49@gmail.com
- LinkedIn: [damar-fatah-m](https://id.linkedin.com/in/damar-fatah-m-b37750299)
- GitHub: [@damarfm-sys](https://github.com/damarfm-sys)
- Instagram: [@jdnu4vr](https://www.instagram.com/jdnu4vr/)

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

## 📞 Support

For questions or issues, please open an issue on GitHub or contact me directly via email.

---

Made with ❤️ by Damar Fatah Mubin
