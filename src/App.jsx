
import { useEffect, useState } from 'react';

import Navbar from './components/Navbar/Navbar';
import Inicio from './components/Inicio/Inicio';
import SobreMi from './components/SobreMi/SobreMi';
import Competencias from './components/Competencias/Competencias';
import Proyectos from './components/Proyectos/Proyectos';
import Aprendizajes from './components/Aprendizajes/Aprendizajes';
import Experiencia from './components/Experiencia/Experiencia';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

import './App.css';

// Componente principal del portafolio.
// Reúne las secciones y las funcionalidades globales.
function App() {

  // Almacena el porcentaje recorrido de la página.
  const [progreso, setProgreso] = useState(0);

  // Controla cuándo aparece el botón para volver arriba.
  const [mostrarArriba, setMostrarArriba] = useState(false);

  useEffect(() => {

    // Calcula cuánto ha recorrido el usuario.
    const actualizarScroll = () => {
      const recorrido = window.scrollY;

      const alturaDisponible =
        document.documentElement.scrollHeight -
        window.innerHeight;

      // Evita dividir entre cero cuando la página es corta.
      const porcentaje = alturaDisponible > 0
        ? (recorrido / alturaDisponible) * 100
        : 0;

      // Limita el resultado entre 0 y 100.
      setProgreso(Math.min(100, Math.max(0, porcentaje)));

      // El botón aparece después de 400 píxeles.
      setMostrarArriba(recorrido > 400);
    };

    // Se ejecuta al iniciar y durante el desplazamiento.
    actualizarScroll();

    window.addEventListener('scroll', actualizarScroll, {
      passive: true,
    });

    window.addEventListener('resize', actualizarScroll);

    // Limpia los eventos cuando el componente se desmonta.
    return () => {
      window.removeEventListener('scroll', actualizarScroll);
      window.removeEventListener('resize', actualizarScroll);
    };

  }, []);

  // Desplaza la pantalla hacia el inicio del portafolio.
  const volverArriba = () => {
    const reducirMovimiento = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducirMovimiento ? 'instant' : 'smooth',
    });
  };

  return (
    <>
      {/* Menú principal del portafolio. */}
      <Navbar />

      {/* Barra visual que indica el avance de lectura. */}
      <div
        className="barra-progreso"
        role="progressbar"
        aria-label="Progreso de lectura"
        aria-valuenow={Math.round(progreso)}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="barra-progreso-relleno"
          style={{ width: `${progreso}%` }}
        />
      </div>

      {/* Secciones principales de la página. */}
      <main className="portafolio">
        <Inicio />
        <SobreMi />
        <Competencias />
        <Proyectos />
        <Aprendizajes />
        <Experiencia />
        <Contacto />
      </main>

      {/* Botón flotante para regresar al inicio. */}
      {mostrarArriba && (
        <button
          type="button"
          className="boton-arriba"
          onClick={volverArriba}
          aria-label="Volver al inicio"
          title="Volver al inicio"
        >
          ↑
        </button>
      )}

      {/* Pie de página. */}
      <Footer />
    </>
  );
}

export default App;
