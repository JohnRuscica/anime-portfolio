import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from '../contexts/TranslationContext';

/**
 * ABOUT SECTION COMPONENT
 * =======================
 * Personal introduction section featuring:
 * - Personal story and background narrative
 * - Fun facts list with personality touches
 * - Technical skills showcase with progress bars
 * - Currently learning section to show growth mindset
 * - Staggered scroll animations for each subsection
 * - Multi-language support for all text content
 * - Responsive layout with left/right content split
 */

const About: React.FC = () => {
  // Get translation function from context
  const { t } = useTranslation();
  
  /**
   * ANIMATION VISIBILITY STATE
   * ==========================
   * Tracks visibility of each section for staggered animation effects
   * Each section animates in independently when scrolled into view
   */
  const [isVisible, setIsVisible] = useState({
    header: false,    // Section title and introduction
    story: false,     // Personal story card
    facts: false,     // Fun facts list
    skills: false,    // Technical skills grid
    learning: false,  // Currently learning section
  });

  // Refs for each animated section - used by Intersection Observer
  const headerRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const factsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const learningRef = useRef<HTMLDivElement>(null);

  /**
   * SCROLL ANIMATION SETUP
   * ======================
   * Uses Intersection Observer API for performance-optimized animations
   * Each section animates independently when 20% visible
   */
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,                    // Trigger when 20% of element is visible
      rootMargin: '0px 0px -50px 0px'    // Trigger slightly before element fully enters viewport
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        const sectionName = target.dataset.section as keyof typeof isVisible;
        
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [sectionName]: true }));
        } else {
          setIsVisible(prev => ({ ...prev, [sectionName]: false }));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    if (headerRef.current) observer.observe(headerRef.current);
    if (storyRef.current) observer.observe(storyRef.current);
    if (factsRef.current) observer.observe(factsRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (learningRef.current) observer.observe(learningRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div 
          ref={headerRef}
          data-section="header"
          className={`about-header scroll-animate ${isVisible.header ? 'animate-in' : 'animate-out'}`}
        >
          <h2 className="section-title">
            <span className="section-hash">#</span>
            {t('about.title')}
          </h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          {/* Left Side - Personal Story */}
          <div className="about-story">
            <div 
              ref={storyRef}
              data-section="story"
              className={`story-card scroll-animate ${isVisible.story ? 'animate-in' : 'animate-out'}`}
            >
              <h3>{t('about.story.title')}</h3>
              <p>
                {t('about.story.content')}
              </p>
            </div>

            {/* Fun Facts */}
            <div 
              ref={factsRef}
              data-section="facts"
              className={`fun-facts scroll-animate ${isVisible.facts ? 'animate-in' : 'animate-out'}`}
            >
              <h3>{t('about.facts.title')}</h3>
              <ul className="facts-list">
                <li>{t('about.facts.coffee')}: 10...jk that's insane</li>
                <li>{t('about.facts.coding')}</li>
                <li>{t('about.facts.gym')}</li>
                <li>{t('about.facts.anime')}</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Skills & Tech */}
          <div className="about-skills">
            <div 
              ref={skillsRef}
              data-section="skills"
              className={`skills-card scroll-animate ${isVisible.skills ? 'animate-in' : 'animate-out'}`}
            >
              <h3>{t('about.skills.title')}</h3>
              
              {/* Frontend Skills */}
              <div className="skill-category">
                <h4>Frontend</h4>
                <div className="skills-grid">
                  <div className="skill-item">
                    <span className="skill-name">React</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">TypeScript</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">CSS/SCSS</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">JavaScript</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '88%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend Skills */}
              <div className="skill-category">
                <h4>Backend</h4>
                <div className="skills-grid">
                  <div className="skill-item">
                    <span className="skill-name">Node.js</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">Python</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className="skill-item">
                    <span className="skill-name">IGDB Twitch</span>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools */}
              <div className="skill-category">
                <h4>Tools & Others</h4>
                <div className="tools-list">
                  <span className="tool-tag">Git</span>
                  <span className="tool-tag">VS Code</span>
                  <span className="tool-tag">Figma</span>
                  <span className="tool-tag">Npm</span>
                  <span className="tool-tag">JSON Data Handling</span>
                   <span className="tool-tag">CRON Scheduling</span>
                    <span className="tool-tag">Jira</span>
                     <span className="tool-tag">CRUD Operations</span>
                </div>
              </div>
            </div>

            {/* Currently Learning */}
            <div 
              ref={learningRef}
              data-section="learning"
              className={`learning-card scroll-animate ${isVisible.learning ? 'animate-in' : 'animate-out'}`}
            >
              <h3>{t('about.learning.title')}</h3>
              <div className="learning-items">
                <div className="learning-item">
                  <span className="learning-icon">🚀</span>
                  <div className="learning-info">
                    <h4>Next.js</h4>
                    <p>Advanced React framework for production</p>
                  </div>
                </div>
                <div className="learning-item">
                  <span className="learning-icon">🧠</span>
                  <div className="learning-info">
                    <h4>SQL</h4>
                    <p>Mastering database queries and management</p>
                  </div>
                </div>
                <div className="learning-item">
                  <span className="learning-icon">📱</span>
                  <div className="learning-info">
                    <h4>React Native</h4>
                    <p>Mobile app development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;