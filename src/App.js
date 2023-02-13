import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWorld";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <main>
          <HelloWorld />
        </main>
        <footer>Coded by Esmée Zootjes</footer>
      </div>
    </div>
  );
}
