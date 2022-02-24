import img1 from "../assets/img/EquipoFundadores/JorgeIris.jpeg"
//import img2 from "../assets/img/team/02.jpg"
import img2 from "../assets/img/EquipoFundadores/JorgeIris3.jpeg"
import img3 from "../assets/img/team/03.jpg"
import img4 from "../assets/img/team/04.jpg"

export const FoundingTeam = (props) => {
  return (
    <div id='fTeam' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Equipo Fundador</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id='row'>
          <div key={`John Doe-1`} className='col-md-6 col-sm-6 team'>
            <div className='thumbnail'>
                {' '}
                <img src={img1} alt='...' className='team-img' style={{width: "100%"}} />
                <div className='caption'>
                <h4>{/*Jorge Guerrero e Iris Aab*/}Joe Doe</h4>
                <p>Director</p>
                </div>
            </div>
        </div>
        <div key={`Mike Doe-1`} className='col-md-6 col-sm-6 team'>
            <div className='thumbnail'>
                {' '}
                <img src={img2} alt='...' className='team-img' />
                <div className='caption'>
                    <h4>Mike Doe</h4>
                    <p>Senior Designer</p>
                </div>
            </div>
        </div>
        <div key={`Jane Doe-1`} className='col-md-6 col-sm-6 team'>
            <div className='thumbnail'>
                {' '}
                <img src={img3} alt='...' className='team-img' />
                <div className='caption'>
                <h4>Jane Doe</h4>
                <p>Senior Designer</p>
                </div>
            </div>
        </div>
        <div key={`Karen Doe-1`} className='col-md-6 col-sm-6 team'>
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
      </div>
    </div>
  )
}
