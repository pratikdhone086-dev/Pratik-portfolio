
import "./App.css";
import "./index.css";
import { useEffect } from "react";

const skills = [
  "Java",
  "Spring Boot",
  "React.js",
  "JavaScript",
  "MySQL",
  "HTML5",
  "CSS3",
  "REST APIs",
];


const projects = [
  {
    number: "01",
    name: "CivicTrack",
    type: "CIVIC MANAGEMENT PLATFORM",
    description:
      "A complaint management platform that helps citizens submit complaints and track their progress through dedicated portals.",
    tech: ["Java", "Spring Boot", "Spring Security", "MySQL"],
    features: [
      "Online Complaint Registration",
      "Complaint Status Tracking",
      "Role-Based Authentication",
      "Admin Complaint Management",
    ],
   contribution: [
  "Developed Citizen and Admin modules",
  "Implemented complaint registration and tracking",
  "Built role-based authentication",
  "Managed complaint records using MySQL",
],
    image: "/civictrack-preview.png",
    github: "https://github.com/pratikdhone086-dev/CivicTrack",
    live: "https://civictrack-67qi.onrender.com",
  },
  {
    number: "02",
    name: "Coaching Management System",
    type: "EDUCATION MANAGEMENT",
    description:
      "A management system designed to organize students, courses, attendance, fees and academic records.",
    tech: ["Java", "Spring Boot", "MySQL"],
    features: [
      "Student Management",
      "Course Management",
      "Attendance Tracking",
      "Fees Management",
      "Academic Records",
    ],
contribution: [
  "Developed Student and Teacher management modules",
  "Implemented Attendance and Fees management",
  "Built Course and Academic Records modules",
  "Managed application data using MySQL",
],
    image: "/Coaching.png",
    github:
      "https://github.com/pratikdhone086-dev/Coaching-Management-System",
    live: "https://coaching-management-system-1u53.onrender.com",
  },
];


function App() {
  useEffect(() => {
  const revealElements = document.querySelectorAll(".reveal");

  const handleScroll = () => {
    revealElements.forEach((element) => {
      const position = element.getBoundingClientRect().top;

      if (position < window.innerHeight - 100) {
        element.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home">PD.</a>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let's Talk ↗</a>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-top">
            <span>JAVA FULL STACK DEVELOPER</span>
            <span>CODE WITH PURPOSE</span>
          </div>

          <div className="hero-content">
            <div className="hero-intro">
              <p className="eyebrow">HELLO, I'M PRATIK</p>
              <h2>Building<br />Ideas into<br /><span>Reality.</span></h2>
              <p className="hero-description">
                Passionate about technology. Focused on building meaningful
                solutions.
              </p>
              <a className="primary-button" href="#projects">
                Explore My Work <span>↗</span>
              </a>
            </div>

            <div className="portrait-area">
  <div className="portrait-frame">
    <img
      src="/pratik-photo.png"
      alt="Pratik Vijay Dhone"
      className="portrait-image"
    />
  </div>
  <p className="portrait-note">JAVA DEVELOPER · PUNE</p>
</div>
            <div className="hero-skills">
              <p className="eyebrow">MY STACK</p>
              <h3>Java</h3>
              <h3>Spring Boot</h3>
              <h3>React.js</h3>
              <h3>MySQL</h3>
              <span className="availability">OPEN TO OPPORTUNITIES</span>
            </div>
          </div>

          <div className="hero-bottom">
            <span>DESIGNING · DEVELOPING · LEARNING</span>
            <a href="#about">SCROLL TO EXPLORE ↓</a>
            <span>© 2026 PRATIK DHONE</span>
          </div>
        </section>

        <section className="section about-section reveal" id="about">
          <div className="section-heading">
            <span className="eyebrow">01 / ABOUT ME</span>
            <h2>A little about<br /><span>who I am.</span></h2>
          </div>
          <div className="about-content">
            <p className="large-copy">
              I’m Pratik, a Java Full Stack Developer who enjoys turning
              ideas into useful digital experiences.
            </p>
            <p>
              I work with Java, Spring Boot, React.js and MySQL to build
              practical web applications. I believe in writing clear code,
              learning continuously and solving real-world problems through
              technology.
            </p>
            <a className="text-link" href="#contact">LET'S CONNECT ↗</a>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-heading">
            <span className="eyebrow">02 / WHAT I WORK WITH</span>
            <h2>Tools of my<br /><span>trade.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span>0{index + 1}</span>
                <h3>{skill}</h3>
                <span>↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="projects-heading">
            <div className="section-heading">
              <span className="eyebrow">03 / SELECTED WORK</span>
              <h2>Things I've<br /><span>built.</span></h2>
            </div>
            <p>Practical projects. Real problems. Thoughtful solutions.</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span>{project.number} / PROJECT</span>
                  <span>↗</span>
                </div>
                {project.image && (
  <div className="project-image">
    <img src={project.image} alt={project.name} />
  </div>
)}

                <div className="project-art">
                  <span>{project.number}</span>
                </div>

                <p className="eyebrow">{project.type}</p>
                <h3>{project.name}</h3>
                <p className="project-description">{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                 <div className="project-features">
  <h4>KEY FEATURES</h4>
  
  <ul>
    {project.features.map((feature) => (
      <li key={feature}>{feature}</li>
    ))}
  </ul>
</div>
<div className="project-contribution">
  <h4>MY CONTRIBUTION</h4>
  <ul>
    {project.contribution.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
</div>
                <div className="project-actions">
                  <a
                    className="primary-button"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo <span>↗</span>
                  </a>

                  <a
                    className="text-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GITHUB SOURCE ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
<section className="section education-section" id="education">
  <div className="section-heading">
    <span className="eyebrow">04 / EDUCATION</span>
    <h2>Always a<br /><span>student.</span></h2>
  </div>

  <div className="education-content">
    <p className="large-copy">Learning is a continuous process.</p>

    <div className="education-details">
      <span className="education-year">2026</span>
      <h3>B.E. – Information Technology</h3>
      <p>Anuradha College of Engineering, Chikhli</p>
      <span className="education-cgpa">CGPA: 7.50</span>
    </div>

    <p>
      I continue to strengthen my technical knowledge through hands-on
      development and practical project building.
    </p>
  </div>
</section>

        <section className="contact-section section" id="contact">
  <span className="eyebrow">05 / GET IN TOUCH</span>

  <h2>
    Have a project<br />in <span>mind?</span>
  </h2>

  <p>
    I'm always interested in learning, collaborating and exploring
    new opportunities.
  </p>

  <div className="contact-actions">
    <a
      className="contact-button"
      href="https://mail.google.com/mail/?view=cm&fs=1&to=pratikdhone086@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Say Hello <span>↗</span>
    </a>

    <a
      className="contact-button resume-button"
      href="/Pratik_Vijay_Dhone_ATS_Resume.pdf"
      download
    >
      Download Resume <span>↓</span>
    </a>
  </div>

  <div className="contact-bottom">
    <span>PRATIK VIJAY DHONE</span>
    <span>JAVA FULL STACK DEVELOPER</span>

    <a
      href="https://github.com/pratikdhone086-dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      GITHUB PROFILE ↗
    </a>

    <a href="#home">BACK TO TOP ↑</a>
  </div>
</section>
      </main>
    </div>
  );
}

export default App;