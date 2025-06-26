import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiSass,
  SiCss3,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiAmazon,
  SiPhp,
  SiNextdotjs,
  SiVite,
  SiDocker,
} from "react-icons/si";
import "./technology.scss";

const allTechItems = [
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Javascript", icon: <SiJavascript /> },
  { name: "Python", icon: <SiPython /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Sass", icon: <SiSass /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "AWS", icon: <SiAmazon /> },
  { name: "Docker", icon: <SiDocker /> },
];

export default function Tecnologias() {
  return (
    <div className="tecnologias-card">
      <div className="tech-grid">
        {allTechItems.map((tech) => (
          <div key={tech.name} className="tech-icon-wrapper">
            <div className="icon" data-tooltip={tech.name}>
              {tech.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
