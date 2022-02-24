import img1 from "../assets/img/EquipoDocentes/CamilaQuiroga.jpeg"
import img2 from "../assets/img/EquipoDocentes/DeboraEspinola2.jpeg"
//import img3 from "../assets/img/EquipoDocentes/MatiasAbb.jpeg"
import img3 from "../assets/img/team/03.jpg"
import img4 from "../assets/img/team/04.jpg"

export const TeachersTeam = (props) => {
    return (
      <div id='team' className='text-center' style={{backgroundColor: "#fff"}}>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>Equipo de Docentes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id='row'>
            <div key={`John Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img1} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Camila Micaela Quiroga R.</h4>
                    <p>Profesorado en Educación Primaria</p>
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
                    <h4>{/*Matias David Aab*/} Joe Doe</h4>
                    <p>{/*Tutor de Biología*/}Senior Designer</p>
                    </div>
                </div>
            </div>
            <div key={`Karen Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img4} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Karen Doe</h4>
                    <p>Project Manager</p>
                    </div>
                </div>
            </div>
        </div>
        <div id='row'>
            <div key={`Karen Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img4} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Karen Doe</h4>
                    <p>Project Manager</p>
                    </div>
                </div>
            </div>
            <div key={`Jane Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img3} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>Jane Doe</h4>
                    <p>Senior Designer</p>
                    </div>
                </div>
            </div>
            <div key={`John Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img4} alt='...' className='team-img' />
                    <div className='caption'>
                    <h4>John Doe</h4>
                    <p>Director</p>
                    </div>
                </div>
            </div>
            <div key={`Mike Doe-1`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                    {' '}
                    <img src={img3} alt='...' className='team-img' />
                    <div className='caption'>
                        <h4>Mike Doe</h4>
                        <p>Senior Designer</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
  