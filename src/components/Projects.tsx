import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/TranslationContext';

/**
 * PROJECTS SHOWCASE COMPONENT
 * ===========================
 * Interactive project gallery with the following features:
 * - Filterable project categories (All, Anime, Web Dev, Games, Mobile)
 * - Scroll-triggered animations using Intersection Observer
 * - Multi-language support for project titles and descriptions
 * - Project status indicators (completed, in-progress, planned)
 * - Technology stack tags for each project
 * - External links to GitHub repos and live demos
 * - Responsive grid layout with hover effects
 */

// TypeScript interface defining the structure of a project object
interface Project {
  id: number;                                           // Unique identifier
  title: string;                                        // Project name (translated)
  description: string;                                  // Project description (translated)
  technologies: string[];                               // Array of tech stack items
  githubUrl: string;                                    // GitHub repository link
  liveUrl?: string;                                     // Optional live demo link
  image: string;                                        // Project preview image path
  category: 'anime' | 'web' | 'game' | 'mobile';      // Project category for filtering
  status: 'completed' | 'in-progress' | 'planned';     // Development status
}

const Projects = () => {
  // Get translation function from context
  const { t } = useTranslation();
  
  // State for category filtering (default: show all projects)
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // State for scroll animation system
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  
  // Ref for the projects section container
  const projectsRef = useRef<HTMLElement>(null);

  /**
   * PROJECTS DATA CONFIGURATION
   * ===========================
   * Array of project objects with translated content
   * Each project uses translation keys for title/description to support multiple languages
   */
  const projects: Project[] = [
    {
      id: 1,
      title: t('project.pokemon.title'),           // Translated project title
      description: t('project.pokemon.description'), // Translated description
      technologies: ["React", "Tailwind", "Framer", "REST API"],
      githubUrl: "https://github.com/yourusername/anime-db",
      liveUrl: "https://anime-db-demo.vercel.app",
      image: "/pokemon.gif",
      category: "web",
      status: "completed"
    },
    {
      id: 2,
      title: t('project.portfolio.title'),
      description: t('project.portfolio.description'),
      technologies: ["React", "TypeScript", "Vite", "CSS3"],
      githubUrl: "https://github.com/yourusername/anime-portfolio",
      liveUrl: "https://your-portfolio.vercel.app",
      image: "/cyberpunk.gif",
      category: "web",
      status: "in-progress"
    },
    {
      id: 3,
      title: t('project.icebot.title'),
      description: t('project.icebot.description'),
      technologies: ["Node.js", "OAuth2", "Discord.js", "Cron"],
      githubUrl: "https://github.com/yourusername/anime-portfolio",
      liveUrl: "https://your-portfolio.vercel.app",
      image: "/dist/cute-chibi-anime-girl-3650hb74dgmqpp9e.gif",
      category: "web",
      status: "in-progress"
    },
   
  ];

  const categories = [
    { key: 'all', label: t('projects.filter.all'), icon: '⚡' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Scroll animation setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.getAttribute('data-animate-id');
          if (elementId) {
            if (entry.isIntersecting) {
              setVisibleElements(prev => new Set([...prev, elementId]));
            } else {
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

    if (projectsRef.current) {
      const elements = projectsRef.current.querySelectorAll('[data-animate-id]');
      elements.forEach(el => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const getStatusColor = (status: Project['status']) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'in-progress': return 'text-cyan-400';
      case 'planned': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: Project['status']) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '⚡';
      case 'planned': return '📋';
      default: return '❓';
    }
  };

  return (
    <section ref={projectsRef} id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Header */}
        <div 
          className={`projects-header scroll-animate ${visibleElements.has('header') ? 'animate-in' : 'animate-out'}`}
          data-animate-id="header"
        >
          <h2 className="section-title">
           
            {t('projects.title')}

          </h2>
          <p className="section-subtitle">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Category Filters */}
        <div 
          className={`category-filters scroll-animate ${visibleElements.has('filters') ? 'animate-in' : 'animate-out'}`}
          data-animate-id="filters"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`filter-btn ${activeCategory === category.key ? 'active' : ''}`}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`project-card scroll-animate ${visibleElements.has(`project-${project.id}`) ? 'animate-in' : 'animate-out'}`}
              data-animate-id={`project-${project.id}`}
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              {/* Project Image */}
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <div className={`project-status ${getStatusColor(project.status)}`}>
                    <span>{getStatusIcon(project.status)}</span>
                    {t(`projects.status.${project.status}`)}
                  </div>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div 
          className={`view-more-section scroll-animate ${visibleElements.has('view-more') ? 'animate-in' : 'animate-out'}`}
          data-animate-id="view-more"
        >
          <a 
            href="https://github.com/JohnRuscica?tab=repositories" 
            target="_blank" 
            rel="noopener noreferrer"
            className="view-more-btn"
          >
            <span>🔗</span>
            {t('projects.view-more')}
            <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
    
  );
};

export default Projects;