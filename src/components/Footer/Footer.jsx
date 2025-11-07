import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Troi. Todos los derechos reservados.</p>
        <p>Hecho con ❤️ usando React</p>
      </div>
    </footer>
  )
}

export default Footer