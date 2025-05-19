import { useEffect, useState } from "react";
import "./Skills.scss";

const skills = [
  { name: "Java", level: 90 },
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "MERN Stack", level: 70 },
];

const tools = [
  { name: "VS Code", icon: "vscode.png" },
  { name: "IntelliJ", icon: "intellij.png" },
  { name: "Git", icon: "git.png" },
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: animated ? `${skill.level}%` : "0%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <h3 className="tools-title">Tools I Use</h3>
      <div className="tools-container">
        {tools.map((tool, index) => (
          <div className="tool" key={index}>
            <img src={tool.icon} alt={tool.name} className="tool-icon" />
            <span>{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
