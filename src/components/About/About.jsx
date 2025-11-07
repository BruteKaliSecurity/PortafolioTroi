import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              ¡Hola! Soy Troi, un apasionado desarrollador Frontend en formación. 
              Estoy aprendiendo las tecnologías modernas para crear experiencias 
              web increíbles y funcionales.
            </p>
            <p>
              Mi objetivo es convertirme en un desarrollador completo, dominando 
              tanto el Frontend como las mejores prácticas de desarrollo web.
            </p>
            <p>
              Cuando no estoy programando, disfruto explorando nuevas tecnologías, 
              practicando lo que aprendo y creando proyectos personales.
            </p>
          </div>
        </div>

        {/* Tarjetas estilo macOS */}
        <div className="cards-container">
          {/* Tarjeta 1 */}
          <div className="mac-card">
            <div className="mac-header">
              <span className="red" />
              <span className="yellow" />
              <span className="green" />
            </div>
            <span className="card-title">Título Tarjeta 1</span>
            <p className="card-description">
              Descripción de la tarjeta 1. Edita este texto.
            </p>
            <span className="card-tag">TAG 1</span> <span className="card-tag">TAG 2</span>
            <div className="code-editor">
              <pre><code>&lt;h1&gt; "Tu contenido aquí" &lt;/h1&gt;</code></pre>
            </div>
          </div>

          {/* Tarjeta 2 */}
          <div className="mac-card">
            <div className="mac-header">
              <span className="red" />
              <span className="yellow" />
              <span className="green" />
            </div>
            <span className="card-title">Prueba con Hackie</span>
            <p className="card-description">
              Descripción de la tarjeta 2. Edita este texto.
            </p>
            <span className="card-tag">TAG 1</span> <span className="card-tag">TAG 2</span>
            <div className="code-editor">
              <pre><code>&lt;h1&gt; "Tu contenido aquí" &lt;/h1&gt;</code></pre>
            </div>
          </div>

          {/* Tarjeta 3 */}
          <div className="mac-card">
            <div className="mac-header">
              <span className="red" />
              <span className="yellow" />
              <span className="green" />
            </div>
            <span className="card-title">Título Tarjeta 3</span>
            <p className="card-description">
              Descripción de la tarjeta 3. Edita este texto.
            </p>
            <span className="card-tag">TAG 1</span> <span className="card-tag">TAG 2</span>
            <div className="code-editor">
              <pre><code>&lt;h1&gt; "Tu contenido aquí" &lt;/h1&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About