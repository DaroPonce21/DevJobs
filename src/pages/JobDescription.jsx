import "../styles/JobDescription.css";

import { Link, useParams } from "react-router-dom";

import useJobs from "../hooks/useJobs";
import useAppliedJobs from "../hooks/useAppliedJobs";

import NavBar from "./../components/NavBar";

const JobDescription = () => {
  const { id } = useParams();

  const { trabajos, loading, error, refetch } = useJobs();

  const job = trabajos.find((t) => t.id === id);

  const { handleApply, aplicado } = useAppliedJobs(id);

  // Estado de carga
  if (loading) {
    return (
      <>
        <NavBar />

        <main className="container">
          <section className="job-state">
            <p>Cargando empleo...</p>
          </section>
        </main>
      </>
    );
  }

  // Error al cargar los empleos
  if (error) {
    return (
      <>
        <NavBar />

        <main className="container">
          <section className="job-state">
            <h1>No pudimos cargar el empleo</h1>
            <p>{error}</p>

            <button type="button" onClick={refetch}>
              Reintentar
            </button>
          </section>
        </main>
      </>
    );
  }

  // El empleo solicitado no existe
  if (!job) {
    return (
      <>
        <NavBar />

        <main className="container">
          <section className="job-state">
            <h1>Empleo no encontrado</h1>

            <p>
              La oferta que estás buscando no existe o ya no está disponible.
            </p>

            <Link to="/empleos">Volver a empleos</Link>
          </section>
        </main>
      </>
    );
  }

  const responsabilidades = [
    "Participar en el desarrollo y mantenimiento de las funcionalidades del producto.",
    "Colaborar con el equipo para analizar requerimientos y proponer soluciones.",
    "Escribir código claro, mantenible y alineado con las buenas prácticas del proyecto.",
    "Participar en revisiones, pruebas y mejoras continuas de la aplicación.",
  ];

  const requisitos = [
    `Experiencia o conocimientos acordes a un perfil ${job.data.nivel}.`,
    `Conocimientos en ${job.data.technology.join(", ")}.`,
    "Capacidad para trabajar en equipo y comunicar decisiones técnicas.",
    "Interés por aprender y adaptarse a nuevas herramientas y tecnologías.",
  ];

  return (
    <>
      <NavBar />

      <main className="container">
        <header className="directorio">
          <Link to="/empleos">
            <p>Empleos</p>
          </Link>

          <p>/</p>

          <p className="job-name">{job.titulo}</p>
        </header>

        <section className="title">
          <header>
            <div className="title-bottom">
              <h1>{job.titulo}</h1>

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
              <p>{job.ubicacion}</p>
            </div>
          </header>
        </section>

        <section className="descripcion">
          <article>
            <h2>Descripción del puesto</h2>

            <p>{job.descripcion}</p>
          </article>

          <article>
            <h2>Responsabilidades</h2>

            <ul>
              {responsabilidades.map((responsabilidad) => (
                <li key={responsabilidad}>
                  <span className="check-icon">✓</span>
                  {responsabilidad}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h2>Requisitos</h2>

            <ul>
              {requisitos.map((requisito) => (
                <li key={requisito}>
                  <span className="check-icon">✓</span>
                  {requisito}
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h2>Acerca de {job.empresa}</h2>

            <p>
              {job.empresa} busca incorporar talento para seguir desarrollando
              sus productos y servicios digitales. La posición ofrece la
              oportunidad de trabajar con un equipo tecnológico y participar en
              proyectos orientados a producto.
            </p>
          </article>
        </section>

        <div className="footer-bottom">
          <button
            className={aplicado ? "button-apply-aplicado" : "button-apply"}
            onClick={handleApply}
          >
            {aplicado ? "Aplicado" : "Aplicar"}
          </button>
        </div>
      </main>
    </>
  );
};

export default JobDescription;
