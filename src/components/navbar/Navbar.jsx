import { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the menu open/close state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      {/* Animated Circle Menu */}
      <div className="circle-menu" onClick={toggleMenu}> 
        <img src="menu2.png" alt="" className="menu" />

        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      {/* Expanding Menu Links */}
      <div className={`menu-box ${isOpen ? "open" : ""}`} onClick={(e) => e.stopPropagation()}>
        <a href="hero">Home</a>
        <a href="#projects">Projects</a>
        <a href="#awards">Awards</a>
        <a href="#contact">Contact</a>


      </div>
      
      {/* Navbar Main Content */}
      <div className="wrapper">

      


        <div className="brand-name">
          <span>Abdulla Tamboli - Crafting Interactive Web Experiences</span>

          <a
          href="Abdulla_Updated_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
          
        >
        {/* <img src="resume.png" alt="Resume Icon" className="resume-icon" /> */}

          resume        </a>



        </div>
        <div className="social">
          <a href="https://github.com/ez-code-9172?tab=repositories">
            <img src="github-sign.png" alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/abdulla-tamboli-a002642b8" target="_blank">
          <img src="linkdin.jpg" alt="LinkedIn" />
          </a>

        </div>
      </div>
    </div>
  );
};

export default Navbar;