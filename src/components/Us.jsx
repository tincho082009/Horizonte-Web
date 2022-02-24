import img1 from "../assets/img/us.png"

export const Us = (props) => {
  return (
    <div id="Nosotros">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src={img1} className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>Nosotros</h2>
              <p>Mirar al horizonte despierta sensaciones de libertad. Derecho que todas las familias educadoras celebramos y defendemos.
              <br/>Mirar al horizonte orienta un camino y marca un destino. Y nosotros educamos con una enseñanza programada llena de recursos, para usarlos en los desafíos y alcanzar nuevos logros cada día.  
              <br/>Miramos a nuestros hijos. Son como pequeños brotes que deseamos cultivar con nuestras propias manos y almas, hasta que alcancen su propio horizonte.
              <br/>El mundo virtual es el nuevo ambiente donde los hijos están creciendo. A ellos se los llama “nativos digitales”. Los padres intuyen sus contenidos negativos. Pero también se entusiasman y tranquilizan cuando los chicos entran a espacios digitales con dinámicas que los estimulan a razonar y les descubre conocimientos.
              <br/> <b>HORIZONTE</b>, es una plataforma educativa donde ofrecemos enseñanza pedagógica avanzada, con las tecnologías de vanguardia y que tienden a establecerse definitivamente en el futuro de la educación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
