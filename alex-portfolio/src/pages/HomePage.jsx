import foto from "../assets/user.svg";
import CV_Alex from "../assets/CV_Alex_Gonzaga.pdf";
import ProjectCard from "../components/ProjectCard";

function HomePage() {
  return (
    <section className="mt-3">
        <section className="sobreMi container d-flex justify-content-between bg-secondary bg-gradient p-5">
            <p className="texto">Hola, me llamo Álex tengo {new Date().getFullYear() - 2004} años vivo en Madrid, soy desarrollador web</p>
            <img className="foto" src={foto} alt="foto de alex" width={200} />
        </section>
        <section className="proyectoDestacados container d-grid bg-secondary bg-gradient mt-3 p-2">
            <h2>Proyectos destacados</h2>
            <div className="container d-flex justify-content-around">
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
              <ProjectCard></ProjectCard>
            </div>
        </section>
    </section>
  );
    
}

export default HomePage;