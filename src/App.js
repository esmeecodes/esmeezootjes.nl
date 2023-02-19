import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWorld";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <HelloWorld />
        </main>
        <footer>Coded by Esmée Zootjes</footer>
      </div>
    </div>
  );
}
