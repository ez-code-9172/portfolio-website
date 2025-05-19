import { useState } from "react";
import "./Award.scss";

const awards = [
  {
    title: "IIT Bombay Certificates" ,
    icon: "certificate.png",
    description: (
      <ul className="award-list">
        <li>Successfully completed C Language course from IIT Bombay.</li>
        <li>Successfully completed HTML course from IIT Bombay.</li>
        <li>Successfully completed RDBMS course from IIT Bombay.</li>
        <li>Successfully completed Arduino course from IIT Bombay.</li>
        <li>Successfully completed Git course from IIT Bombay.</li>
      </ul>
    ),
  },
  {
    title: "State-Level Competitions",
    icon: "trophy.png",
    description: (
      <ul className="award-list">
        <li>1st Rank - Poster Presentation at Mudhoji College, Phalthan.</li>
        <li>2nd Rank - Research Paper at Mudhoji College, Phalthan.</li>
        <li>3rd Rank - Research Paper at VPASC College, Baramati.</li>
      </ul>
    ),
  },
  {
    title: "Other Achievements",
    icon: "medal.jpg",
    description: (
      <ul className="award-list">
        <li>VIOSA Corporate Mentorship Program Certificate.</li>
        <li>1st Rank - College Level Coding Competition.</li>
        <li>Nomination for Best Student Performance in Cyber Siksha for Suraksha Program, in association with Quick Heal Foundation </li>

      </ul>
    ),
  },
];

const Award = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePopup = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="awards-section" id="awards">
      <h2 className="awards-title">Awards & Achievements</h2>
      <div className="awards-container">
        {awards.map((award, index) => (
          <div
            key={index}
            className={`award-card ${activeIndex === index ? "active" : ""}`}
            onClick={() => togglePopup(index)}
          >
            <img src={award.icon} alt={award.title} className="award-icon" />
            <h4 className="award-title">{award.title}</h4>

            {activeIndex === index && (
              <div className="award-popup">{award.description}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Award;
