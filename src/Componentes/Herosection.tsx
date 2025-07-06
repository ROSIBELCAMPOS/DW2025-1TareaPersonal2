import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import type { InterfaceHerosection } from '../Interface/InterfaceHerosection.tsx';
import axios from 'axios';

const TextColor = '#ffffff';
const AccentColor = '#40e0d0';

function Herosection() {

    const [info, setInfo] = useState<InterfaceHerosection | null>(null);

    const infoData = async () => {
        try {
            const response = await axios.get("/curriculum.json");
            const { conceptosBasicos } = response.data;
            setInfo(conceptosBasicos);
        } catch (error) {
            console.error("Error al cargar los datos:", error);
        }
    };

    useEffect(() => {
        infoData();
    }, []);

    if (!info) return <p>Cargando...</p>;

    const { imagen, nombre, email, perfiles, resumen } = info;

    return (
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
                    {perfiles && perfiles.map((perfil, i) => (
                        <a
                            key={i}
                            href={perfil.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: AccentColor }}
                        >
                            {perfil.red === "GitHub" && <FaGithub size={24} />}
                            {perfil.red === "LinkedIn" && <FaLinkedin size={24} />}
                        </a>
                    ))}
                </div>
                <p style={{ maxWidth: '600px', margin: '2rem auto 0', lineHeight: '1.6', color: TextColor }}>
                    {resumen}
                </p>
            </div>
        </section>
    );
}

export default Herosection;
