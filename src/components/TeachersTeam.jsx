import img1 from "../assets/img/EquipoDocentes/CamilaQuiroga.jpeg"
import img2 from "../assets/img/EquipoDocentes/DeboraEspinola2.jpeg"
import img3 from "../assets/img/EquipoDocentes/MatiasAbb2.jpeg"
import img4 from "../assets/img/EquipoDocentes/DavidGonzalez2.jpeg"
import img5 from "../assets/img/EquipoDocentes/MelisaCardeilhac2.jpeg"
import img6 from "../assets/img/EquipoDocentes/MariaRuiz2.jpeg"
import img7 from "../assets/img/EquipoDocentes/EzequielChao2.jpeg"
import img8 from "../assets/img/EquipoDocentes/IrisAab2.jpeg"

export const TeachersTeam = (props) => {
    return (
      <div id='team' className='text-center' style={{backgroundColor: "#fff"}}>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>Equipo de Docentes</h2>
            {/*<p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>*/}
          </div>
          <div className='row'>
            <div key={`John Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img7} alt='...' className='team-img' />
                    <div className='caption'>
                        <h4>Ezequiel Chao Farroni</h4>
                        <p>Supervisor Docente.<br /> Profesor de Física y Química. <br />Ingeniero Agrónomo (FAUBA), Formación pedagógica (UFASTA)</p>
                    </div>
                 </div>
            </div>
            <div key={`John Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img5} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Melisa Laura Cardeilhac</h4>
                    <p>Profesora de Educación Primaria</p>
                    </div>
                </div>
            </div>
            <div key={`Mike Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img2} alt='...' className='team-img' />
                    <div className='caption'>
                        <h4>Débora Anahí Espínola</h4>
                        <p>Profesora de Lengua y Literatura</p>
                    </div>
                </div>
            </div>
            <div key={`Jane Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img3} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Matias David Aab {/*Joe Doe*/}</h4>
                    <p>Tutor de Biología {/*Senior Designer*/}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div key={`Karen Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img4} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>David Leonardo González M.</h4>
                    <p>Profesor de Matemáticas</p>
                    </div>
                </div>
            </div>
            <div key={`Karen Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img1} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Camila Micaela Quiroga R.</h4>
                    <p>Profesora de Educación Primaria</p>
                    </div>
                </div>
            </div>
            <div key={`Jane Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img6} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>María Celeste Ruiz</h4>
                    <p>Profesora de Inglés</p>
                    </div>
                </div>
            </div>
            
            <div key={`Jane-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img8} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Iris Aab</h4>
                    <p>Tutora de Historia y Geografía</p>
                    </div>
                </div>
            </div>
          </div>     
        </div>
      </div>
    )
  }
  