import { useState } from 'react'
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
    <TranslationProvider> {/* Wraps entire app to provide translation context */}
      {/* FIXED NAVIGATION BAR - Stays at top across all sections */}
      <Navbar />
      
      {/* SOCIAL SIDEBAR - Fixed position with contact links and tooltip */}
      <SocialSidebar showTooltip={showTooltip} />
      
      {/* CYBERPUNK BACKGROUND EFFECTS - Animated visual elements */}
      <div className="cyber-background">
        {/* Animated Grid Pattern - Creates the "digital matrix" effect */}
        <div className="grid-pattern"></div>
        
        {/* Floating Dots Animation - Randomly positioned glowing particles */}
        <div className="floating-dots">
          {dots.map(dot => (
            <div
              key={dot.id}                      // Unique key for React rendering
              className="dot"
              style={{
                left: `${dot.left}%`,           // CSS custom property for position
                top: `${dot.top}%`,             // CSS custom property for position
                animationDelay: `${dot.delay}s`, // Stagger animation timing
              }}
            />
          ))}
        </div>
      </div>

      {/* MAIN CONTENT SECTIONS - Vertically stacked page sections */}
      
      {/* HERO SECTION - Landing area with introduction and contact CTA */}
      <Hero onContactClick={() => {
        setShowTooltip(true);                    // Show contact tooltip
        setTimeout(() => setShowTooltip(false), 5000); // Hide after 5 seconds
      }} />
      
      {/* ABOUT SECTION - Personal background, skills, and fun facts */}
      <About />
      
      {/* PROJECTS SECTION - Portfolio showcase with filtering */}
      <Projects />
      {/* Mobile Footer for social links */}
      <MobileFooter />
    </TranslationProvider>
  )
}

export default App