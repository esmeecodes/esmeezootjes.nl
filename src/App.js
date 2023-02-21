import "./App.css";
import React from "react";
import HelloWorld from "./HelloWorld";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          Esmée Zootjes <br /> creates web applications & marketing concepts
          <Navbar />
          <HelloWorld />
          <About />
          <Work />
          <Contact />
          <a href="mailto:hello@esmeezootjes.nl" className="btn btn-primary">
            get in touch!
          </a>
        </main>
        <footer>
          Coded by{" "}
          <a href="https://nl.linkedin.com/in/esmeezootjes" target="_blank">
            Esmée Zootjes
          </a>
        </footer>
      </div>
    </div>
  );
}
