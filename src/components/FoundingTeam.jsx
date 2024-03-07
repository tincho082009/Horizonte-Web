import img1 from "../assets/img/EquipoFundadores/JorgeIris8.jpg";
import img2 from "../assets/img/EquipoFundadores/DiegoYaneth4.jpg";
import img3 from "../assets/img/EquipoFundadores/Ezequiel4.jpg";
import img4 from "../assets/img/EquipoFundadores/JorgeElizabet4.jpg";

export const FoundingTeam = (props) => {
  return (
    <div id="fTeam" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Equipo Fundador</h2>
          {/*<p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>*/}
        </div>
        <div id="row">
          <div key={`John Doe-1`} className="col-md-6 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src={img4} alt="..." className="team-img" />
              <div className="caption">
                <h4>Jorge Gatti y Elizabet Brey</h4>
                {/*<p>Director</p>*/}
              </div>
            </div>
          </div>
          <div key={`Mike Doe-1`} className="col-md-6 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src={img3} alt="..." className="team-img" />
              <div className="caption">
                <h4>Ezequiel Chao</h4>
                {/*<p>Senior Designer</p>*/}
              </div>
            </div>
          </div>
          <div key={`Jane Doe-1`} className="col-md-6 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src={img2} alt="..." className="team-img" />
              <div className="caption">
                <h4>Diego Malagón y Yaneth Medina</h4>
                {/*<p>Senior Designer</p>*/}
              </div>
            </div>
          </div>
          <div key={`Karen Doe-1`} className="col-md-6 col-sm-6 team">
            <div className="thumbnail">
              {" "}
              <img src={img1} alt="..." className="team-img" />
              <div className="caption">
                <h4>Jorge Guerrero e Iris Aab</h4>
                {/*<p>Project Manager</p>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
