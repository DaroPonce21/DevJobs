import React from "react";
import Hero from "./../components/Hero";
import Features from "./../components/Features";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar variant="home" />
      <main className="container">
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default Home;
