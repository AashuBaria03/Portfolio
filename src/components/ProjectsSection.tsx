import { useState } from 'react';
import { projects } from '../data/projectData';
import ProjectItem from './ProjectItem';

function ProjectsSection() {
  const [category, setCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projects.filter((project) => {
    if (category !== 'all' && project.category !== category) return false;
    if (searchTerm && !project.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

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
          <ProjectItem key={index} project={project} />
        ))}
      </section>
    </div>
  );
}

export default ProjectsSection;