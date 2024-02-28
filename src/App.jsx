import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ContactInfo from "./Contactinfo";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div className="container-fluid">
        <div className="heroSection">
          <div className="mb-3 img-name">
            <div className="imgg me-4" >
              <img width="60" src="src\assets\react.svg" alt="bjsdb" />
            </div>
            <div className="name-dev">
              <div className="t1">Devesh</div>
              <div className="t2">Developer at Barclays london</div>
            </div>
          </div>
          <div className="img-name-body">
            Welcome to my digital garden where I share what I'm learning 
            <br/>
            about shipping great products, becoming a better developer and
            <br/>
            growing a carrer in tech.
          </div>
        </div>
      </div>
  );
}

export default App;
