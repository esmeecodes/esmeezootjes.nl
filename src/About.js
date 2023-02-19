import "./About.css";
import HelloWorld from "./HelloWorld";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
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
