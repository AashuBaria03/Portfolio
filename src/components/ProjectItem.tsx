interface Project {
    title: string;
    image: string;
    description: string;
    category: string;
    techStack: string[];
    notebookLink: string;
    codeLink: string;
  }
  
  interface ProjectItemProps {
    project: Project;
  }
  
  function ProjectItem({ project }: ProjectItemProps) {
    return (
      <div className={`project-card ${project.category}`} data-title={project.title}>
        <img src={project.image} alt={project.title} />
        <div className="project-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tech-stack">
            {project.techStack.map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={project.notebookLink} target="_blank" className="btn" rel="noopener noreferrer">View Notebook</a>
            <a href={project.codeLink} target="_blank" className="btn" rel="noopener noreferrer">View Code</a>
          </div>
        </div>
      </div>
    );
  }
  
  export default ProjectItem;