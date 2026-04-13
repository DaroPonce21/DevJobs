import { Link } from "react-router-dom";
import useAppliedJobs from "../hooks/useAppliedJobs";

const JobCard = ({ job }) => {
  const { handleApply, aplicado } = useAppliedJobs(job.id);

  return (
    <article>
      <header>
        <div className="title-bottom">
          <Link to={`/empleos/${job.id}`}>
            <h3>{job.titulo}</h3>
          </Link>
          <button
            className={aplicado ? "button-apply-aplicado" : "button-apply"}
            onClick={handleApply}
          >
            {aplicado ? "Aplicado" : "Aplicar"}
          </button>
        </div>
        <div className="props">
          <p>{job.empresa}</p>
          <p>|</p>
          <p className="tech">
            {job.data.technology.join(" - ").toUpperCase()}
          </p>
          <p>|</p>
          <p className="ubicacion">{job.ubicacion.toUpperCase()}</p>
          <p>|</p>
          <p className="nivel">{job.data.nivel.toUpperCase()}</p>
          <p>|</p>
          <p className="nivel">{new Date(job.fecha).toLocaleDateString()}</p>
        </div>
      </header>
      <div>
        <p>{job.descripcion}</p>
      </div>
    </article>
  );
};

export default JobCard;
