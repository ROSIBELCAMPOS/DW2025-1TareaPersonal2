import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Install react-icons: npm install react-icons
import curriculum from '../../public/curriculum.json' with { type: "json" };
const { conceptosBasicos } = curriculum;
const { perfiles, nombre, email } = conceptosBasicos;

const PrimaryColor = '#808080'; // Gray for background (using a hex close to the image's gray)
const TextColor = '#ffffff'; // White
const AccentColor = '#40e0d0'; // Turquoise (light)

function Footer() {
  return (
    <footer style={{ backgroundColor: PrimaryColor, padding: '2rem', textAlign: 'center', borderTop: `2px solid ${AccentColor}` }}>
      <div className="footer-links" style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <a href={perfiles[0].url} target="_blank" rel="noopener noreferrer" style={{ color: AccentColor }}>
          <FaLinkedin size={30} />
        </a>
        <a href={perfiles[1].url} target="_blank" rel="noopener noreferrer" style={{ color: AccentColor }}>
          <FaGithub size={30} />
        </a>
        <a href={email} style={{ color: AccentColor }}>
          <FaEnvelope size={30} />
        </a>
      </div>
      <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: TextColor }}>
        © {new Date().getFullYear()} {nombre}. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;