
import './Contacto.css';

// Enlaces de contacto profesional.
// La ruta del CV apunta a la carpeta public.
const contacto = {
  github: 'https://github.com/Natewb26',
  correo: 'nataliepariona2609@gmail.com',
  cv: '/cv-natalie.pdf',
};

// Componente de contacto y acceso al CV.
export default function Contacto() {
  return (
    <section
      id="contacto"
      className="seccion seccion-alternativa"
      aria-labelledby="titulo-contacto"
    >
      <div className="contenedor contacto-contenedor">

        {/* Presentación de la sección. */}
        <p className="etiqueta">Conectemos</p>

        <h2
          id="titulo-contacto"
          className="titulo-seccion"
        >
          Contacto
        </h2>

        <p className="contacto-descripcion">
          Gracias por visitar mi portafolio.
          Puedes consultar mis proyectos en GitHub,
          comunicarte conmigo por correo electrónico
          o descargar mi currículum profesional.
        </p>

        {/* Enlaces de contacto y documentación. */}
        <div className="contacto-acciones">

          {/* Abre el perfil público de GitHub. */}
          <a
            href={contacto.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contacto-boton contacto-principal"
          >
            Ver GitHub ↗
          </a>

          {/* Abre la aplicación de correo del usuario. */}
          <a
            href={`mailto:${contacto.correo}`}
            className="contacto-boton contacto-secundario"
          >
            Enviar correo
          </a>

          {/* Descarga el archivo PDF del CV. */}
          <a
            href="/cv-natalie.pdf"
            download="CV-Natalie-Pariona.pdf"
            className="contacto-boton contacto-secundario"
            type="application/pdf"
          >
            Descargar CV ↓
          </a>

        </div>

        {/* Información pública de contacto. */}
        <div className="contacto-informacion">
          <p>
            <span>Correo profesional</span>
            <a href={`mailto:${contacto.correo}`}>
              {contacto.correo}
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
