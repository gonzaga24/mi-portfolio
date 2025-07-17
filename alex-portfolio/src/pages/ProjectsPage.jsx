import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  return (
    <section className="container mt-5 bg-secondary bg-gradient p-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col"><ProjectCard numProject={1}></ProjectCard></div>
        <div className="col"><ProjectCard numProject={2}></ProjectCard></div>
        <div className="col"><ProjectCard numProject={3}></ProjectCard></div>
        <div className="col"><ProjectCard numProject={4}></ProjectCard></div>
        <div className="col"><ProjectCard numProject={1}></ProjectCard></div>
        <div className="col"><ProjectCard numProject={4}></ProjectCard></div>
        <div className="col"><ProjectCard numProject={3}></ProjectCard></div>
        <div className="col"><ProjectCard numProject={2}></ProjectCard></div>
      </div>
    </section>
  );
    
}

export default ProjectsPage;