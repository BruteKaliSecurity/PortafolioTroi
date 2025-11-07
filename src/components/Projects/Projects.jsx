import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción de mi primer proyecto usando React y otras tecnologías.',
      tech: ['React', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Proyecto 2',
      description: 'Un proyecto web responsivo con funcionalidades interactivas.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Proyecto 3',
      description: 'Aplicación web moderna con diseño atractivo y funcional.',
      tech: ['React', 'Vite'],
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  <span>📁</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link">Ver Proyecto</a>
                  <a href={project.link} className="project-link">Código</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects