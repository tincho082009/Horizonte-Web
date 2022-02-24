import { useEffect } from "react";

export const Modality = (props) => {
    const toggleIcon = (e) => {
        document.querySelector(e.target)
            .prev('.panel-heading')
            .querySelector(".more-less")
            .classList.toggle('glyphicon-plus glyphicon-minus');
    }

    useEffect(()=>{
        document.querySelector('.panel-group').addEventListener('hidden.bs.collapse', toggleIcon);
        document.querySelector('.panel-group').addEventListener('shown.bs.collapse', toggleIcon);
    },[])
    
    return (
      <div id='modality' className='text-center'>
        <div className='container'>
          <div className='col-md-8 col-md-offset-2 section-title'>
            <h2>Sobre nuestro modo de trabajo.</h2>
            <p>
                Trabajamos y entregamos contenidos para cubrir tres <b>Bloques de Recursos Globales.</b>
            </p>
          </div>
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-xs-12">
                <div class="container demo">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="more-less glyphicon glyphicon-plus"></i>
                                        BRG Cognitivo
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                <div class="panel-body">
                                    Contiene todas las materias curriculares de los programas exigidos por las instituciones educativas nacionales o internacionales. Nuestro compromiso es motivar y acompañar a cada alumno para que alcance su máximo potencial en comprender y asimilar los contenidos gradualmente <a href="/#contents">(Ver Contenidos)</a>
                                </div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingTwo">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        <i class="more-less glyphicon glyphicon-plus"></i>
                                        BRG Vocacional
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="panel-body">
                                    Añadiremos talleres prácticos, cursos cortos, contenidos específicos, o materias desarrolladas, de las llamadas “orientaciones” en el nivel secundario final (como “Oficios y Tecnología”; “Ciencias humanas y sociales”; “Economía y Administración”; “Arte y Música”; “Educación Física”; “Capacitación Bíblica”; etc). El objetivo es que cada estudiante, junto a sus padres, descubran desde la niñez temprana sus intereses y habilidades individuales, y los desarrollen estratégicamente durante ambos niveles académicos.      
                                </div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingThree">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        <i class="more-less glyphicon glyphicon-plus"></i>
                                        BRG de Convivencia
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div class="panel-body">
                                    Contiene asesoramiento, consejos, ideas, referencias profesionales, etc. que ayuden a los padres y a los hijos en el manejo de sus emociones, roles y actividades, de la exigida convivencia en una familia que educa en casa. 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    )
  }