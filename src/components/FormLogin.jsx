import "../styles/FormLogin.css";

const FormLogin = () => {
  return (
    <div>
      <form action="submit" className="loginForm">
        <div className="LoginTopForm">
          <label htmlFor="email" className="visually-hidden">
            introdusca su email
          </label>
          <input
            className="loginInputs"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <label htmlFor="password" className="visually-hidden">
            introdusca su contraseña
          </label>
          <input
            className="loginInputs"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="remember-forgot">
          <label htmlFor="checkbox" className="visually-hidden">
            Seleccionar para recordar usuario
          </label>
          <input type="checkbox" name="checkbox" id="checkbox"></input>
          <label className="rememberMe" htmlFor="checkbox">
            Recuerdame
          </label>
          <a className="restartPass" href="/construccion" title="Próximamente">
            Olvide mi contraseña
          </a>
        </div>
        <div className="button">
          <button
            className="button-apply-Login"
            type="submit"
            title="Próximamente"
          >
            Ingresar
          </button>
        </div>
        <legend className="create-accout">¿No tienes cuenta?</legend>
        <div className="create-button" title="Próximamente">
          <a
            className="create-button"
            title="Próximamente"
            href="/construccion"
          >
            Crear cuenta para Desarrollador
          </a>
          <a href="/construccion">Crear cuenta para Empresa</a>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
