import listaProyectos from "../listaProyectos.json";

function ProjectCard(props) {
  //Variables
  const {numProyecto} = props;

  //Recogemos el proyecto por el número de proyecto que recibimos desde el json donde estará el listado de proyectos.
  const proyecto = listaProyectos.find(p => p.id === numProyecto);

  //Elemento que mostramos al usuario
  return (
    <div className="card border-dark">
      <img src={proyecto.imagen} height={100} alt="portada del proyecto" className="card-img-top p-2" />
      <div className="card-body">
        <h5 className="card-title"> {proyecto.titulo} </h5> {/* titulo del proyecto*/}
        <p className="card-text"> {proyecto.descripcion} </p> {/* breve descripción del proyecto */}
        <a href={proyecto.repositorio} target="_blank" className="btn btn-primary">Visitar repositorio <b>&rarr;</b></a>
      </div>
    </div>
  )
}

export default ProjectCard;