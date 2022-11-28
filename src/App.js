import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./darkMode.css";
import lightbulb from "./assets/images/lightbulb.svg";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import React, { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <img src={lightbulb} title="Dark Mode" onClick={toggleTheme} width="25" height="25"/>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
