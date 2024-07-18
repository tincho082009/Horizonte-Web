import img1 from "./../assets/img/Egresados/A.png";
import img2 from "./../assets/img/Egresados/B.png";
import img3 from "./../assets/img/Egresados/C.png";
import img4 from "./../assets/img/Egresados/D.png";
import img5 from "./../assets/img/Egresados/E2.png";
import img6 from "./../assets/img/Egresados/F2.png";
import img7 from "./../assets/img/Egresados/G.png";
import img8 from "./../assets/img/Egresados/H.png";
import img9 from "./../assets/img/Egresados/I.png";
import img10 from "./../assets/img/Egresados/J2.png";
import img11 from "./../assets/img/Egresados/k.png";
import img12 from "./../assets/img/Egresados/L.png";
import img13 from "./../assets/img/Egresados/M.png";
import img14 from "./../assets/img/Egresados/N.png";
import img15 from "./../assets/img/Egresados/N2.png";
import img16 from "./../assets/img/Egresados/O.png";
import img17 from "./../assets/img/Egresados/P.png";

import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const Graduates = (props) => {
  return (
    <div id="Graduates">
      <div>
        <Carousel
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          swipeable={true}
          emulateTouch={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) => (
            <div
              onClick={onClickHandler}
              title={label}
              style={{
                //ff5500 --> NARANJA
                color: "#ff5500",
                position: "absolute",
                zIndex: 2,
                top: "calc(50% - 15px)",
                width: 30,
                height: 30,
                cursor: "pointer",
                left: 15,
              }}
            >
              <FaChevronLeft fontSize={25} className="w-9 h-9 text-white" />
            </div>
          )}
          renderArrowNext={(onClickHandler, hasNext, label) => (
            <div
              onClick={onClickHandler}
              title={label}
              style={{
                //ff5500 --> NARANJA
                color: "#ff5500",
                position: "absolute",
                zIndex: 2,
                top: "calc(50% - 15px)",
                width: 30,
                height: 30,
                cursor: "pointer",
                right: 15,
              }}
            >
              <FaChevronRight fontSize={25} className="w-9 h-9 text-white" />
            </div>
          )}
          showIndicators={false}
        >
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img1} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img3} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img6} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img7} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img8} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img9} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img10} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img11} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img12} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img13} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img14} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img15} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img16} alt="" />
              </div>
            </div>
          </div>
          <div class="graduates-card">
            <div className="itemGraduate">
              <div className="containerImage">
                <img src={img17} alt="" />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
