import { useState, useRef } from 'react'
import { TranslationProvider } from './contexts/TranslationContext'
import Navbar from './components/Navbar'
import SocialSidebar from './components/SocialSidebar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import MobileFooter from './components/MobileFooter'

/**
 * MAIN APPLICATION COMPONENT
 * ==========================
 * Root component that orchestrates the entire portfolio application
 * 
 * Key Features:
 * - Multi-language support via TranslationProvider wrapper
 * - Cyberpunk-themed background with animated elements
 * - Contact interaction system with tooltip feedback
 * - Responsive layout with fixed navigation and social sidebar
 * - Section-based single page application (SPA) design
 * 
 * Architecture:
 * - Uses React Context for global translation state
 * - Component-based architecture for maintainability
 * - CSS-based animations with JavaScript interaction triggers
 * - Mobile-first responsive design approach
 */

function App() {
  // State to control the visibility of contact tooltips
  // Triggered when user clicks the Hero section contact button
  const [showTooltip, setShowTooltip] = useState(false);
  const mobileFooterRef = useRef(null);

  /**
   * CYBERPUNK BACKGROUND EFFECT
   * ===========================
   * Generates randomly positioned floating dots for visual ambiance
   * Creates a dynamic, tech-inspired background effect
   */
  const generateDots = () => {
    const dots = [];
    for (let i = 0; i < 50; i++) {
      dots.push({
        id: i,                          // Unique identifier for React keys
        left: Math.random() * 100,      // Random horizontal position (0-100%)
        top: Math.random() * 100,       // Random vertical position (0-100%)
        delay: Math.random() * 6,       // Random animation delay (0-6 seconds)
      });
    }
    return dots;
  };

  const dots = generateDots();

  return (
    <TranslationProvider>
      <Navbar />
      <SocialSidebar showTooltip={showTooltip} />
      <div className="cyber-background">
        <div className="grid-pattern"></div>
        <div className="floating-dots">
          {dots.map(dot => (
            <div
              key={dot.id}
              className="dot"
              style={{
                left: `${dot.left}%`,
                top: `${dot.top}%`,
                animationDelay: `${dot.delay}s`,
              }}
            />
          ))}
        </div>
      </div>
      <Hero onContactClick={() => {
        // Show tooltip
        setShowTooltip(true);
        setTimeout(() => setShowTooltip(false), 5000);
        // On mobile, scroll to footer
        if (window.innerWidth <= 768 && mobileFooterRef.current) {
          (mobileFooterRef.current as HTMLElement).scrollIntoView({ behavior: 'smooth' });
        }
      }} />
      <About />
      <Projects />
      <MobileFooter ref={mobileFooterRef} showTooltip={showTooltip} />
    </TranslationProvider>
  )
}

export default App