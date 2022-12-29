import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Testimony = (props) => {
  return (
    <div id="Testimony">
      <div className="container">
        <div className="section-title">
          <h2>Testimonios</h2>
          <p>
            Recolectamos testimonios de padres y estudiantes acerca de{" "}
            <b>Horizonte</b>.
          </p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div id="testimonial-slider">
              <Carousel
                showStatus={false}
                infiniteLoop={true}
                swipeable={true}
                emulateTouch={true} /*autoPlay={true}*/
              >
                <div class="testimonial">
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        Cabe destacar que los contenidos están muy bien
                        organizados, la propuestas de trabajo son motivadoras,
                        hay devoluciones de las tareas entregadas que son
                        personalizadas, han hecho encuentros virtuales y alguna
                        vez que surgió un inconveniente técnico o duda siempre
                        fuimos asistidas a la brevedad con una pronta solución.
                      </p>
                    </div>
                    <h3 class="title">Familia Mauro</h3>
                  </div>
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        Tenia muchas dudas antes de empezar el homeschooling con
                        mi hijo porque el decia que iba a extrañar a sus
                        compañeros. Pero desde que empezó con la plataforma solo
                        vemos ventajas, disfruta de sus recreos para jugar a la
                        pelota o solamente estar con su perro, disfruta de las
                        clases porque son muy divertidas y faciles de llevar.
                        Yo, como mama estoy mucho mas tranquila para atender a
                        mi negocio desde casa. Hasta que no se animen no sabran
                        lo bueno que es.
                        {/*Cómo estudiante de 10° año estoy muy conforme con la
                        propuesta educativa, me permite hacer otras actividades
  y lo mejor es que yo organizo mis tiempos*/}
                      </p>
                    </div>
                    <h3 class="title">Vanessa Joseph</h3>
                    {/*<span class="post">Web Developer</span>*/}
                  </div>
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        Me ayudó a estudiar la forma sintética, bien explicada y
                        excelente en la que los profesores presentaron el
                        material. En las materias que me costaban como química,
                        inglés y matemática, las maneras de explicarlas me
                        abrieron mucho más la cabeza las pude entender bien y
                        ejecutarlas de forma correcta. Lo que más me gustó fue
                        el diseño.
                      </p>
                    </div>
                    <h3 class="title">Diego Guerrero</h3>
                    {/*<span class="post">Web Developer</span>*/}
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
