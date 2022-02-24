import img1 from "../assets/img/logoCertification.png"

export const Certification = (props) => {
    return (
      <div id="Certificacion">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
                <div className="about-text">
                <h2>Certificacion</h2>
                <p>Nuestro contenido curricular está avalado y certificado por Royal Hollow Academy, institución acreditada en el Estado de Florida (EE.UU){/*Diseñamos los programas más amplios de acreditación educativa posibles, para validar el aprendizaje a través de:
<br/>-	Certificación Internacional como miembros de Royal Hollow Academy (escuela de cobertura con sede en Texas y Florida, EEUU - <a style={{color: "#fff"}} target="_blank" href="https://royalhollow.com/">https://royalhollow.com/</a>).
<br/>-	Rendir exámenes libres en Argentina. Los alumnos podrán hacerlo con los contenidos estudiados y la orientación que les brindamos.
Desde ambas posibilidades, hay alumnos argentinos certificados que ya están estudiando en la Universidad.
                <br/>Si necesitas consultarnos, comunícate con <a style={{color: "#fff"}} target="_blank" href="mailto:inscripciones@educarhorizonte.com.ar">inscripciones@educarhorizonte.com.ar</a>*/}</p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6" style={{textAlign:"center"}}>
                {" "}
              <img src={img1} className="img-responsive" alt="" className="logo" />{" "}
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  