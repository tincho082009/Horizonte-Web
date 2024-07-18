import { useEffect } from "react";
import img1 from "./../assets/img/1A.png";
import img2 from "./../assets/img/2B.png";
import img3 from "./../assets/img/3C.png";
import img4 from "./../assets/img/4D.png";
import img5 from "./../assets/img/5E.png";
import img6 from "./../assets/img/6F.png";
import img7 from "./../assets/img/7G.png";


export const Header = (props) => {
  useEffect(() => {
    var stage = document.getElementById("stage");
    var fadeComplete = function (e) {
      stage.appendChild(arr[0]);
    };
    var arr = stage.getElementsByClassName("containerImage");
    for (var i = 0; i < arr.length; i++) {
      arr[i].addEventListener("animationend", fadeComplete, false);
    }
  }, []);

  return (
    <header id="header" className="text-center">
      <div className="intro">
        <div id="stage">
          {/*<div className='containerImage'><img  src={pic1} /></div>*/}
          <div className="containerImage">
            <img src={img1} alt="" />
          </div>
          <div className="containerImage">
            <img src={img2} alt="" />
          </div>
          <div className="containerImage">
            <img src={img3} alt="" />
          </div>
          <div className="containerImage">
            <img src={img4} alt="" />
          </div>
          <div className="containerImage">
            <img src={img5} alt="" />
          </div>
          <div className="containerImage">
            <img src={img6} alt="" />
          </div>
          <div className="containerImage">
            <img src={img7} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/*<div className='col-md-8 textoIntro'>
                <h1>
                Horizonte
                <span></span>
                </h1>
                <p>Plataforma Educativa</p>
              </div>*/}
          </div>
        </div>
        {/*<a
          href='#features'
          className='btn btn-custom btn-lg page-scroll'
        >
          Learn More
        </a>*/}{" "}
      </div>
    </header>
  );
};
