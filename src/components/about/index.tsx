import "./about.css";
import Image from "next/image";
import { BsTerminal } from "react-icons/bs";
import photo from "src/assets/images/photo.png";

export default function About() {
  return (
    <>
      <div className="containerPage">
        <h1 className="title">
          <BsTerminal /> Portfolio: <span className="nav"> ~/Sobre$ </span>
        </h1>
        <div className="contentAbout">
          <div className="photo">
            <Image
              className="imageProfile"
              src={photo}
              width={350}
              height={250}
              alt=""
            />
          </div>
          <div className="information">
            <h2>Olá, me chamo Maria Clara Amorim!</h2>
            <p>
              Sou web developer frontend, trabalho com JavaScript, ReactJS,
              TypeScript e PHP. Formada em T.I pelo Instituto Federal da Bahia
              (IFBA). Atualmente universitária do curso Fisioterapia na UNIPLAN.
              Trabalho desenvolvendo aplicações internas para empresas
              (e-commerce, chamados, biblioteca e etc).
            </p>

            <div className="codeItem">
              <div>
                <div data-aos="zoomIn">
                  <span className="comment"></span>
                  <span className="purple">.infos {"\u007B"}</span>
                  <div>
                    <p className="blue">
                      {" "}
                      Nome:
                      <span className="orange">Maria Clara;</span>
                    </p>
                  </div>

                  <div>
                    <p className="blue">
                      Sobrenome:
                      <span className="orange">Amorim;</span>
                    </p>
                  </div>
                  <div>
                    <p className="blue">
                      Idade:
                      <span className="orange">21 anos;</span>
                    </p>
                  </div>
                  <span className="purple">{"\u007D"}</span>
                </div>

                <div data-aos="zoomIn">
                  <span className="comment"></span>
                  <span className="purple">.formação {"\u007B"}</span>
                  <div>
                    <p className="blue">
                      Curso:
                      <span className="orange">Técnico em Informática;</span>
                    </p>
                  </div>
                  <div>
                    <p className="blue">
                      Local:
                      <span className="orange">IFBA;</span>
                    </p>
                  </div>
                </div>
                <span className="purple">{"\u007D"}</span>
              </div>
              <div>
                <div data-aos="zoomIn">
                  <span className="comment"></span>
                  <span className="purple">.experiência {"\u007B"}</span>
                  <div>
                    <p className="blue">
                      Função:
                      <span className="orange">Dev Front-end;</span>
                    </p>
                  </div>
                  <div>
                    <p className="blue">
                      Local:
                      <span className="orange">Dantas Eletro;</span>
                    </p>
                  </div>
                  <div>
                    <p className="blue">
                      Período:
                      <span className="orange">Agosto 2021 - Junho 2023;</span>
                    </p>
                  </div>
                  <br />
                  <div>
                    <p className="blue">
                      Função:
                      <span className="orange">Suporte de TI;</span>
                    </p>
                  </div>
                  <div>
                    <p className="blue">
                      Local:
                      <span className="orange">ACP Group;</span>
                    </p>
                  </div>
                  <div>
                    <p className="blue">
                      Período:
                      <span className="orange">
                        Agosto 2023 - Outubro 2023 (temporário);
                      </span>
                    </p>
                  </div>
                  <span className="purple">{"\u007D"}</span>
                </div>

                <div data-aos="zoomIn">
                  <span className="comment"></span>
                  <span className="purple">.conhecimentos {"\u007B"}</span>
                  <div>
                    <p className="blue">
                      Front-end:{" "}
                      <span className="orange">
                        HTML, CSS, JavaScript, ReactJS, TypeScript;
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="blue">
                      Back-end:
                      <span className="orange">PHP, MySQL;</span>
                    </p>
                  </div>
                  <span className="purple">{"\u007D"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
