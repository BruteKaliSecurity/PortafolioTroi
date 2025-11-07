import './Skills.css'

function Skills() {
  const skills = [
    { name: 'HTML', level: 80 },
    { name: 'CSS', level: 75 },
    { name: 'JavaScript', level: 70 },
    { name: 'React', level: 65 },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills