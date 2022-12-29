import img1 from "./../assets/img/Galeria/EncuentroIngles.jpeg";
import img2 from "./../assets/img/Galeria/Ninios4.jpeg";
import img3 from "./../assets/img/Galeria/Dibujo3.jpeg";
import img4 from "./../assets/img/Galeria/EncuentroSocial.jpeg";
import img5 from "./../assets/img/Galeria/EncuentroPadres.jpeg";
import img6 from "./../assets/img/Galeria/AmigosDelPlaneta.jpeg";
import img7 from "./../assets/img/Galeria/DonPasto.jpeg";
import img8 from "./../assets/img/Galeria/Ninios1.jpeg";
import img9 from "./../assets/img/Galeria/Ninios2.jpeg";
import img10 from "./../assets/img/Galeria/Ninios3.jpeg";

import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState, useEffect } from "react";

const images = [
  {
    src: img1,
    width: 281,
    height: 500,
    caption: "Segundo Encuentro de Ingles",
  },
  {
    src: img9,
    width: 375,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img7,
    width: 350,
    height: 500,
    caption: "Trabajos de alumnos: Don Pasto",
  },
  {
    src: img4,
    width: 281,
    height: 500,
    caption: "Encuentro Virtual Social",
  },
  {
    src: img8,
    width: 440,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img5,
    width: 445,
    height: 500,
    caption: "Reunion de padres",
  },

  {
    src: img10,
    width: 281,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img2,
    width: 382,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img6,
    width: 281,
    height: 500,
    caption: "Encuentro: Amigos del Planeta",
  },
  {
    src: img3,
    width: 396,
    height: 500,
    caption: "Trabajos de alumnos",
  },
];

export const MyGallery = (props) => {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => {
    document.getElementById("menu").style.zIndex = 90;
    setIndex(index);
  };

  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div id="MyGallery" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Galeria</h2>
          <p>
            Encuentros Virtuales. Fomentamos un espacio social donde nuestros
            chicos se conocen con otros chicos de otros países y exponen sus
            ideas
          </p>
        </div>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
          rowHeight={500}
        />

        {!!currentImage && (
          <Lightbox
            mainSrc={currentImage.src}
            imageTitle={currentImage.caption}
            nextSrc={nextImage.src}
            prevSrc={prevImage.src}
            onCloseRequest={handleClose}
            onMovePrevRequest={handleMovePrev}
            onMoveNextRequest={handleMoveNext}
          />
        )}

        {/*<div className="cuerpoGaleria">
          <div class="card">
            <img src={img1} />
            <div>
              <h2>Card Title</h2>
            </div>
          </div>
          <div class="card">
            <img src={img2} />
            <div>
              <h2>Card Title</h2>
            </div>
          </div>
          <div class="card">
            <img src={img3} />
            <div>
              <h2>Card Title</h2>
            </div>
          </div>
          <div class="card">
            <img src={img4} />
            <div>
              <h2>Card Title</h2>
            </div>
          </div>
          <div class="card">
            <img src={img5} />
            <div>
              <h2>Card Title</h2>
            </div>
          </div>
          <div class="card">
            <img src={"https://picsum.photos/id/20/600/300"} />
            <div>
              <h2>Card Title</h2>
            </div>
          </div>
        </div>*/}
      </div>
    </div>
  );
};
