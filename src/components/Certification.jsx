import img2 from "../assets/img/FaceSchool.jpg";
import img3 from "../assets/img/IntegraTive.jpg";

export const Certification = (props) => {
  return (
    <div id="Certificacion" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Certificación</h2>
          <p>
            Entendemos que la educación es un derecho que no puede ser
            vulnerado. Nuestros niños y jóvenes igualan las oportunidades
            educativas por medio de escuelas certificadoras Internacionales.
            Orientamos en opciones como:
          </p>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={img2} className="img-responsive logo" alt="" />
            <p style={{ textAlign: "center" }}>
              Face School es una institución privada e independiente fundada en
              1996 para apoyar y mejorar las experiencias de educación en el
              hogar.
              {/*<br />
              <a
                href="https://www.faceschool.org/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                https://www.faceschool.org/
              </a>*/}
            </p>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src={img3} className="img-responsive logo" alt="" />

            <p style={{ textAlign: "center" }}>
              IntegraTive Learning es un centro educativo que permite a las
              familias acreditar el aprendizaje que sus hijos desarrollan en
              casa o a distancia, brindándoles un marco legal sólido.
              <br />
              <a
                href="https://www.eduintegrative.com/certificacion"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                https://www.eduintegrative.com/certificacion
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
