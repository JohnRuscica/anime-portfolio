
// This component is fully internationalized. All user-facing text is rendered using the translation system via useTranslation().
import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/TranslationContext';

/**
 * HERO SECTION COMPONENT
 * ======================
 * The main landing section of the portfolio featuring:
 * - Personal introduction with animated text
 * - Anime character illustration
 * - Scroll-triggered animations using Intersection Observer API
 * - Multi-language support for all text content
 * - Interactive contact button with callback
 * - Inspirational quote section
 */

interface HeroProps {
  onContactClick?: () => void;  // Optional callback when contact button is clicked
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  // State to track which elements are visible for animation purposes
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  // Ref to the hero section for scroll observation
  const heroRef = useRef<HTMLElement>(null);
  
  // Get translation function from context
  const { t } = useTranslation();

  /**
   * SCROLL ANIMATION SYSTEM
   * =======================
   * Uses Intersection Observer API for performance-optimized scroll animations
   * Tracks which elements are in viewport and applies CSS classes accordingly
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Get the unique identifier for the animated element
          const elementId = entry.target.getAttribute('data-animate-id');
          if (elementId) {
            if (entry.isIntersecting) {
              // Element entered viewport - add to visible set for animation
              setVisibleElements(prev => new Set([...prev, elementId]));
            } else {
              // Element left viewport - remove from visible set
              setVisibleElements(prev => {
                const newSet = new Set(prev);
                newSet.delete(elementId);
                return newSet;
              });
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (heroRef.current) {
      const elements = heroRef.current.querySelectorAll('[data-animate-id]');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
  };
  return (
    <section ref={heroRef} id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Content */}
        <div 
          className={`hero-content scroll-animate ${visibleElements.has('hero-content') ? 'animate-in' : 'animate-out'}`}
          data-animate-id="hero-content"
        >
          <h1 className="hero-title">
            <span className="hero-greeting">{t('hero.greeting')}</span>
            <span className="hero-name">{t('hero.name')}</span>
            <span className="hero-role">{t('hero.role')}</span>
          </h1>
          
          <p className="hero-description">
            {t('hero.description')}
          </p>
        </div>

        {/* Right Content - Character Image */}
        <div 
          className={`hero-character scroll-animate ${visibleElements.has('hero-character') ? 'animate-in' : 'animate-out'}`}
          data-animate-id="hero-character"
        >
          <div className="character-container">
            {/* Temporary CSS Character - Shows while you save your PNG image */}
         {/*}   <div className="anime-character">
              <div className="character-head">
                <div className="character-hair"></div>
                <div className="character-eyes">
                  <div className="eye left-eye"></div>
                  <div className="eye right-eye"></div>
                </div>
              </div>
              <div className="character-body">
                <div className="character-torso"></div>
                <div className="character-arms">
                  <div className="arm left-arm"></div>
                  <div className="arm right-arm"></div>
                </div>
              </div>
            </div>
            */}
           
            <div className="character-image">
              <img 
                src="/nagi.png" 
                alt="Anime Character on Skateboard" 
                className="anime-character-img"
              />
            </div>
            
            
            {/* Floating Elements */}
            <div className="floating-elements">
              <div className="code-symbol">{'{ }'}</div>
              <div className="code-symbol">{'< />'}</div>
              <div className="code-symbol">{'=>'}</div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="hero-decorations">
            <div className="deco-square deco-1"></div>
            <div className="deco-square deco-2"></div>
            <div className="deco-circle"></div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div 
        className={`hero-quote scroll-animate ${visibleElements.has('hero-quote') ? 'animate-in' : 'animate-out'}`}
        data-animate-id="hero-quote"
      >
        <div className="quote-container">
          <blockquote>
            {t('hero.quote')}
          </blockquote>
          <cite>{t('hero.quote.author')}</cite>
          
          {/* Contact Button */}
          <button className="hero-cta quote-cta" onClick={handleContactClick}>
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;