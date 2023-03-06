import "./App.css";
import React from "react";
import HelloWorld from "./HelloWorld";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Work from "./Work";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Header />
          <Navbar />
          <HelloWorld />
          <About />
          <Work />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}
