import curriculum from '../curriculum.json' with { type: "json" };
const {habilidades} = curriculum;

// Assuming you want the first object in the habilidades array
const { url, lenguajes } = habilidades[0];


const TextColor = '#ffffff'; // White
const AccentColor = '#40e0d0'; // Turquoise (light)

function TechnologiesSection() {

    return (
        <section id="technologies" style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: `2px solid ${AccentColor}` }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: TextColor }}>Tecnologías</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                
                <div style={{ textAlign: 'center' }}>
                    <img src={url[1]} alt="CSS" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{lenguajes[1]}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={url[2]} alt="JavaScript" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{lenguajes[2]}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={url[0]} alt="HTML" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{lenguajes[0]}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={url[4]} alt="Node.js" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{lenguajes[4]}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={url[5]} alt="Node.js" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{lenguajes[5]}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={url[3]} alt="React" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{lenguajes[3]}</p>
                </div>
            </div>
        </section>
            );
};

export default TechnologiesSection;