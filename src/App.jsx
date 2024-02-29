import { useState } from "react";
import reactLogo from "./assets/react.svg";
import bgimage from "./assets/bg.jpg";
import ContactInfo from "./Contactinfo";
import "./App.css";
import Navbar from "./navbar";
import React, { useEffect, useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  // const cardRef = useRef(null);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     const cardRect = cardRef.current.getBoundingClientRect();
  //     const centerX = cardRect.left + cardRect.width / 2;
  //     const centerY = cardRect.top + cardRect.height / 2;
  //     let x = e.pageX - centerX;
  //     let y = e.pageY - centerY;
  //     const transformValue = `translate(${x / 40}px, ${y / 40}px)`;
  //     cardRef.current.style.transform = transformValue;
  //   };
  //   window.addEventListener("mousemove", handleMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  return (
    <div className="container-fluid">
      <div className="heroSection">
        <div className="img-name">
          <div className="imgg">
            <img width="100" src="src\assets\profile-image.png" alt="bjsdb" />
          </div>
          <div className="name-dev">
            <div className="t1">Devesh</div>
            <div className="t2">Frontend Developer | UI designer</div>
          </div>
        </div>
        <div className="img-name-body">
          Welcome to my digital garden where I share what I'm learning about
          creating great products, becoming a better developer and growing a
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
