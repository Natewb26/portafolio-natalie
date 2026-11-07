
import { proyectos } from '../../data/proyectos';
import './Proyectos.css';

// Componente encargado de mostrar las evidencias.
export default function Proyectos() {
  return (
    <section
      id="proyectos"
      className="seccion"
      aria-labelledby="titulo-proyectos"
    >
      <div className="contenedor">

        {/* Encabezado de la sección. */}
        <p className="etiqueta">Portafolio académico</p>

        <h2
          id="titulo-proyectos"
          className="titulo-seccion"
        >
          Evidencias y proyectos
        </h2>

        <p className="texto-seccion">
          Proyectos que representan mis aprendizajes,
          competencias técnicas y experiencia en
          el desarrollo de software.
        </p>

        {/* Recorremos los proyectos almacenados
            en src/data/proyectos.js. */}
        <div className="grid-tarjetas proyectos-grid">
          {proyectos.map((proyecto) => {

            // Verifica si el proyecto tiene contenido académico.
            const tieneDetalles = Boolean(
              proyecto.contexto ||
              proyecto.aportePersonal ||
              proyecto.aprendizaje
            );

            return (
              <article
                className="tarjeta proyecto-tarjeta"
                key={proyecto.id}
              >

                {/* Zona superior de la tarjeta. */}
                <div className="proyecto-contenido">
                  <span className="estado-proyecto">
                    {proyecto.estado}
                  </span>

                  <h3>{proyecto.titulo}</h3>

                  <p>{proyecto.descripcion}</p>

                  {/* Tecnologías asociadas al proyecto.
                      Solo aparecen cuando existen datos. */}
                  {proyecto.tecnologias.length > 0 && (
                    <div className="proyecto-tecnologias">
                      {proyecto.tecnologias.map((tecnologia) => (
                        <span key={tecnologia}>
                          {tecnologia}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Galería de máximo cuatro capturas.
                      Las imágenes deben ser públicas
                      o estar autorizadas para mostrarse. */}
                  {proyecto.imagenes.length > 0 && (
                    <div className="proyecto-galeria">
                      {proyecto.imagenes.slice(0, 4).map(
                        (imagen, indice) => (
                          <a
                            href={imagen.src}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={`${proyecto.id}-${indice}`}
                          >
                            <img
                              src={imagen.src}
                              alt={imagen.alt}
                              loading="lazy"
                            />
                          </a>
                        )
                      )}
                    </div>
                  )}
                </div>

                {/* Ficha según los requisitos académicos.
                    Se oculta mientras no existan datos. */}
                {tieneDetalles && (
                  <details className="proyecto-detalles">
                    <summary>Ver ficha del proyecto</summary>

                    <div className="proyecto-ficha">
                      {proyecto.contexto && (
                        <div>
                          <h4>Contexto</h4>
                          <p>{proyecto.contexto}</p>
                        </div>
                      )}

                      {proyecto.aportePersonal && (
                        <div>
                          <h4>Aporte personal</h4>
                          <p>{proyecto.aportePersonal}</p>
                        </div>
                      )}

                      {proyecto.aprendizaje && (
                        <div>
                          <h4>Aprendizaje o resultado</h4>
                          <p>{proyecto.aprendizaje}</p>
                        </div>
                      )}
                    </div>
                  </details>
                )}

                {/* Enlace opcional al repositorio público. */}
                {proyecto.github && (
                  <a
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proyecto-enlace"
                  >
                    Ver repositorio ↗
                  </a>
                )}

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
