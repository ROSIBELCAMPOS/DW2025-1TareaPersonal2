import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; 
import{ useEffect, useState } from 'react';
import type { InterfaceHerosection } from '../Interface/InterfaceHerosection.tsx';
//import curriculum from '../curriculum.json' with { type: "json" };
import axios from 'axios';
//const {conceptosBasicos} = curriculum;
//const {imagen,nombre, email, perfiles, resumen } = conceptosBasicos;
const TextColor = '#ffffff'; // White
const AccentColor = '#40e0d0'; // Turquoise (light)

function Herosection() {

    interface estados{
        herosection:InterfaceHerosection[];
    }

    const [info, setInfo] = useState<estados['herosection']>([]);

    const infoData = async () => {
        const response = await axios.get("../curriculum.json");
        const {conceptosBasicos} = response.data;
        setInfo(conceptosBasicos);
    }

    useEffect(() => {
        infoData();
    });

    info.map(conceptosBasicos => {
        const {imagen,nombre, email, perfiles, resumen } = conceptosBasicos;

  return (
  <div>

      <section id="hero" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                    src={imagen}
                    alt={nombre}
                    style={{
                        borderRadius: '50%',
                        width: '150px',
                        height: '150px',
                        objectFit: 'cover',
                        border: `3px solid ${AccentColor}`,
                    }}
                />
                <h1 style={{ fontSize: '2.5rem', marginTop: '1rem', color: TextColor }}>{nombre}</h1>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <a href={`mailto:${email}`} style={{ color: AccentColor, textDecoration: 'none' }}>
                        <FaEnvelope size={24} /> {email}
                    </a>
                    {perfiles && perfiles[0] && (
                      <a href={perfiles[0].url} target="_blank" rel="noopener noreferrer" style={{ color: AccentColor }}>
                          <FaGithub size={24} />
                      </a>
                    )}
                    {perfiles && perfiles[1] && (
                      <a href={perfiles[1].url} target="_blank" rel="noopener noreferrer" style={{ color: AccentColor }}>
                          <FaLinkedin size={24} />
                      </a>
                    )}
                </div>
                <p style={{ maxWidth: '600px', margin: '2rem auto 0', lineHeight: '1.6', color: TextColor }}>
                    {resumen}
                </p>
            </div>
        </section>

  </div>
  
)
});
}

export default Herosection;