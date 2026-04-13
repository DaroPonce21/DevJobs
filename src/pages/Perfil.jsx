import React from "react";
import "../styles/Perfil.css";
import AsideProfile from "../components/AsideProfile";
import FormProfile from "../components/FormProfile";

const Perfil = () => {
  return (
    <div className="container">
      <div className="profile-layout">
        <aside>
          <AsideProfile />
        </aside>
        <main className="profile-main">
          <section className="profile-header">
            <h1>Mi perfil</h1>
            <p>Actualiza tu información personal y profesional</p>
          </section>
          <section>
            <FormProfile />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Perfil;
