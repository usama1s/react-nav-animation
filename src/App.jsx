import { lazy, Suspense, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const gradElementRef = useRef(null);
  const transitionIntervalRef = useRef(null);
  let keyframePercentage = 0;

  useEffect(() => {
    const smoothTransition = () => {
      keyframePercentage += 1;

      if (keyframePercentage <= 100) {
        const keyframeValue = `${keyframePercentage}%`;
        gradElementRef.current.style.backgroundImage = `radial-gradient(transparent ${keyframeValue}, black 100%)`;
      } else {
        clearInterval(transitionIntervalRef.current);
      }
    };

    transitionIntervalRef.current = setInterval(smoothTransition, 50);

    return () => {
      clearInterval(transitionIntervalRef.current);
    };
  }, []);

  return (
    <div ref={gradElementRef} id="grad1">
          <div className="overlay"></div>
      <Router>
        <div className="NavBars">
          <Navbar title="redeem" subTitle="redeem your tokens" />
        </div>

        <div style={{ height: "100%" }}></div>
      </Router>
    </div>
  );
}

export default App;
