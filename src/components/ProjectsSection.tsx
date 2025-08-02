import { useState, useEffect } from 'react';
import { projects } from '../data/projectData';
import ProjectItem from './ProjectItem';
import GameZone from './GameZone';

function ProjectsSection() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [openNotebook, setOpenNotebook] = useState<string | null>(null);

  useEffect(() => {
    if (openNotebook) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [openNotebook]);

  const filteredProjects = projects.filter((project) => {
    if (category !== 'all' && project.category !== category) return false;
    if (searchTerm && !project.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const handleViewNotebook = (projectTitle: string) => {
    setOpenNotebook(projectTitle);
  };

  const handleCloseNotebook = () => {
    setOpenNotebook(null);
  };

  return (
    <div id="Projects">
      <header className="Project-header">
        <div className="Project-header-content">
          <h1>Project Showcase</h1>
          <p>Explore my projects, showcasing my skills and creativity.</p>
        </div>
        <div className="search-filter">
          <input
            type="text"
            id="searchBar"
            placeholder="Search Projects..."
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="category-buttons">
            <button onClick={() => setCategory('all')} className={category === 'all' ? 'active' : ''}>All</button>
            <button onClick={() => setCategory('web')} className={category === 'web' ? 'active' : ''}>Web Development</button>
            <button onClick={() => setCategory('ml')} className={category === 'ml' ? 'active' : ''}>Machine Learning</button>
          </div>
        </div>
      </header>
      <section className="projects-container">
        {filteredProjects.map((project, index) => (
          <ProjectItem
            key={index}
            project={project}
            onViewNotebook={() => handleViewNotebook(project.title)}
          />
        ))}
      </section>
      {openNotebook === 'E-Sport Registration Website' && (
        <div className="notebook-modal-overlay" style={{position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.7)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center'}}>
          <GameZone onClose={handleCloseNotebook} />
        </div>
      )}
    </div>
  );
}

export default ProjectsSection;