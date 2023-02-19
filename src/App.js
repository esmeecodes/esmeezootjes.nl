import "./App.css";
import HelloWorld from "./HelloWorld";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          Esmée Zootjes <br /> creates web applications & marketing concepts
          <Navbar />
          <HelloWorld />
          <a href="#" className="btn btn-primary">
            get in touch!
          </a>
        </main>
        <footer>Coded by Esmée Zootjes</footer>
      </div>
    </div>
  );
}
