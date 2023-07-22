import Image from "next/image";
import "./homepage.css";
import { BsGithub, BsInstagram, BsLinkedin, BsTerminal } from "react-icons/bs";
import dev from "src/assets/images/dev.png";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="containerPage">
       
      <div className="contentPage">
        <div>
          <h1 className="office">Development</h1>
          <h2 className="office">FrontEnd</h2>
          <div className="contact">
            <button className="btn">
              <a href="https://web.whatsapp.com/send?phone=77999313620">Contratar serviço</a>
            </button>
            <button className="btn">
              <a href="/cvs/Curriculo-MariaClaraVieiradeAmorim.pdf" download>
                Baixar CV
              </a>
            </button>

            <div className="network">
              <Link href={"https://www.instagram.com/mariaclara.amorim_/"}>
                <BsInstagram />
              </Link>

              <Link href={"https://github.com/MariaClaraAmorim"}>
                <BsGithub />
              </Link>

              <Link href={"https://www.linkedin.com/in/mariaclara-amorim/"}>
                <BsLinkedin />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <Image className="image" src={dev} width={350} height={250} alt="" />
        </div>
      </div>
    </div>
  );
}
