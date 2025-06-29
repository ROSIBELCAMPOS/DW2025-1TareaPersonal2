const PrimaryColor = '#808080'; // Gray for background (using a hex close to the image's gray)
const TextColor = '#ffffff'; // White
const AccentColor = '#40e0d0'; // Turquoise (light)

function Nav() {

  return (
    <nav style={{ backgroundColor: PrimaryColor, padding: '2rem', borderBottom: `2px solid ${AccentColor}` }}>
      <div className="navbar-content" style={{ display: 'flex', justifyContent: 'space-around', maxWidth: '1200px', margin: ' 0 auto' }}>
        
        <a href="#technologies" style={{ color: TextColor, textDecoration: 'none', padding: '0.5rem 1rem', transition: 'color 0.3s' }}>
          Tecnologías
        </a>

        <a href="#education" style={{ color: TextColor, textDecoration: 'none', padding: '0.5rem 1rem', transition: 'color 0.3s' }}>
          Educación
        </a>
        
        <a href="#projects" style={{ color: TextColor, textDecoration: 'none', padding: '0.5rem 1rem', transition: 'color 0.3s' }}>
          Proyectos
        </a>

      </div>
    </nav>
  );
};

export default Nav;