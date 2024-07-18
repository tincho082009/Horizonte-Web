import img1 from "./../assets/img/Galeria/1.jpg";
import img2 from "./../assets/img/Galeria/2.jpg";
import img3 from "./../assets/img/Galeria/3.jpg";
import img4 from "./../assets/img/Galeria/4.jpg";
import img5 from "./../assets/img/Galeria/5.jpg";
import img6 from "./../assets/img/Galeria/6.jpg";
import img7 from "./../assets/img/Galeria/7.jpg";
import img8 from "./../assets/img/Galeria/8.jpg";
import img9 from "./../assets/img/Galeria/9.jpg";
import img10 from "./../assets/img/Galeria/10.jpg";
import img11 from "./../assets/img/Galeria/11.jpg";
import img12 from "./../assets/img/Galeria/12.jpg";
import img13 from "./../assets/img/Galeria/13.jpg";
import img14 from "./../assets/img/Galeria/14.jpg";
import img15 from "./../assets/img/Galeria/15.jpg";
import img16 from "./../assets/img/Galeria/16.jpg";
import img17 from "./../assets/img/Galeria/17.jpg";
import img18 from "./../assets/img/Galeria/18.png";
import img19 from "./../assets/img/Galeria/19.png";
import img20 from "./../assets/img/Galeria/20.jpg";
import img21 from "./../assets/img/Galeria/21.jpg";
import img22 from "./../assets/img/Galeria/22.jpg";
import img23 from "./../assets/img/Galeria/23.jpg";
import img24 from "./../assets/img/Galeria/24.jpg";
import img25 from "./../assets/img/Galeria/25.jpg";

import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

const images = [
  {
    src: img1,
    width: 888,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img11,
    width: 375,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img12,
    width: 306,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img4,
    width: 851,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img8,
    width: 667,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img5,
    width: 500,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img10,
    width: 375,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img2,
    width: 828,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img6,
    width: 701,
    height: 500,
    caption: "Trabajos de alumnos",
  },

  {
    src: img7,
    width: 667,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img13,
    width: 1083,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img3,
    width: 375,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img15,
    width: 715,
    height: 500,
    caption: "Encuentros virtuales sociales",
  },
  {
    src: img18,
    width: 726,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  
  {
    src: img17,
    width: 1003,
    height: 500,
    caption: "Encuentros virtuales sociales",
  },
  {
    src: img9,
    width: 375,
    height: 500,
    caption: "Trabajos de alumnos",
  },

  {
    src: img19,
    width: 741,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img16,
    width: 745,
    height: 500,
    caption: "Encuentros virtuales sociales",
  },
  {
    src: img20,
    width: 309,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img14,
    width: 375,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  
  {
    src: img22,
    width: 500,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img21,
    width: 333,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img23,
    width: 375,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img24,
    width: 359,
    height: 500,
    caption: "Trabajos de alumnos",
  },
  {
    src: img25,
    width: 281,
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
          <h2>Galería</h2>
          <p>
            <b>Encuentros Virtuales:</b> Fomentamos un espacio social donde
            nuestros chicos se conocen con otros chicos de otros países y
            exponen sus ideas.
            <br />
            <b>Talleres:</b> Arte y pintura nivel 1 y 2, Repostería nivel 1 y 2,
            Aprendiendo a Aprender, Periodismo nivel 1 y 2, <br />
            Introducción a la programación nivel 1, Diseño página web.
            <br />
            <b>Interacción zoom con padres de familia.</b>
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
