"use client";

import Image from "next/image";
import { useState } from "react";

import "./header.css";
import { Navegation, Container } from "./styles"
export default function Header() {
  const [classOn, setClassOn] = useState(false);
  return (
    <Navegation>
      <Container>
        <Image
          width={200}
          height={90}
          className="logo-cyan"
          src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4"
          alt="logo Cyan"
        />

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
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">Sobre mim</a>
              </li>
              <li>
                <a href="/">Habilidades</a>
              </li>
              <li>
                <a href="/">Projetos</a>
              </li>
              <li>
                <a href="/">CONTATO</a>
              </li>
              <li></li>
            </ul>
          </nav>
        </div>
      </Container>
    </Navegation>
  );
}

