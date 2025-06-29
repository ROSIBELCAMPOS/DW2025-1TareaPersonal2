import curriculum from '../curriculum.json' with { type: "json" };
const {habilidades} = curriculum;

const { url, lenguajes} = habilidades;


const TextColor = '#ffffff'; // White
const AccentColor = '#40e0d0'; // Turquoise (light)

function TechnologiesSection() {

    return (
        <section id="technologies" style={{ padding: '4rem 2rem', textAlign: 'center', borderTop: `2px solid ${AccentColor}` }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: TextColor }}>Tecnologías</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                
                <div style={{ textAlign: 'center' }}>
                    <img src={urlCss} alt="CSS" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{Css}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={urlJs} alt="JavaScript" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{Js}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={urlHtml} alt="HTML" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{Html}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={urlNode} alt="Node.js" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{Node}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={urlExpress} alt="Node.js" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{Express}</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <img src={urlReact} alt="React" style={{ width: '80px', height: '80px', filter: 'invert(1)' }} />
                    <p style={{ marginTop: '0.5rem', color: TextColor }}>{React}</p>
                </div>
            </div>
        </section>
            );
};

export default TechnologiesSection;