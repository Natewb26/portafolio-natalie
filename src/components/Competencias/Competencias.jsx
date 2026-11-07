import { competencias } from '../../data/competencias';

// Recorre los datos y construye una tarjeta por competencia.
export default function Competencias() {
  return (
    <section id="competencias" className="seccion seccion-alternativa" aria-labelledby="titulo-competencias">
      <div className="contenedor">
        <p className="etiqueta">Mis conocimientos</p>
        <h2 id="titulo-competencias" className="titulo-seccion">Competencias y habilidades</h2>
        <p className="texto-seccion">Tecnologías y habilidades que he utilizado durante mi formación y experiencia práctica.</p>
        <div className="grid-tarjetas">
          {competencias.map((competencia) => (
            // key permite que React identifique cada elemento de la lista.
            <article key={competencia.titulo} className="tarjeta">
              <h3>{competencia.titulo}</h3>
              <p>{competencia.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
