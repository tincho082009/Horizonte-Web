import { useState} from 'react'
import emailjs from 'emailjs-com'

const initialState = {
  from_name: '',
  email: '',
  message: '',
}

export const Contact = (props) => {
  const [{ from_name, email, message }, setState] = useState(initialState);

  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }

  const OpenClose = () => {
    setIsOpen(!isOpen)
    if(!isOpen){
      setTimeout(() => {
        setIsOpen(false)    
      }, 1500)  
    }
  }

  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault() 
    emailjs
      .sendForm(
        'service_n8yt0qi', 'template_lcfqavg', e.target, 'user_yAszrvWf30vOsrpPVYUfL'
      )
      .then(
        (result) => {
          OpenClose()
          clearState()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  return (
    <div>
      <div id='contact'>
        <div className='container'>
          <div className='col-md-8'>
            <div className='row'>
              <div className='section-title'>
                <h2>Contacto</h2>
                <p style={{fontSize:"1.7rem", fontWeight:"500"}}>
                  ¡Dejanos tus datos y nos comunicaremos contigo!
                </p>
              </div>
              <form name='sentMessage' validate onSubmit={handleSubmit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        id='from_name'
                        name='from_name'
                        className='form-control'
                        placeholder='Nombre'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        id='email'
                        name='email'
                        className='form-control'
                        placeholder='Email'
                        required
                        onChange={handleChange}
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                </div>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    className='form-control'
                    rows='4'
                    placeholder='Mensaje'
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className='help-block text-danger'></p>
                </div>
                <div id='success'></div>
                <button type='submit' className='btn btn-custom btn-lg'>
                  Enviar
                </button>
                <div className={`tooltipNew${isOpen?"":"-hidden"} `}>
                  Mensaje enviado correctamente.
                </div>
              </form>
            </div>
          </div>
          <div className='col-md-3 col-md-offset-1 contact-info'>
            <div className='contact-item'>
              <h3>Información Contacto</h3>
              <p>
                <span>
                  <i className='fa fa-map-marker'></i> <b>Dirección</b>
                </span>
                Sargento Cabral 1261, Muñiz, Buenos Aires, Argentina.
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-phone'></i> <b>Teléfono</b>
                </span>{' '}
                Yanet Medina
                <br/>Relaciones Públicas e informes
                <br/><a href='tel:+54 9 2665 11-3630' style={{color:"white"}}>+54 9 2665 11-3630</a>
                <br/><a href='tel:+54 9 2665 039879' style={{color:"white"}}>+54 9 2665 039879</a>
              </p>
            </div>
            <div className='contact-item'>
              <p>
                <span>
                  <i className='fa fa-envelope-o'></i> <b>Email</b>
                </span>{' '}
                <a href='mailto:yanet@educarhorizonte.com.ar' style={{color:"white"}}><p>yanet@educarhorizonte.com.ar</p></a>
              </p>
            </div>
          </div>
          {/*<div className='col-md-12'>
            <div className='row'>
              <div className='social'>
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <i className='fa fa-facebook'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <i className='fa fa-youtube'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </div>
  )
}
