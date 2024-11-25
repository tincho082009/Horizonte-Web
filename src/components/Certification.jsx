import img1 from "../assets/img/logoCertification.png";
import img2 from "../assets/img/FaceSchool.jpg";

export const Certification = (props) => {
  return (
    <div id="Certificacion" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Certificación</h2>
          <p>
            Entendemos que la educación es un derecho que no puede ser
            vulnerado, nuestros niños y jóvenes igualan las oportunidades
            educativas por medio de escuelas certificadoras Internacionales.
            Nuestras opciones son:
          </p>
        </div>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src={img2} className="img-responsive logo" alt="" />
            <p style={{textAlign: "center" }}>
              Face School, una institución privada e independiente fundada en
              1996 para apoyar y mejorar las experiencias de educación en el
              hogar.
              <br />
              <a
                href="https://www.faceschool.org/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                https://www.faceschool.org/
              </a>
            </p>
          </div>
          <div className="col-xs-12 col-md-6">
            <img src={img1} className="img-responsive logo" alt="" />

            <p style={{ textAlign: "center" }}>
              Royal Hollow Academy, una escuela privada estadounidense
              registrada en el estado de Florida.
              <br />
              <a
                href="https://royalhollow.com/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "white" }}
              >
                https://royalhollow.com/
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
