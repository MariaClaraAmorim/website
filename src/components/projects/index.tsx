import { useEffect, useState } from "react";
import "./projects.css";
import Image from "next/image";
import Link from "next/link";
import { BsTerminal } from "react-icons/bs";

import projects from "@/data/projects";

interface Projects {
  slug: string;
  url: string;
  title: string;
  type: string;
  img: string;
}

export default function Projects() {
  const [itemsApi, setItemsApi] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function getGitHubAPI() {
      try {
        const res = await fetch(
          "https://api.github.com/users/MariaClaraAmorim/repos",
          {
            signal: abortController.signal,
          }
        );

        if (!res.ok) {
          throw new Error(res.status.toString());
        }

        const data = await res.json();
        setItemsApi(data);
      } catch (error) {
        console.log(error);
      }
    }

    getGitHubAPI();

    return () => abortController.abort();
  }, []);

  return (
    <>
      <div className="containerPage">
        <h1 className="title">
          <BsTerminal /> Portfolio: <span className="nav"> ~/Projetos$ </span>
        </h1>
        <div>
          <div>
            <ul className="ul">
              {projects.slice(0, 9).map((project) => {
                return (
                  <li className="li" key={project.id}>
                    <div className="box">
                      <Link href={`/${project.url}`} key={project.id}>
                        <div className="project">
                          <Image
                            className="imageProject"
                            width={400}
                            height={250}
                            src={project.img}
                            alt={project.title}
                          />
                          <div className="infor">
                            <h2>{project.title}</h2>
                            <span>{project.type}</span>
                            <span>{project.description}</span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
