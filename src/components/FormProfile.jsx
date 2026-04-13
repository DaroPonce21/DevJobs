import "../styles/FormProfile.css";

const FormProfile = () => {
  return (
    <form className="profileForm">
      {/* ---------------- PERSONAL ---------------- */}
      <section className="form-section">
        <h3>Información personal</h3>

        <div className="input-row">
          <input className="profileInput" placeholder="Nombre" />
          <input className="profileInput" placeholder="Correo electrónico" />
        </div>
        <input
          className="profileInput"
          type="text"
          placeholder="País - Ciudad"
        />

        <textarea
          className="profileTextarea"
          placeholder="Cuenta brevemente quién eres"
        ></textarea>
      </section>

      {/* ---------------- EXPERIENCIA ---------------- */}
      <section className="form-section">
        <h3>Experiencia</h3>
        <div className="input-row">
          <input className="profileInput" type="text" placeholder="Cargo" />

          <input className="profileInput" type="text" placeholder="Empresa" />
        </div>
        <div className="date-group">
          <input className="profileInput" type="date" />
          <input className="profileInput" type="date" />
        </div>

        <label className="checkbox-label">
          <input type="checkbox" />
          Actualmente trabajo aquí
        </label>
      </section>

      {/* ---------------- HABILIDADES ---------------- */}
      <section className="form-section">
        <h3>Habilidades</h3>

        <div className="skills">
          {[
            "JavaScript",
            "React",
            "Angular",
            "Node.js",
            "HTML",
            "CSS",
            "Python",
            "Java",
          ].map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ---------------- CV ---------------- */}
      <section className="form-section">
        <h3>Cargar CV</h3>

        <div className="upload-box">
          <input type="file" id="cvUpload" hidden />

          <label htmlFor="cvUpload" className="upload-label">
            <div className="upload-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 16v-8" />
                <path d="M9 11l3-3l3 3" />
                <path d="M20 16.58a5 5 0 0 0 -1.9 -9.58a5 5 0 0 0 -9.9 1" />
                <path d="M8 16h-2a3 3 0 0 0 0 6h14a3 3 0 0 0 0 -6h-2" />
              </svg>

              <p>
                <strong>Sube tu CV</strong> o arrastra y suelta
              </p>
              <span>PDF, DOC, DOCX (MAX. 5MB)</span>
            </div>
          </label>
        </div>
      </section>

      {/* ---------------- SUBMIT ---------------- */}
      <button className="profileButton" type="submit">
        Guardar perfil
      </button>
    </form>
  );
};

export default FormProfile;
