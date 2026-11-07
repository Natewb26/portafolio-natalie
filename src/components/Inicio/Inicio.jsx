
import './Inicio.css';

// Componente principal de bienvenida.
// Presenta el perfil profesional y los accesos rápidos.
export default function Inicio() {
  return (
    <section
      id="inicio"
      className="inicio inicio-profesional"
      aria-labelledby="titulo-inicio"
    >
      <div className="contenedor inicio-contenido">

        {/* Etiqueta que identifica la especialización. */}
        <p className="inicio-etiqueta">
          &lt; Desarrollo de Software Full Stack /&gt;
        </p>

        {/* Nombre principal del portafolio. */}
        <h1 id="titulo-inicio">
          Hola, soy <span>Natalie Pariona Cosi</span>
        </h1>

        {/* Formación académica actual. */}
        <h2>
          Estudiante de Ingeniería de Software
          con Inteligencia Artificial
        </h2>

        {/* Resumen basado en el perfil profesional del CV. */}
        <p className="descripcion">
          Estudiante de 5.º semestre de SENATI, con experiencia
          en desarrollo de aplicaciones web Full Stack,
          arquitectura de software y bases de datos relacionales.
          Me interesa desarrollar soluciones tecnológicas
          y continuar fortaleciendo mis competencias.
        </p>

        {/* Enlaces internos a otras secciones. */}
        <div className="acciones">
          <a href="#proyectos" className="boton">
            Explorar proyectos
          </a>

          <a href="#contacto" className="boton-secundario">
            Contactarme
          </a>
        </div>

        {/* Tecnologías relevantes de mi perfil. */}
        <div className="inicio-tecnologias">
          <span>React</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>PostgreSQL</span>
          <span>Docker</span>
        </div>

        {/* Acceso externo al perfil de GitHub. */}
        <a
          className="inicio-github"
          href="https://github.com/Natewb26"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver mi perfil de GitHub ↗
        </a>

      </div>
    </section>
  );
}
