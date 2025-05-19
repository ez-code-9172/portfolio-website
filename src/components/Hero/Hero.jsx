import { useEffect, useState } from "react";
import "./Hero.scss";

const Hero= () => {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Web Developer",
    "Problem Solver",
    "Passionate Coder",
  ];

  // Rotate roles dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span>Abdulla Tamboli</span></h1>
        <p className="hero-subtitle">{roles[roleIndex]}</p>
        <p className="hero-description">
          Master of Computer Application (MCA) student with a strong foundation in
          Full Stack Development, specializing in the MERN stack. Experienced in
          building innovative web applications and committed to crafting engaging,
          user-centric experiences.
        </p>
        <div className="hero-experience">
          <h3>Internship Experience</h3>
          <p>Web Developer Intern at Thoughtpad Infotech, Baramati, Maharashtra</p>
          <p>Worked on frontend technologies including HTML, CSS, JavaScript, and React to ensure a smooth and responsive user experience.</p>
        </div>
        <a href="#projects" className="cta-button">View My Work</a>
      </div>
      <div className="hero-image">
        <img src="WhatsApp Image 2025-03-04 at 18.43.45_9f14ce5e.jpg" alt="Abdulla Tamboli" />
      </div>
    </section>
  );
};

export default Hero;
