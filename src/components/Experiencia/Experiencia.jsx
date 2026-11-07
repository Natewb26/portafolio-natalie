import { experiencias } from '../../data/experiencias';

// La información laboral se almacena en un solo lugar: data/experiencias.js.
export default function Experiencia() {
  return (
    <section id="experiencia" className="seccion" aria-labelledby="titulo-experiencia">
      <div className="contenedor">
        <p className="etiqueta">Trayectoria</p>
        <h2 id="titulo-experiencia" className="titulo-seccion">Experiencia y formación</h2>
        <div className="grid-tarjetas">
          {experiencias.map((item) => (
            <article className="tarjeta" key={item.id}>
              <span className="fecha">{item.periodo}</span>
              <h3>{item.titulo}</h3>
              <p>{item.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
