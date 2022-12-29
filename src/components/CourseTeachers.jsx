import img1 from "./../assets/img/EquipoTalleres/MicaTole.jpeg";
import img2 from "./../assets/img/EquipoTalleres/GladisGraneros1.jpeg";
import img3 from "./../assets/img/EquipoTalleres/NatiFernandez1.jpeg";
import img4 from "./../assets/img/EquipoTalleres/MicaelMerlo1.jpeg";

export const CourseTeachers = (props) => {
  return (
    <div>
      <div id="courseTeachers">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2>Equipo de docentes: Talleres</h2>
              <p style={{ fontSize: "1.7rem", fontWeight: "500" }}></p>
            </div>
            <div className="row1-container">
              <div className="teacherCard card-down">
                <img src={img1} />
                <div class="bottomContainer">
                  <h2>Micaela Toledo</h2>
                  <p>Técnica en Artes Visuales</p>
                </div>
              </div>
              <div className="teacherCard ">
                <img src={img2} />
                <div class="bottomContainer">
                  <h2>Gladis Graneros</h2>
                  <p>Técnica en elaboración Pasteleria y mesa dulce</p>
                </div>
              </div>
              <div className="teacherCard card-down">
                <img src={img3} />
                <div class="bottomContainer">
                  <h2>Natalia Fernandez</h2>
                  <p>
                    Ing. en Recursos Naturales y Medio Ambiente. Diploma en
                    Neurosicoeducacion
                  </p>
                </div>
              </div>
            </div>
            <div class="row2-container">
              <div className="teacherCard">
                <img src={img4} />
                <div class="bottomContainer">
                  <h2>Micael Merlo</h2>
                  <p>Periodista Universitario</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
