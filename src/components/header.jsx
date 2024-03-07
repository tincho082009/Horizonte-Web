import { useEffect } from "react";
import img1 from "./../assets/img/A.png";
import img2 from "./../assets/img/1.1.png";
import img3 from "./../assets/img/2.png";
import img4 from "./../assets/img/C.png";
import img5 from "./../assets/img/D2.png";
import img6 from "./../assets/img/E.png";

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
            <img src={img1} />
          </div>
          <div className="containerImage">
            <img src={img2} />
          </div>
          <div className="containerImage">
            <img src={img3} />
          </div>
          <div className="containerImage">
            <img src={img4} />
          </div>
          <div className="containerImage">
            <img src={img5} />
          </div>
          <div className="containerImage">
            <img src={img6} />
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
