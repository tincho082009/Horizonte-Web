import img1 from "../assets/img/team-6.png"

export const Us = (props) => {
  return (
    <div id="Nosotros">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6" style={{textAlign:"center"}}>
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
              <br/> <b>HORIZONTE</b> es una plataforma educativa <b>no formal a distancia</b> dónde ofrecemos enseñanza pedagógica para el acompañamiento de las familias Homeschoolers, con las herramientas de vanguardia que tienden a establecerse definitivamente en el futuro de la educación.
              </p>
            </div>
          </div>
        </div>
        {/*<br></br>
        <div className='col-md-12 section-title' style={{textAlign:"center"}}>
          <h4 style={{color:"#33742c"}}>"Sembrando en el corazón de nuestros hijos"</h4>
        </div>*/}
      </div>
    </div>
  );
};
