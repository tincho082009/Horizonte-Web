import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReactPlayer from "react-player";
import video from "../assets/img/Testimonio.mp4";
import video2 from "../assets/img/Testimonio2.mp4";

export const Testimony = (props) => {
  return (
    <div id="Testimony">
      <div className="container">
        <div className="section-title">
          <h2>Testimonios</h2>
          <p>
            De padres y estudiantes acerca de <b>Horizonte</b>.
          </p>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div id="testimonial-slider">
              <Carousel
                showStatus={false}
                infiniteLoop={true}
                swipeable={true}
                emulateTouch={true}
                renderArrowPrev={(onClickHandler, hasPrev, label) => (
                  <div
                    onClick={onClickHandler}
                    title={label}
                    style={{
                      position: "absolute",
                      zIndex: 2,
                      top: "calc(50% - 15px)",
                      width: 30,
                      height: 30,
                      cursor: "pointer",
                      left: 15,
                    }}
                  >
                    <FaChevronLeft
                      fontSize={25}
                      className="w-9 h-9 text-white"
                    />
                  </div>
                )}
                renderArrowNext={(onClickHandler, hasNext, label) => (
                  <div
                    onClick={onClickHandler}
                    title={label}
                    style={{
                      position: "absolute",
                      zIndex: 2,
                      top: "calc(50% - 15px)",
                      width: 30,
                      height: 30,
                      cursor: "pointer",
                      right: 15,
                    }}
                  >
                    <FaChevronRight
                      fontSize={25}
                      className="w-9 h-9 text-white"
                    />
                  </div>
                )}
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                  if (isSelected) {
                    return (
                      <li
                        style={{
                          width: 10,
                          height: 10,
                          borderRadius: 20,
                          display: "inline-block",
                          margin: "0 8px",
                          background: "#FF5500",
                          //background: "#33742c"
                        }}
                        aria-label={`Selected: ${label} ${index + 1}`}
                        title={`Selected: ${label} ${index + 1}`}
                      />
                    );
                  }
                  return (
                    <li
                      style={{
                        background: "#ff884d", //ORIGINAL
                        //background: "#4bab41",
                        borderRadius: 20,
                        width: 10,
                        height: 10,
                        display: "inline-block",
                        margin: "0 8px",
                      }}
                      onClick={onClickHandler}
                      onKeyDown={onClickHandler}
                      value={index}
                      key={index}
                      role="button"
                      tabIndex={0}
                      title={`${label} ${index + 1}`}
                      aria-label={`${label} ${index + 1}`}
                    />
                  );
                }}
              >
                <div class="testimonial">
                  <div class="videoTestimonial">
                    <ReactPlayer
                      url={video2}
                      controls={true}
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <div class="testimonial">
                  <div class="videoTestimonial">
                    <ReactPlayer
                      url={video}
                      controls={true}
                      width="100%"
                      height="100%"
                    />
                  </div>
                </div>
                <div class="testimonial">
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        Los contenidos están muy bien organizados. Las
                        propuestas de trabajo son motivadoras. De las tareas que
                        entregan, los chicos reciben devoluciones
                        personalizadas. Han hecho encuentros virtuales. Y cuando
                        surgió un inconveniente técnico o duda, siempre fuimos
                        asistidas a la brevedad con una pronta solución.
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
                        Tenía muchas dudas antes de empezar homeschooling con mi
                        hijo, porque él decía que iba a extrañar a sus
                        compañeros. Pero desde que empezó con la plataforma solo
                        vemos ventajas. Disfruta de sus recreos para jugar a la
                        pelota o solamente estar con su perro. Disfruta de las
                        clases porque son muy divertidas y fáciles de hacer. Yo,
                        como mamá, estoy mucho más tranquila para atender mi
                        negocio desde casa. Hasta que se animen, no sabrán lo
                        bueno que es.
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
                        abrieron mucho más la cabeza; las pude entender bien y
                        ejecutarlas de forma correcta. Lo que más me gustó fue
                        el diseño.
                      </p>
                    </div>
                    <h3 class="title">Diego Guerrero</h3>
                    {/*<span class="post">Web Developer</span>*/}
                  </div>
                </div>
                <div class="testimonial">
                  <div className="itemTestimonioLong">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        Somos una familia con tres hijos que cursan 4°, 6° y 8°
                        grado con Horizonte. Hace cuatro años iniciamos escuela
                        en casa ¡y este último año nos sumamos a la plataforma,
                        con la bendición de nuestro Señor! Es una experiencia
                        muy buena para toda la familia y para cada uno. Como
                        papás nos alivió la carga de ocuparnos de lo pedagógico,
                        y nos tranquiliza saber que nuestros hijos reciben lo
                        académico de una manera muy completa por la plataforma.
                        La verdad estamos muy agradecidos a Dios y a los
                        hermanos que están detrás de este proyecto, porque nos
                        han hecho mucho bien. Los chicos están aprendiendo a ser
                        autodidactas, a resumir y a valorar el contenido que
                        reciben. Está siendo muy provechoso para toda la
                        familia. Contar con la plataforma nos ha permitido
                        ocuparnos y concentrarnos más en lo espiritual y
                        emocional de ellos. La verdad, agradecemos muchísimo al
                        Señor por Horizonte, pues fue una respuesta suya.
                        Gracias hermanos por ayudarnos tanto con su trabajo y
                        así nosotros ayudar a otros también.
                      </p>
                    </div>
                    <h3 class="title">Familia De paolo</h3>
                    {/*<span class="post">Web Developer</span>*/}
                  </div>
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        La experiencia en este primer curso en la plataforma con
                        ustedes ha sido excelente. Es un programa bien
                        detallado, fácil de explicar a los niños y de fácil
                        aprendizaje para ellos. Además del tiempo que nos deja
                        para cubrir otras actividades. Realmente maravilloso…
                        Gracias a todos.
                      </p>
                    </div>
                    <h3 class="title">Anónimo</h3>
                    {/*<span class="post">Web Developer</span>*/}
                  </div>
                </div>
                <div class="testimonial">
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        Queria saludarlos y agradecerles por la reunion de hoy,
                        me encantó, me emocionó! Me sentí abrazada y contenida
                        como por una familia! Que hermosa comunidad, que cálido
                        equipo. Gracias, gracias, gracias!!!
                      </p>
                    </div>
                    <h3 class="title">Anónimo</h3>
                  </div>
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        La propuesta de educar en casa está muy buena, porque
                        los últimos años la educación está sufriendo muchos
                        cambios con legislaciones que van en contra de los
                        valores sociales y humanos. Creo que, a futuro, la
                        educación en casa será un recurso fuerte, sobre todo,
                        cuando permite las mismas condiciones en el mercado para
                        continuar con estudios universitarios. Se está tornando
                        una alternativa muy recomendable para muchas familias.
                      </p>
                    </div>
                    <h3 class="title">Alejandro, Contador Público Nacional.</h3>
                  </div>
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        ¡Felicitaciones, Horizonte! Hemos aprendido mucho con
                        ustedes. Realizan una labor maravillosa, y se nota la
                        dedicación que le ponen. Que sigan acompañando a cada
                        familia en este hermoso camino de la educación en casa
                        durante muchos años más.
                      </p>
                    </div>
                    <h3 class="title">Familia González.</h3>
                  </div>
                </div>
                <div class="testimonial">
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        ¡Es un placer pertenecer a esta gran familia de
                        Horizonte! ¡Agradecemos el constante acompañamiento y la
                        disposición que siempre nos brindan! Sigamos avanzando
                        en este bien común de sembrar en nuestros hijos.
                        ¡Felicidades a todo el equipo de Horizonte!
                      </p>
                    </div>
                    <h3 class="title">Familia Rodríguez</h3>
                  </div>
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        Es realmente un tiempo de calidad. Cuando les hemos
                        hecho preguntas, nos han proporcionado todas las
                        respuestas. La experiencia en este primer curso con
                        ustedes en la plataforma ha sido excelente. Es un
                        programa detallado y fácil de explicar a los niños, con
                        un aprendizaje accesible para ellos. Además, nos brinda
                        flexibilidad de tiempo para otras actividades. Realmente
                        maravilloso... Gracias a todos.
                      </p>
                    </div>
                    <h3 class="title">Familia Fernández.</h3>
                  </div>
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        Estamos muy contentos con esta experiencia. No puedo
                        dejar de recomendar entusiastamente esta plataforma a
                        donde quiera que vaya, ya que me permite conectar con
                        otros padres preocupados por la educación de sus hijos.
                        Estamos agradecidos por el constante apoyo, guía y
                        contención que hemos recibido.
                      </p>
                    </div>
                    <h3 class="title">Pamela Martínez.</h3>
                  </div>
                </div>
                <div class="testimonial">
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        Nuestra experiencia como familia fue excelente. La
                        plataforma es accesible, práctica, amena y muy completa.
                        ¡Todo el equipo está siempre atento! ¡Fueron una
                        bendición!
                      </p>
                    </div>
                    <h3 class="title">Familia Van Caur.</h3>
                  </div>
                  <div className="itemTestimonio">
                    <div class="testimonial-content">
                      <div class="testimonial-icon">
                        <i class="fa fa-quote-left"></i>
                      </div>
                      <p class="description">
                        Estamos muy conformes y agradecidos con la plataforma.
                        Siempre que puedo, la recomiendo. Ya hay un niño de mi
                        ciudad con ustedes... Mi más sincera felicitación y
                        gratitud para todo el equipo.
                      </p>
                    </div>
                    <h3 class="title">Familia Sbarbatti.</h3>
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
