import './Contact.css'
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Gracias por tu mensaje! Te contactaré pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>¿Quieres trabajar conmigo?</h3>
            <p>
              Estoy abierto a oportunidades de colaboración y proyectos interesantes. 
              ¡No dudes en contactarme!
            </p>
            <div className="social-links">
              <a href="mailto:tuemail@ejemplo.com" className="social-link">📧 Email</a>
              <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer" className="social-link">💻 GitHub</a>
              <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" className="social-link">💼 LinkedIn</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact