# 🌟 Anime Portfolio - Cyberpunk Edition

**🚀 LIVE PORTFOLIO:** [View Live Site](https://my-portfolio-delta-puce-7x6g3ll9h8.vercel.app/)

**📂 GITHUB REPOSITORY:** [Source Code](https://github.com/JohnRuscica/anime-portfolio)

<!-- Last updated: Auto-deploy test -->

A modern, responsive portfolio website with a cyberpunk aesthetic and comprehensive multi-language support. Built with React, TypeScript, and Vite for optimal performance and developer experience.

![Portfolio Preview](https://my-portfolio-delta-puce-7x6g3ll9h8.vercel.app/preview-image.png)

## ✨ Features

### 🌐 **Multi-Language Support**
- **8+ Languages**: English, Japanese, Spanish, French, Korean, German, Italian, Portuguese
- **Real-time Translation**: Instant language switching without page reload
- **Comprehensive Coverage**: All UI text, project descriptions, and content translated
- **Fallback System**: Graceful degradation to English for missing translations

### 🎨 **Modern Design & Animations**
- **Cyberpunk Aesthetic**: Glassmorphism effects with neon accents
- **Scroll Animations**: Performance-optimized using Intersection Observer API
- **Responsive Design**: Mobile-first approach with seamless desktop scaling
- **Interactive Elements**: Hover effects, animated backgrounds, and smooth transitions

### 🚀 **Technical Excellence**
- **React 18**: Latest React with modern hooks and patterns
- **TypeScript**: Full type safety and enhanced developer experience
- **Vite**: Lightning-fast build tool with hot module replacement
- **Performance Optimized**: Lazy loading, efficient animations, and minimal bundle size
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation

### 📱 **Responsive Components**
- **Smart Navigation**: Collapsible mobile menu with language selector
- **Project Showcase**: Filterable project grid with technology tags
- **Contact System**: Interactive tooltip system with social links
- **About Section**: Skills visualization with animated progress bars

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern UI library with hooks and context
- **TypeScript** - Type safety and enhanced development experience
- **Vite** - Next-generation build tool for fast development

### **Styling & Animation**
- **CSS3** - Custom animations and glassmorphism effects
- **CSS Grid/Flexbox** - Modern layout systems
- **Intersection Observer API** - Performance-optimized scroll animations

### **Internationalization**
- **React Context API** - Global state management for translations
- **Custom Translation Hook** - Type-safe translation system
- **Dynamic Language Switching** - Runtime language changes

### **Development Tools**
- **ESLint** - Code quality and consistency
- **PostCSS** - CSS processing and optimization
- **Tailwind Config** - Utility-first CSS configuration

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/JohnRuscica/anime-portfolio.git
   cd anime-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## 📁 Project Structure

```
anime-portfolio/
├── public/                 # Static assets
│   ├── bluecog.png        # Logo icon
│   ├── nagi.png           # Hero character image
│   └── *.gif              # Project preview images
├── src/
│   ├── components/        # React components
│   │   ├── Navbar.tsx     # Navigation with language selector
│   │   ├── Hero.tsx       # Landing section with animations
│   │   ├── About.tsx      # Personal story and skills
│   │   ├── Projects.tsx   # Project showcase gallery
│   │   └── SocialSidebar.tsx # Contact links and tooltips
│   ├── contexts/          # React Context providers
│   │   └── TranslationContext.tsx # i18n system
│   ├── assets/            # Component-specific assets
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles and animations
│   └── vite-env.d.ts      # TypeScript environment types
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite build configuration
└── README.md              # Project documentation
```

## 🌐 Translation System

### Architecture
The portfolio uses a custom React Context-based translation system that provides:

- **Type-safe translations** with TypeScript interfaces
- **Nested translation keys** (e.g., `nav.home`, `hero.greeting`)
- **Fallback mechanism** defaulting to English
- **Runtime language switching** without page refresh

### Adding New Languages

1. **Add language configuration** in `TranslationContext.tsx`:
   ```typescript
   { code: 'fr', name: 'Français', flag: '🇫🇷' }
   ```

2. **Add translation object**:
   ```typescript
   fr: {
     'nav.home': 'Accueil',
     'nav.projects': 'Projets',
     // ... more translations
   }
   ```

3. **Use in components**:
   ```typescript
   const { t } = useTranslation();
   return <h1>{t('nav.home')}</h1>;
   ```

## 🎯 Key Components

### **TranslationContext**
Global state management for multi-language support with automatic fallback system.

### **Navbar**
Responsive navigation with mobile hamburger menu and integrated language selector.

### **Hero Section**
Landing area with animated character, personal introduction, and call-to-action.

### **Projects Showcase**
Interactive gallery with filtering, technology tags, and external links.

### **About Section**
Personal story, fun facts, technical skills, and learning journey.

## 🎨 Customization

### **Themes & Colors**
Modify CSS custom properties in `index.css`:
```css
:root {
  --primary-color: #00d4ff;
  --secondary-color: #ff6b9d;
  --background-dark: #0a0f1c;
}
```

### **Adding Projects**
Update the projects array in `Projects.tsx`:
```typescript
{
  id: 4,
  title: t('project.newproject.title'),
  description: t('project.newproject.description'),
  technologies: ["React", "Node.js"],
  githubUrl: "https://github.com/...",
  category: "web",
  status: "completed"
}
```

### **Background Effects**
Adjust floating dots and animations in `App.tsx`:
```typescript
const generateDots = () => {
  const dots = [];
  for (let i = 0; i < 50; i++) { // Change quantity
    // Customize positioning and timing
  }
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Stacked layout, hamburger menu
- **Tablet**: 768px - 1024px - Adjusted spacing and sizing  
- **Desktop**: > 1024px - Full layout with sidebar

## ⚡ Performance Optimizations

- **Intersection Observer**: Efficient scroll-based animations
- **Code Splitting**: Component-based architecture for tree shaking
- **Image Optimization**: WebP format with fallbacks
- **CSS Optimization**: PostCSS processing and minification
- **Bundle Analysis**: Vite's built-in optimization

## 🔧 Development Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint checks
```

## 🌟 Browser Support

- **Modern Browsers**: Chrome 80+, Firefox 78+, Safari 14+, Edge 80+
- **Mobile**: iOS Safari 14+, Chrome Mobile 80+
- **Features**: ES2020, CSS Grid, Intersection Observer API

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **GitHub**: [@JohnRuscica](https://github.com/JohnRuscica)
- **LinkedIn**: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- **Portfolio**: [Your Portfolio](https://yourportfolio.com)

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Vite Team** - For the lightning-fast build tool
- **Anime Community** - For the inspiration and aesthetic
- **Open Source** - For making development accessible to everyone

---

**Built with ❤️ and lots of ☕ by John**

*"If you never accept the frustration of losing, you'll never grow" - Seishiro Nagi*