import curriculum from '../curriculum.json' with { type: "json" };
const {proyectos} = curriculum;

const { nombre, imagen, descripcion, url } = proyectos;

const AccentColor = '#40e0d0'; // Turquoise (light)
const TextColor = '#ffffff'; // White


function Proyecto() {

    return (
        <section id="projects" style={{ padding: '4rem 2rem', borderTop: `2px solid ${AccentColor}` }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: TextColor }}>Proyectos</h2>
            <div style={{ textAlign: 'center', color: TextColor }}>
                <div className="tarjeta" style={{ textAlign: 'center', color: TextColor }}>
                        <figure>
                           <img src={imagen} alt="TodoEventos"/> 
                        </figure>
                        <div className="infotarjeta">
    
                            <h3 id="soloh3">{nombre}</h3>
    
                            <p id="solop">
                               {descripcion}
                            </p>
                            <a href= {url}
                                 id="soloa">ver mas</a>
    
                        </div>
                    </div>
            </div>
        </section>
    );
};

export default Proyecto;