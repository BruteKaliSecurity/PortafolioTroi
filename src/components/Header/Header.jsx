import './Header.css'

function Header() {
  return (
    <header id="header" className="header">
      <nav className="nav">
        <div className="logo">Troi</div>
        <ul className="nav-links">
          <li>
            <a href="#about" className="btn cube cube-hover">
              <div className="bg-top">
                <div className="bg-inner" />
              </div>
              <div className="bg-right">
                <div className="bg-inner" />
              </div>
              <div className="bg">
                <div className="bg-inner" />
              </div>
              <div className="text">Sobre Mí</div>
            </a>
          </li>
          <li>
            <a href="#skills" className="btn cube cube-hover">
              <div className="bg-top">
                <div className="bg-inner" />
              </div>
              <div className="bg-right">
                <div className="bg-inner" />
              </div>
              <div className="bg">
                <div className="bg-inner" />
              </div>
              <div className="text">Habilidades</div>
            </a>
          </li>
          <li>
            <a href="#projects" className="btn cube cube-hover">
              <div className="bg-top">
                <div className="bg-inner" />
              </div>
              <div className="bg-right">
                <div className="bg-inner" />
              </div>
              <div className="bg">
                <div className="bg-inner" />
              </div>
              <div className="text">Proyectos</div>
            </a>
          </li>
          <li>
            <a href="#contact" className="btn cube cube-hover">
              <div className="bg-top">
                <div className="bg-inner" />
              </div>
              <div className="bg-right">
                <div className="bg-inner" />
              </div>
              <div className="bg">
                <div className="bg-inner" />
              </div>
              <div className="text">Contacto</div>
            </a>
          </li>
        </ul>
      </nav>
      <div className="hero">
        <h1 className="hero-title">
          Hola, soy <span className="highlight">Troi</span>
        </h1>
        <p className="hero-subtitle">Desarrollador Frontend en formación</p>
        
        {/* Terminal Linux/macOS */}
        <div className="header-terminal-container">
          <div className="terminal-container">
            <div className="terminal_toolbar">
              <div className="butt">
                <button className="btn btn-color" />
                <button className="btn" />
                <button className="btn" />
              </div>
              <p className="user">johndoe@admin: ~</p>
              <div className="add_tab">
                +
              </div>
            </div>
            <div className="terminal_body">
              <div className="terminal_promt">
                <span className="terminal_user">johndoe@admin:</span>
                <span className="terminal_location">~</span>
                <span className="terminal_bling">$</span>
                <span className="terminal_cursor" />
              </div>
            </div>
          </div>
        </div>

        <a href="#contact" className="cta-button">Contáctame</a>
      </div>
    </header>
  )
}

export default Header