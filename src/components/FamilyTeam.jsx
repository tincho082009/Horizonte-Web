import img1 from "../assets/img/team.jpg"

export const FamilyTeam = (props) => {
    return (
      <div id="EquipoDeFamilias">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6" >
                {" "}
              <img src={img1} className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
                <div className="about-text">
                <h2>EQUIPO DE FAMILIAS.</h2>
                <p>En todo el mundo existe un movimiento de familias Homeschoolers que decidimos educar con libertad. 
                  Asumimos nuestra responsabilidad constitucional para enseñarles a nuestros hijos desde casa. 
                  <br/>Fue duro empezar. No sabíamos cómo hacerlo y la información era confusa. Costaba encontrar recursos para enseñar matemática o lengua a los chicos. Pero lo más difícil fue que nos sentíamos muy solos, porque éramos pocos y dispersos.
                  <br/>Sin conocernos, caminábamos hacia el mismo horizonte de educar en casa. Y nos fuimos encontrando con otras familias entre mails, páginas web, y redes sociales, donde descubríamos novedades o nos respondían preguntas. Nos alegramos; nos abrazamos; ¡Y nos ayudamos! 
                  <br/>Tres de esas familias argentinas que evolucionamos juntas durante diez años, con un papá novato que es pedagogo, decidimos asociarnos para crear este espacio, donde educar en casa se les haga más fácil a todas las familias que llevan a sus hijos hacia el mismo horizonte de la libertad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  