//import img1 from "../assets/img/EquipoDocentes/CamilaQuiroga2.jpeg";
import img2 from "../assets/img/EquipoDocentes/DeboraEspinola3.jpg";
//import img3 from "../assets/img/EquipoDocentes/MatiasAbb2.jpeg";
import img4 from "../assets/img/EquipoDocentes/DavidGonzalez2.jpeg";
import img5 from "../assets/img/EquipoDocentes/AbigailLavini3.jpg";
//import img6 from "../assets/img/EquipoDocentes/MariaRuiz2.jpeg";
import img7 from "../assets/img/EquipoDocentes/EzequielChao5.jpg";
//import img8 from "../assets/img/EquipoDocentes/IrisAab2.jpeg";
import img9 from "../assets/img/EquipoDocentes/AnabelLima2.jpg";
import img10 from "../assets/img/EquipoDocentes/NataliaFernandez.jpg";
import img11 from "../assets/img/EquipoDocentes/LauraJuarez2.jpg";

export const TeachersTeam = (props) => {
  return (
    <div id="team" className="text-center" style={{ backgroundColor: "#fff" }}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Equipo de Docentes</h2>
        </div>
        <div className="row">
          <div key={`John Doe-1`} className="col-md-12 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src={img7} alt="..." className="team-img" />
              <div className="caption">
                <h4>Ezequiel Chao Farroni</h4>
                <p>
                  Supervisor Docente.
                  <br /> Profesor de Biología, Física y Química.
                  <br />
                  Nivel Secundario <br />
                  Ingeniero Agrónomo (FAUBA), Formación pedagógica (UFASTA)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div key={`John Doe-2`} className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src={img5} alt="..." className="team-img" />
              <div className="caption">
                <h4>Abigail Lavini</h4>
                <p>Profesora Nivel Primario</p>
              </div>
            </div>
          </div>
          <div key={`Mike Doe-3`} className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src={img2} alt="..." className="team-img" />
              <div className="caption">
                <h4>Débora Anahí Espínola</h4>
                <p>
                  Profesora de Lengua y Literatura.
                  <br />
                  Nivel Secundario
                </p>
              </div>
            </div>
          </div>
          <div key={`Karen Doe-5`} className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src={img4} alt="..." className="team-img" />
              <div className="caption">
                <h4>David Leonardo González M.</h4>
                <p>
                  Profesor de Matemáticas.
                  <br />
                  Nivel Secundario
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div key={`Karen Doe-9`} className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src={img11} alt="..." className="team-img" />
              <div className="caption">
                <h4>Laura Juárez</h4>
                <p>Profesora Nivel Primario</p>
              </div>
            </div>
          </div>
          <div key={`Jane-8`} className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src={img10} alt="..." className="team-img" />
              <div className="caption">
                <h4>Natalia Fernandez</h4>
                <p>
                  Profesora de Historia y Geografía.
                  <br />
                  Nivel Secundario
                </p>
              </div>
            </div>
          </div>
          <div key={`Karen Doe-10`} className="col-md-4 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src={img9} alt="..." className="team-img" />
              <div className="caption">
                <h4>Anabel Lima</h4>
                <p>
                  Profesora de Inglés.
                  <br />
                  Nivel Primario y Secundario
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
