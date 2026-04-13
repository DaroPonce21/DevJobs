import React from "react";
import Hero from "./../components/Hero";
import Features from "./../components/Features";
import MainNavBar from "../components/MainNavBar";

const Home = () => {
  return (
    <>
      <MainNavBar />
      <main className="container">
        <Hero />
        <Features />
      </main>
    </>
  );
};

export default Home;
