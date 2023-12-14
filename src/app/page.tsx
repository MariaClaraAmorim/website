"use client";

import About from "@/components/about";
import HomePage from "@/components/home";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { useContext, useEffect, useState } from "react";

import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiIdentification } from "react-icons/hi";

import { ThemeProvider } from "styled-components";
import "./header.css";
import { GlobalStyles, darkTheme, lightTheme } from "./theme";
import { ScrollTop } from "@/components/scrollTop";
import LangContext from "@/context/langContext";
import { navigationTxtEng, navigationTxtPt } from "@/lang/langTexts";

export default function Home({ scrollPosition }: { scrollPosition: number }) {
  const [classOn, setClassOn] = useState(false);

  const [theme, setTheme] = useState("light");

  const pathname = usePathname();
  const { setLang, lang } = useContext(LangContext);
  const [opacity, setOpacity] = useState(0.3);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
    setTimeout(() => {
      elem?.scrollIntoView({
        behavior: "smooth",
      });
    }, 400);
  };

  const handleOpacity = () => {
    if (scrollPosition < 10) {
      return 0.3;
    } else if (scrollPosition < 150) {
      const factor = (scrollPosition - 10) * 0.005 + 0.3;
      return factor;
    } else {
      return 1;
    }
  };

  useEffect(() => {
    const newOpacity = handleOpacity();
    setOpacity(newOpacity);
  }, [scrollPosition]);

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
                    <a className="details" href="#home">
                      ~/Home$
                    </a>
                  </li>
                  <li>
                    <a className="details" href="#sobre">
                      ~/Sobre$
                    </a>
                  </li>
                  <li>
                    <a className="details" href="#habilidades">
                      ~/Habilidades$
                    </a>
                  </li>
                  <li>
                    <a className="details" href="#projetos">
                      ~/Projetos$
                    </a>
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
