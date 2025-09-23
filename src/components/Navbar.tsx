import React, { useState } from 'react';
import { useTranslation, languages } from '../contexts/TranslationContext';

/**
 * NAVIGATION BAR COMPONENT
 * ========================
 * A responsive navigation bar with glassmorphism styling and multi-language support
 * 
 * Features:
 * - Mobile-responsive with hamburger menu
 * - Language selector with flag icons
 * - Smooth scroll navigation to page sections
 * - Translation support for all navigation items
 * - Glassmorphism visual effects
 */

const Navbar: React.FC = () => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Get translation functions and current language from context
  const { language, setLanguage, t } = useTranslation();

  // Navigation items configuration with translation keys
  // Each item has a nameKey (for translation) and href (for navigation)
  const navItems = [
    { nameKey: 'nav.home', href: '#home' },
    { nameKey: 'nav.projects', href: '#projects' },
    { nameKey: 'nav.about', href: '#about' },
  ];

  /**
   * Handle language change from dropdown selector
   * Updates the global language state via context
   */
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO SECTION - Brand identity with icon and text */}
        <div className="nav-logo">
          <img 
            src="/bluecog.png" 
            alt="Blue Cog" 
            className="logo-icon-img"
          />
          <span className="logo-text">Ice</span>
        </div>

        {/* DESKTOP NAVIGATION MENU - Hidden on mobile devices */}
        <div className="nav-menu">
          {/* Dynamic navigation links generated from navItems array */}
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}      // Smooth scroll to section
              className="nav-link"
            >
              <span className="nav-hash"></span>
              {t(item.nameKey)}     {/* Translated navigation text */}
            </a>
          ))}
          
          {/* LANGUAGE SELECTOR DROPDOWN */}
          {/* Allows users to switch between supported languages */}
          <select 
            className="language-selector" 
            value={language}                    // Current selected language
            onChange={handleLanguageChange}    // Update language on change
          >
            {/* Generate dropdown options from languages array */}
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.name}    {/* Flag emoji + language name */}
              </option>
            ))}
          </select>
        </div>

        {/* MOBILE HAMBURGER MENU BUTTON - Only visible on mobile */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}  // Toggle mobile menu
          aria-label="Toggle mobile menu"              // Accessibility
        >
          {/* Animated hamburger icon with three lines */}
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>  {/* Top line */}
            <span></span>  {/* Middle line */}
            <span></span>  {/* Bottom line */}
          </div>
        </button>
      </div>

      {/* MOBILE NAVIGATION MENU - Slides in from top when active */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        {/* Mobile navigation links - same items as desktop but styled for mobile */}
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}                      // Navigate to section
            className="mobile-nav-link"
            onClick={() => setIsMenuOpen(false)}  // Close menu after click
          >
            <span className="nav-hash">#</span>   {/* Visual hash symbol */}
            {t(item.nameKey)}                     {/* Translated link text */}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;