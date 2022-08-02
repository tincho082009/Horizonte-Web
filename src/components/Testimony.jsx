import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export const Testimony = (props) => {

    return (
        <div id="Testimony">
            <div className="container">
                <div className="section-title">
                    <h2>Testimonios</h2>
                    <p>
                        {/*En todos los países dónde hay familias homeschoolers de habla hispana.*/}
                    </p>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div id="testimonial-slider">
                            <Carousel showStatus={false} infiniteLoop={true} swipeable={true} emulateTouch={true} /*autoPlay={true}*/>
                                <div class="testimonial">
                                    <div className="itemTestimonio" >
                                        <div class="testimonial-content">
                                            <div class="testimonial-icon">
                                                <i class="fa fa-quote-left"></i>
                                            </div>
                                            <p class="description">
                                                Elegí <b>Horizonte</b> por varios motivos aunque el fundamental fue que era creada por papas homeschoolers. Los contenidos están muy bien organizados, las propuestas de trabajo son motivadoras, hay devoluciones de las tareas entregadas que son personalizadas y si alguna vez surgió un inconveniente técnico o duda siempre fuimos asistidos a la brevedad con una pronta solución.
                                            </p>
                                        </div>
                                        <h3 class="title">Familia Mauro</h3>
                                    </div>
                                    
                                    <div className="itemTestimonio" >
                                        <div class="testimonial-content">
                                            <div class="testimonial-icon">
                                                <i class="fa fa-quote-left"></i>
                                            </div>
                                            <p class="description">
                                            Elegí <b>Horizonte</b> por varios motivos aunque el fundamental fue que era creada por papas homeschoolers. Los contenidos están muy bien organizados, las propuestas de trabajo son motivadoras, hay devoluciones de las tareas entregadas que son personalizadas y si alguna vez surgió un inconveniente técnico o duda siempre fuimos asistidos a la brevedad con una pronta solución.
                                            </p>
                                        </div>
                                        <h3 class="title">williamson</h3>
                                        {/*<span class="post">Web Developer</span>*/}
                                    </div>
                                    <div className="itemTestimonio" >
                                        <div class="testimonial-content">
                                            <div class="testimonial-icon">
                                                <i class="fa fa-quote-left"></i>
                                            </div>
                                            <p class="description">
                                            Elegí <b>Horizonte</b> por varios motivos aunque el fundamental fue que era creada por papas homeschoolers. Los contenidos están muy bien organizados, las propuestas de trabajo son motivadoras, hay devoluciones de las tareas entregadas que son personalizadas y si alguna vez surgió un inconveniente técnico o duda siempre fuimos asistidos a la brevedad con una pronta solución.
                                            </p>
                                        </div>
                                        <h3 class="title">williamson</h3>
                                        {/*<span class="post">Web Developer</span>*/}
                                    </div>
                                </div>
                                <div class="testimonial">
                                    <div className="itemTestimonio" >
                                        <div class="testimonial-content">
                                            <div class="testimonial-icon">
                                                <i class="fa fa-quote-left"></i>
                                            </div>
                                            <p class="description">
                                            
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.
                                            </p>
                                        </div>
                                        <h3 class="title">williamson</h3>
                                        {/*<span class="post">Web Developer</span>*/}
                                    </div>
                                    
                                    <div className="itemTestimonio" >
                                        <div class="testimonial-content">
                                            <div class="testimonial-icon">
                                                <i class="fa fa-quote-left"></i>
                                            </div>
                                            <p class="description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.
                                            </p>
                                        </div>
                                        <h3 class="title">williamson</h3>
                                        {/*<span class="post">Web Developer</span>*/}
                                    </div>
                                    <div className="itemTestimonio" >
                                        <div class="testimonial-content">
                                            <div class="testimonial-icon">
                                                <i class="fa fa-quote-left"></i>
                                            </div>
                                            <p class="description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.
                                            </p>
                                        </div>
                                        <h3 class="title">williamson</h3>
                                        {/*<span class="post">Web Developer</span>*/}
                                    </div>
                                </div>
                                <div class="testimonial">
                                    <div className="itemTestimonio" >
                                        <div class="testimonial-content">
                                            <div class="testimonial-icon">
                                                <i class="fa fa-quote-left"></i>
                                            </div>
                                            <p class="description">
                                            
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.
                                            </p>
                                        </div>
                                        <h3 class="title">williamson</h3>
                                        {/*<span class="post">Web Developer</span>*/}
                                    </div>
                                    
                                    <div className="itemTestimonio" >
                                        <div class="testimonial-content">
                                            <div class="testimonial-icon">
                                                <i class="fa fa-quote-left"></i>
                                            </div>
                                            <p class="description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.
                                            </p>
                                        </div>
                                        <h3 class="title">williamson</h3>
                                       {/*<span class="post">Web Developer</span>*/}
                                    </div>
                                    <div className="itemTestimonio" >
                                        <div class="testimonial-content">
                                            <div class="testimonial-icon">
                                                <i class="fa fa-quote-left"></i>
                                            </div>
                                            <p class="description">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum dolor sit amet eros imperdiet, sit amet hendrerit nisi vehicula.
                                            </p>
                                        </div>
                                        <h3 class="title">williamson</h3>
                                        {/*<span class="post">Web Developer</span>*/}
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}