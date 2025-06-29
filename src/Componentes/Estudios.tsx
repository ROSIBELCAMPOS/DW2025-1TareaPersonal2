import curriculum from '../curriculum.json' with { type: "json" };
const { educacion } = curriculum;

const { institucion, urlLogoUni, urlLogo, carrera, nivel } = educacion;

const TextColor = '#ffffff'; // White
const AccentColor = '#40e0d0'; // Turquoise (light)

function Estudios() {

 return (
        <section id="education" style={{ padding: '4rem 2rem', borderTop: `2px solid ${AccentColor}` }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: TextColor }}>Educación</h2>
            <div className='educacion'>
                
                <div style={{ flexShrink: 0 }}>
                
                    <img src= {urlLogo} alt="Graduation Cap Icon" style={{ width: '100px', height: '100px', filter: 'invert(1)'  }} />
                </div>
                
                <p style={{ flexGrow: 1, color: TextColor, lineHeight: '1.6' }}>
                    {institucion}<br />
                    {carrera}<br />
                    {nivel}<br />
                </p>
                
                <div style={{ flexShrink: 0 }}>
                
                    <img src={urlLogoUni} alt="UNEG Logo" style={{ width: '150px', height: 'auto' }} />
                </div>
            </div>
        </section>
    );
};

export default Estudios;