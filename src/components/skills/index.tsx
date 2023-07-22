import "./skills.css";
import Image from "next/image";
import cardSkills from "@/data/skills";
import { BsTerminal } from "react-icons/bs";

interface Skills {
  title: string;
  img?: string;
  id: number;
}

export default function Skills() {
  return (
    <>
      <div className="skills">
        <div className="containerPage">
          <h1 className="title">
          <BsTerminal /> Portfolio: <span className="nav"> ~/Habilidades$ </span>
          </h1>

          <div className="skills-flex-container">
            {cardSkills.map((skill) => {
              return (
                <>
                  <div className="box">
                    <Image
                    className="imageSkills"
                      width={60}
                      height={60}
                      src={skill.img}
                      alt={skill.title}
                    />
                    <h4>{skill.title}</h4>
                  </div>
                </>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
