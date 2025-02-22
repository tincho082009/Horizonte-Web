import img1 from "../assets/img/EquipoFundadores/JorgeIris9.jpg";
import img2 from "../assets/img/EquipoFundadores/DiegoYaneth5.jpg";
import img3 from "../assets/img/EquipoFundadores/Ezequiel4.jpg";
import img4 from "../assets/img/EquipoFundadores/JorgeElizabet5.jpg";

export const FoundingTeam = (props) => {
  return (
    <div id="fTeam" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Equipo Fundador</h2>
        </div>
        <div id="row">
          <div key={`John Doe-1`} className="col-md-4 col-sm-4 team">
            <div className="thumbnail">
              {" "}
              <img src={img4} alt="..." className="team-img" />
              <div className="caption">
                <h4>Jorge Gatti y Elizabet Brey</h4>
              </div>
            </div>
          </div>
          <div key={`Jane Doe-1`} className="col-md-4 col-sm-4 team">
            <div className="thumbnail">
              {" "}
              <img src={img2} alt="..." className="team-img" />
              <div className="caption">
                <h4>Diego Malagón y Yaneth Medina</h4>
              </div>
            </div>
          </div>
          <div key={`Karen Doe-1`} className="col-md-4 col-sm-4 team">
            <div className="thumbnail">
              {" "}
              <img src={img1} alt="..." className="team-img" />
              <div className="caption">
                <h4>Jorge Guerrero e Iris Aab</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
