export const Contents = (props) => {
    return (
      <div id="contents">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6" >
              <div className='section-title'>
                <h2>Currícula</h2>
                <p>
                  Contamos con un programa curricular completo diseñado pedagógicamente.
                </p>
              </div>
              <div id="exTab1">	
                <ul  class="nav nav-pills">
                  <li class="active">
                    <a  href="#1a" data-toggle="tab">Primario: 1º a 7º</a>
                  </li>
                  <li><a href="#2a" data-toggle="tab">Secundario: 8º a 12º</a>
                  </li>
                </ul>
                <div class="tab-content clearfix">
                  <div class="tab-pane active" id="1a">
                    <div className="list-style">
                      <div className="col-lg-12 col-sm-12 col-xs-12">
                        <ul>
                          <li>Inglés.</li>
                          <li>Matemáticas</li>
                          <li>Práctica del lenguaje.</li>
                          <li>Ciencias naturales y tecnología.</li>
                          <li>Ciencias sociales con formación ética y ciudadanía.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="2a">
                    <div className="list-style">
                      <div className="col-lg-12 col-sm-12 col-xs-12">
                        <ul>
                          <li>Inglés.</li>
                          <li>Biología.</li>
                          <li>Geografía.</li>
                          <li>Matemáticas</li> 
                          <li>Lengua y literatura.</li>
                          <li>Física. (A partir de 9°)</li> 
                          <li>Química. (A partir de 9°)</li>
                          <li>Historia y formación ciudadana.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className='section-title'>
                <h2>Plan de estudio</h2>
              </div>
              <p className='texto'>
                Cada programa anual está desarrollado en 32 semanas. 
               <br/> Cada semana trabajarán lecciones armadas con el contenido teórico, material didáctico, prácticas y ejercitaciones. Al finalizar la semana se realizará una evaluación de lo aprendido. 
               <br/> Además, como refuerzo de repaso de contenidos y para diagnosticar la asimilación de saberes a mediano plazo, se realizará una evaluación trimestral autocorregida.
               <br/> De 4° a 8° las evaluaciones trimestrales de Matemáticas y Prácticas del lenguaje se realizarán vía online con el profesor a cargo de cada materia. Y de 9° a 12°, se añaden a dicha modalidad evaluativa las materias Física y Química.
              </p>
            </div>
          </div>
          <br></br>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h5>Formación Bíblica en todos los cursos (opcional)</h5>
          </div>
          <div className='col-md-12 section-title'>
          <h4>Horizonte no otorga certificados oficiales. Solo brindamos los contenidos para ser certificados.</h4>
          </div>
        </div>
       </div>
    )
  }
  