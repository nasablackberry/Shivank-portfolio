import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ContactInfo from "./Contactinfo";
import "./App.css";
import Navbar from "./navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container-fluid">
      <div className="heroSection">
        <div className="mb-3 img-name">
          <div className="imgg me-4">
            <img width="80" src="src\assets\profile-image.png" alt="bjsdb" />
          </div>
          <div className="name-dev">
            <div className="t1">Devesh</div>
            <div className="t2">Frontend Devloper | UI designer</div>
          </div>
        </div>
        <div className="img-name-body">
          Welcome to my digital garden where I share what I'm learning
          <br />
          about shipping great products, becoming a better developer and
          <br />
          growing a carrer in tech.
        </div>
      </div>
      <div className="navbar-hero">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
