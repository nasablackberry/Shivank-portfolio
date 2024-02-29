import { useState } from "react";
import reactLogo from "./assets/react.svg";
import bgimage from "./assets/bg.jpg";
import ContactInfo from "./Contactinfo";
import "./App.css";
import Navbar from "./navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid">
      <div className="heroSection">
        <div className="img-name">
          <div className="imgg">
            <img width="80" src="src\assets\profile-image.png" alt="bjsdb" />
          </div>
          <div className="name-dev">
            <div className="t1">Devesh</div>
            <div className="t2">Frontend Devloper | UI designer</div>
          </div>
        </div>
        <div className="img-name-body">
          Welcome to my digital garden where I share what I'm learning about
          shipping great products, becoming a better developer and growing a
          carrer in tech.
        </div>
      </div>
      <div className="navbar-hero">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
