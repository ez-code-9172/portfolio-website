import './Project.scss'

const projects = [
    {
      title: "Blogging Website",
      description:
        "Built a multi-user blogging platform using the MERN stack with authentication, user interaction, and cloud services.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
    },
    {
      title: "E-Commerce Website",
      description:
        "Developed a dynamic e-commerce platform using Django with a user-friendly UI and a robust content management system.",
      techStack: ["PHP", "HTML", "CSS", "MySQL"],
    },
    {
      title: "Personal Desktop Assistant",
      description:
        "Built a virtual assistant using Python and OpenAI API with voice recognition and text-to-speech capabilities.",
      techStack: ["Python", "OpenAI", "TensorFlow", "NLTK"],
    },
    {
      title: "Real Estate Management System",
      description:
        "Created a platform for property listings with user registration and enhanced responsiveness using JavaScript.",
      techStack: ["HTML", "CSS", "JavaScript"],
    },
    
  ];
  
  const Project = () => {
    return (
      <section className="project-section" id="projects">
        <h2 className="project-title">My Projects</h2>
        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-pill">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Project;
  