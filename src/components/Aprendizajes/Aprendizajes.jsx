
import './Aprendizajes.css';

// Aprendizajes reales relacionados con los
// proyectos académicos de nuestro portafolio.
const aprendizajes = [
  {
    id: 1,
    numero: '01',
    titulo: 'Desarrollo web Full Stack',
    descripcion:
      'Fortalecí mis conocimientos en la construcción de aplicaciones web, integrando interfaces de usuario con servicios backend desarrollados mediante Node.js y Express.',
    proyecto: 'CyberVerse Games y SistemaTienda',
  },
  {
    id: 2,
    numero: '02',
    titulo: 'Integración de API REST',
    descripcion:
      'Aprendí a desarrollar y consumir endpoints para consultar información y utilizar las respuestas del servidor en interfaces web interactivas.',
    proyecto: 'CyberVerse Games y SistemaTienda',
  },
  {
    id: 3,
    numero: '03',
    titulo: 'Desarrollo con React',
    descripcion:
      'Fortalecí mis competencias en componentes reutilizables, gestión de estados, navegación con React Router y organización de una aplicación frontend.',
    proyecto: 'SistemaTienda',
  },
  {
    id: 4,
    numero: '04',
    titulo: 'Interactividad y manejo de datos',
    descripcion:
      'Implementé búsquedas, filtros y presentación dinámica de información. También trabajé con almacenamiento local para conservar los videojuegos favoritos.',
    proyecto: 'CyberVerse Games',
  },
  {
    id: 5,
    numero: '05',
    titulo: 'Resolución de problemas',
    descripcion:
      'Desarrollar ambos proyectos individualmente me permitió practicar la identificación de problemas, la revisión de código y la mejora progresiva de funcionalidades.',
    proyecto: 'Aprendizaje transversal',
  },
];

// Componente que presenta los logros y aprendizajes.
export default function Aprendizajes() {
  return (
    <section
      id="aprendizajes"
      className="seccion seccion-alternativa"
      aria-labelledby="titulo-aprendizajes"
    >
      <div className="contenedor">

        {/* Encabezado principal. */}
        <p className="etiqueta">
          Mi evolución profesional
        </p>

        <h2
          id="titulo-aprendizajes"
          className="titulo-seccion"
        >
          Logros y aprendizajes
        </h2>

        <p className="texto-seccion">
          El desarrollo de mis proyectos académicos
          me ha permitido aplicar conocimientos
          técnicos, fortalecer mi autonomía y
          adquirir experiencia práctica en la
          construcción de aplicaciones web.
        </p>

        {/* Tarjetas generadas automáticamente. */}
        <div className="aprendizajes-grid">
          {aprendizajes.map((item) => (
            <article
              className="aprendizaje-tarjeta"
              key={item.id}
            >
              <span className="aprendizaje-numero">
                {item.numero}
              </span>

              <h3>{item.titulo}</h3>

              <p>{item.descripcion}</p>

              {/* Identifica el proyecto relacionado
                  con la competencia adquirida. */}
              <span className="aprendizaje-proyecto">
                {item.proyecto}
              </span>
            </article>
          ))}
        </div>

        {/* Reflexión general del proceso formativo. */}
        <div className="aprendizaje-reflexion">
          <h3>Mi aprendizaje continuo</h3>

          <p>
            Estos proyectos representan parte de mi
            formación como estudiante de Ingeniería
            de Software con Inteligencia Artificial.
            Me han permitido aplicar conocimientos
            adquiridos durante mis estudios y reconocer
            aspectos que puedo continuar mejorando.
          </p>

          <p>
            Mi objetivo es seguir desarrollando
            soluciones tecnológicas, fortaleciendo
            mis habilidades de programación y
            preparándome para nuevos desafíos
            profesionales.
          </p>
        </div>

      </div>
    </section>
  );
}
