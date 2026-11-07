// Perfil académico y profesional; no incluye datos personales innecesarios.
export default function SobreMi() {
  return (
    <section id="sobre-mi" className="seccion" aria-labelledby="titulo-sobre-mi">
      <div className="contenedor">
        <p className="etiqueta">Conóceme</p>
        <h2 id="titulo-sobre-mi" className="titulo-seccion">Sobre mí</h2>
        <p className="texto-seccion">
          Actualmente estudio Ingeniería de Software con Inteligencia Artificial
          en SENATI. Me interesa el desarrollo de soluciones tecnológicas y
          continuar fortaleciendo mis conocimientos en programación, arquitectura
          de software y bases de datos.
        </p>
        <p className="texto-seccion">
          Cuento con experiencia en prácticas preprofesionales de desarrollo de
          software, participando en la construcción de sistemas web y trabajando
          de forma colaborativa con herramientas de control de versiones.
        </p>
      </div>
    </section>
  );
}
