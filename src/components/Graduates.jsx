import img1 from "./../assets/img/Egresados/1.png";
import img2 from "./../assets/img/Egresados/5.png";
import img3 from "./../assets/img/Egresados/9.png";
import img4 from "./../assets/img/Egresados/8.png";
import img5 from "./../assets/img/Egresados/7.png";
import img6 from "./../assets/img/Egresados/6.png";
import img7 from "./../assets/img/Egresados/3.png";
import img8 from "./../assets/img/Egresados/4.png";
import img9 from "./../assets/img/Egresados/2.png";
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
            <div className="itemGraduate" >
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
        </Carousel>
      </div>
    </div>
  );
};
