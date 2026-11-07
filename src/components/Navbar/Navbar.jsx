
import { useEffect, useState } from 'react';
import './Navbar.css';

// Enlaces del menú.
// Cada href debe coincidir con el id de una sección.
const enlaces = [
  { nombre: 'Inicio', href: '#inicio', id: 'inicio' },
  { nombre: 'Sobre mí', href: '#sobre-mi', id: 'sobre-mi' },
  { nombre: 'Competencias', href: '#competencias', id: 'competencias' },
  { nombre: 'Proyectos', href: '#proyectos', id: 'proyectos' },
  { nombre: 'Aprendizajes', href: '#aprendizajes', id: 'aprendizajes' },
  { nombre: 'Experiencia', href: '#experiencia', id: 'experiencia' },
  { nombre: 'Contacto', href: '#contacto', id: 'contacto' },
];

function Navbar() {
  // Controla si el menú móvil está abierto.
  const [menuAbierto, setMenuAbierto] = useState(false);

  // Guarda la sección que el usuario está visualizando.
  const [seccionActiva, setSeccionActiva] = useState('inicio');

  // Detecta la sección visible mientras navegamos.
  useEffect(() => {
    const actualizarSeccion = () => {
      const posicion = window.scrollY + 140;
      let actual = 'inicio';

      enlaces.forEach((enlace) => {
        const seccion = document.getElementById(enlace.id);

        // Si pasamos el inicio de una sección, la activamos.
        if (seccion && seccion.offsetTop <= posicion) {
          actual = enlace.id;
        }
      });

      setSeccionActiva(actual);
    };

    // Revisamos la posición al cargar y al desplazarse.
    actualizarSeccion();

    window.addEventListener('scroll', actualizarSeccion, {
      passive: true,
    });
    window.addEventListener('resize', actualizarSeccion);

    // Limpieza para evitar eventos duplicados.
    return () => {
      window.removeEventListener('scroll', actualizarSeccion);
      window.removeEventListener('resize', actualizarSeccion);
    };
  }, []);

  // Cierra el menú móvil cuando se elige una sección.
  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <header className="navbar">
      <nav className="navbar-contenedor" aria-label="Navegación principal">

        {/* Logotipo textual del portafolio. */}
        <a
          href="#inicio"
          className="navbar-logo"
          onClick={cerrarMenu}
        >
          NP<span>.</span>
          <span className="navbar-logo-texto">Portafolio</span>
        </a>

        {/* Botón visible solo en pantallas pequeñas. */}
        <button
          type="button"
          className="navbar-toggle"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
          aria-controls="navbar-enlaces"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span>{menuAbierto ? '✕' : '☰'}</span>
        </button>

        {/* Enlaces principales del portafolio. */}
        <ul
          id="navbar-enlaces"
          className={`navbar-enlaces ${menuAbierto ? 'abierto' : ''}`}
        >
          {enlaces.map((enlace) => (
            <li key={enlace.id}>
              <a
                href={enlace.href}
                className={
                  seccionActiva === enlace.id ? 'activo' : ''
                }
                aria-current={
                  seccionActiva === enlace.id ? 'location' : undefined
                }
                onClick={cerrarMenu}
              >
                {enlace.nombre}
              </a>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
}

// Permite importar Navbar desde App.jsx.
export default Navbar;
