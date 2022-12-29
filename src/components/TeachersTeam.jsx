import img1 from "../assets/img/EquipoDocentes/CamilaQuiroga2.jpeg"
import img2 from "../assets/img/EquipoDocentes/DeboraEspinola2.jpeg"
import img3 from "../assets/img/EquipoDocentes/MatiasAbb2.jpeg"
import img4 from "../assets/img/EquipoDocentes/DavidGonzalez2.jpeg"
import img5 from "../assets/img/EquipoDocentes/AbigailLavini2.jpeg"
import img6 from "../assets/img/EquipoDocentes/MariaRuiz2.jpeg"
import img7 from "../assets/img/EquipoDocentes/EzequielChao2.jpeg"
import img8 from "../assets/img/EquipoDocentes/IrisAab2.jpeg"
import img9 from "../assets/img/EquipoDocentes/AnabelLima.jpeg"
import img10 from "../assets/img/EquipoDocentes/MartinFernandez3.png"
import img11 from "../assets/img/EquipoDocentes/LauraJuarez.jpeg"

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
                        <p>Supervisor Docente.<br /> Profesor de Física y Química.<br/>Nivel Secundario <br />Ingeniero Agrónomo (FAUBA), Formación pedagógica (UFASTA)</p>
                    </div>
                 </div>
            </div>
            <div key={`John Doe-2`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img5} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Abigail Lavini</h4>
                    <p>Profesora Nivel Primario</p>
                    </div>
                </div>
            </div>
            <div key={`Mike Doe-3`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img2} alt='...' className='team-img' />
                    <div className='caption'>
                        <h4>Débora Anahí Espínola</h4>
                        <p>Profesora de Lengua y Literatura.<br/>Nivel Secundario</p>
                    </div>
                </div>
            </div>
            <div key={`Jane Doe-4`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img3} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Matias David Aab {/*Joe Doe*/}</h4>
                    <p>Profesor de Biología.<br/>Nivel Secundario {/*Senior Designer*/}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div key={`Karen Doe-5`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img4} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>David Leonardo González M.</h4>
                    <p>Profesor de Matemáticas.<br/>Nivel Secundario</p>
                    </div>
                </div>
            </div>
            {/*<div key={`Karen Doe-6`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img1} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Camila Micaela Quiroga R.</h4>
                    <p>Profesora Nivel Primario</p>
                    </div>
                </div>
            </div>*/}
            <div key={`Karen Doe-9`} className='col-md-3 col-sm-6 team'> 
                <div className='thumbnail'>
                    {' '}
                    <img src={img11} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Laura Juárez</h4>
                    <p>Profesora Nivel Primario</p>
                    </div>
                </div>
            </div>
            <div key={`Jane Doe-7`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img6} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>María Celeste Ruiz</h4>
                    <p>Profesora de Inglés.<br/>Nivel Secundario</p>
                    </div>
                </div>
            </div>
            
            <div key={`Jane-8`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img8} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Iris Aab</h4>
                    <p>Tutora de Historia.<br/>Nivel Secundario</p>
                    </div>
                </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-1 col-sm-6 team' style={{paddingLeft:"24%"}}></div>
            
            <div key={`Karen Doe-10`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img9} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Anabel Lima</h4>
                    <p>Profesora de Inglés.<br/>Nivel Primario</p>
                    </div>
                </div>
            </div>
            <div key={`Jane Doe-11`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img10} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Ezequiel Martin Fernández</h4>
                    <p>Licenciado en Geofísica.<br/>Profesor de Geografía.<br/> Nivel Secundario</p>
                    </div>
                </div>
            </div>
            <div className='col-md-1 col-sm-6 team'></div>
          </div>      
        </div>
      </div>
    )
  }
  