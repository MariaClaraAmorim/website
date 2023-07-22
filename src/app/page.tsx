"use client";

import About from "@/components/about";
import HomePage from "@/components/home";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import "./header.css";
import { GlobalStyles, darkTheme, lightTheme } from "./theme";
import { ScrollTop } from "@/components/scrollTop";

export default function Home() {
  const [classOn, setClassOn] = useState(false);

  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const [themeMoon, setThemeMoon] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <header>
          <div className="container">
            <div className="nameHeader">
              <p className="name">&lt;Maria Clara</p>
              <p className="surname">A.</p>
              <p className="name">/&gt;</p>
            </div>

            <div
              className={classOn ? "menu-section on" : "menu-section"}
              onClick={() => setClassOn(!classOn)}
            >
              <div className="menu-toggle">
                <div className="one"></div>
                <div className="two"></div>
                <div className="three"></div>
              </div>

              <nav>
                <ul>
                  <li>
                    <a className="details" href="#home">~/Home$</a>
                  </li>
                  <li>
                    <a className="details" href="#sobre">~/Sobre$</a>
                  </li>
                  <li>
                    <a className="details" href="#habilidades">~/Habilidades$</a>
                  </li>
                  <li>
                    <a className="details" href="#projetos">~/Projetos$</a>
                  </li>
                  <li>
                    <a className="details" href="#contato">~/Contato$</a>
                  </li>
                  <li>
                    <button onClick={switchTheme}>Switch Theme</button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <div id="home">
          <HomePage />
        </div>

        <div id="sobre">
          <About />
          <ScrollTop />
        </div>

        <div id="habilidades">
          <Skills />
          <ScrollTop />
        </div>
        <div id="projetos">
          <Projects />
          <ScrollTop />
        </div>
      </ThemeProvider>
    </>
  );
}
