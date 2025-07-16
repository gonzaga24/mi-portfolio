import foto from "../assets/user.svg";
import CV_Alex from "../assets/CV_Alex_Gonzaga.pdf";
import ProjectCard from "../components/ProjectCard";

function HomePage() {
  const currentDate = new Date();
  const birthDate = new Date("06-09-2004");
  let age;
  
  if (currentDate.getMonth() > birthDate.getMonth()) {
    age = currentDate.getFullYear() - birthDate.getFullYear();
  } else {
    age = (currentDate.getFullYear() - 1) - birthDate.getFullYear();
  }

  return (
    <section className="mt-3">
        <section className="sobreMi container bg-secondary bg-gradient p-5">
          <div className="row align-items-center">
            <div className="col-7">
              <p className="texto">Hola, me llamo <b>Álex</b> tengo { age } años vivo en <b>Madrid</b>, soy <b>desarrollador web junior</b>, he estudiado un grado superior de <b>Desarrollo de aplicaciones web</b> y estoy comenzando a realizar proyectos propios especializandome en: <b>php, laravel, react</b> e intentando implementar <b>python</b> a mis proyectos ya que me parece un lenguaje bastante polivalente. </p>
            </div>
            <div className="col d-flex justify-content-center">
              <img className="foto" src={foto} alt="foto de alex" width={200} height={200} />
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <a href={CV_Alex} className="btn btn-primary" download="CV_Alex_Gonzaga.pdf" role="button" > Descargar CV  <b>&rarr;</b></a>
            </div>
          </div>
        </section>
        <section className="proyectoDestacados container d-grid bg-secondary bg-gradient mt-3 p-3">
            <h2>Proyectos destacados</h2>
            <div className="card-group justify-content-around">
              <ProjectCard numProyecto={1}></ProjectCard>
              <ProjectCard numProyecto={2}></ProjectCard>
              <ProjectCard numProyecto={3}></ProjectCard>
              <ProjectCard numProyecto={4}></ProjectCard>
            </div>
        </section>
    </section>
  );
    
}

export default HomePage;