import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

interface SocialSidebarProps {
  showTooltip?: boolean;
}

const SocialSidebar: React.FC<SocialSidebarProps> = ({ showTooltip = false }) => {
  // Safely access translation context with error handling
  let t: (key: string) => string;
  try {
    const context = useTranslation();
    t = context.t;
  } catch (error) {
    // Fallback function if context is not available
    t = (key: string) => {
      const fallbacks: Record<string, string> = {
        'contact.tooltip': '👈 Contact me here!'
      };
      return fallbacks[key] || key;
    };
  }
  return (
    <div className="social-sidebar">
      {/* Vertical line */}
      <div className="social-line"></div>
      
      {/* Social icons container */}
      <div className="social-icons">
        {/* LinkedIn */}
        <a href="https://linkedin.com/in/john-ruscica" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path 
              d="M8.8 10.4C10.08 10.4 11.12 9.36 11.12 8.08C11.12 6.8 10.08 5.76 8.8 5.76C7.52 5.76 6.48 6.8 6.48 8.08C6.48 9.36 7.52 10.4 8.8 10.4ZM6.88 26.24H10.72V12.16H6.88V26.24ZM17.36 12.16H13.6V26.24H17.36V18.88C17.36 15.68 21.76 15.36 21.76 18.88V26.24H25.52V17.44C25.52 11.84 19.04 12.08 17.36 14.56V12.16Z" 
              fill="currentColor"
            />
          </svg>
        </a>
        
        {/* GitHub */}
<a href="https://github.com/JohnRuscica" className="social-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
    <path
      fill="currentColor"
      d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.292 3.438 9.787 8.207 11.387.6.111.793-.261.793-.58
      0-.287-.01-1.046-.016-2.052-3.338.726-4.042-1.609-4.042-1.609-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73
      1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.304.762-1.604-2.665-.304-5.467-1.332-5.467-5.931
      0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.49 11.49 0 0 1 3.004-.404c1.019.005
      2.047.138 3.004.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221
      0 4.61-2.807 5.624-5.479 5.921.43.371.823 1.102.823 2.222
      0 1.604-.015 2.896-.015 3.286 0 .322.192.696.801.577
      C20.565 22.08 24 17.586 24 12.297 24 5.67 18.627.297 12 .297z"
    />
  </svg>
</a>

      </div>
        
        {/* Floating Contact Tooltip - Only show when showTooltip is true */}
        {showTooltip && (
        <div className="contact-tooltip">
          <div className="tooltip-pointer">
            <div className="tooltip-arrow"></div>
            <div className="tooltip-message">
              <div className="tooltip-bubble">
                <p>{t('contact.tooltip')}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialSidebar;