import img1 from "../assets/img/logoCertification.png"

export const Certification = (props) => {
    return (
      <div id="Certificacion">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
                <div className="about-text">
                <h2>Certificación</h2>
                <p>Nuestro contenido curricular está avalado y certificado por Royal Hollow Academy, institución acreditada en los Estados de Florida y Texas (EE.UU)<br/> <a href="https://royalhollow.com/" target="_blank" style={{color:"white"}}>https://royalhollow.com/</a></p>
              </div>
            </div>
            <div className="col-xs-12 col-md-6" style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
                {" "}
              <img src={img1} className="img-responsive logo" alt="" />{" "}
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  