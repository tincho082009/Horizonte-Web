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
                Nuestro programa anual está dividido en 32 semanas, desarrolladas con diferentes recursos como videos, archivos PDF, elementos multimedia interactivos, etc.
               <br/> Cada semana concluye con trabajos prácticos o evaluaciones semanales para imprimir o en forma digital, para el seguimiento y avance académico de los alumnos. 
               <br/> Durante el ciclo lectivo se programarán algunos encuentros vía Google Meet o Zoom (en las areas de Matemáticas y Prácticas del lenguaje, Física y Química en los grados mayores) Estos encuentros NO serán obligatorios, serán opcionales.
               <br/> La finalidad de estos encuentros es que los alumnos puedan interactuar entre ellos y con los profesores, diagnosticar la asimilación de contenidos a través de situaciones de la vida cotidiana desarrollando la expresión oral y el pensamiento analítico.
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
  