import {useState} from "react"

import img1 from "../assets/img/logotipoTransparent.png"

export const Navigation = (props) => {
  const [flag, setFlag] = useState("top");

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {   
      document.getElementsByClassName("page-scroll")[1].style.boxShadow = "none";
      document.getElementsByClassName("page-scroll")[2].style.boxShadow = "none";
      document.getElementsByClassName("page-scroll")[3].style.boxShadow = "none";
      document.getElementsByClassName("page-scroll")[4].style.boxShadow = "none";
      document.getElementsByClassName("page-scroll")[6].style.boxShadow = "none";

      setFlag("bot")
    } else {
      document.getElementsByClassName("page-scroll")[1].style.boxShadow = "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)";
      document.getElementsByClassName("page-scroll")[2].style.boxShadow = "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)";
      document.getElementsByClassName("page-scroll")[3].style.boxShadow = "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)";
      document.getElementsByClassName("page-scroll")[4].style.boxShadow = "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)";
      document.getElementsByClassName("page-scroll")[6].style.boxShadow = "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)";

      setFlag("top")
    }
  }
  
  return (
    <nav id='menu' className={`navbar navbar-default navbar-fixed-top`} style={flag == "top" ? {backgroundColor: "transparent", boxShadow: "none"}:{}}>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#Home'>
            {/*<div className='container-img-menu'></div>*/}
            <img src={img1} className={`img-menu-${flag}`}/>
          </a>{' '}
          <div className="text-menu"style={flag == "top" ? {display:  "none"}:{}}>"Sembrando en el corazón <br/> de nuestros hijos"</div>
        </div>
        
        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#Nosotros' className='page-scroll'>
                Quiénes somos
              </a>
            </li>
            <li>
              <a href='#OfertaAcademica' className='page-scroll'>
                Oferta académica
              </a>
            </li>
            <li>
              <a href='#EquipoDeFamilias' className='page-scroll'>
                Nuestro equipo
              </a>
            </li>
            <li>
              <a href='#Testimony' className='page-scroll'>
                Testimonios
              </a>
            </li>
             <li>
              <a href='https://portal.plataformahorizonte.com.ar' target="_blank" className='page-scroll' style={{color: "#fff", backgroundColor: "#FF5500"}}>
                Ingresar
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll' >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
