import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Offers from "./pages/Offers"
import "./App.css";

function App() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="offers">
        <Offers/>
      </section>
    </div>
  );
}

export default App;
