import { useEffect } from "react";
import './App.css';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Kushal Pichika</h1>
          <p>Full Stack Developer | AI & IoT Enthusiast</p>
          <a href="/Kushal_Resume.pdf" download className="btn">Download Resume</a>
        </div>
      </section>

      {/* About Me */}
      <section className="section">
        <h2>About Me</h2>
        <p>I’m Pichika Kushal, a passionate Computer Science student at VNR VJIET with a strong foundation in software development, particularly in full-stack web and embedded systems. With hands-on experience in building real-world applications like Urban Hero and Power Track, I thrive on solving complex problems using technologies like React.js, Node.js, and Java. My industrial training at NSIC helped sharpen my skills in Python, database integration, and project collaboration.
          <br /><br />
          I hold certifications in Full Stack Development, Big Data, and AI/ML for Geodata Analysis, and I’m driven by continuous learning. I've also made a mark in tech competitions, winning the Map-An-App Hackathon and reaching the Innovasia Hackathon 2024 finale. I’m actively involved on platforms like GitHub, LeetCode, and CodeChef where I refine my coding and algorithmic skills.</p>
      </section>

      {/* Skills */}
      <section className="section alt">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div>
            <i className="fab fa-cuttlefish"></i>
            <span>C/C++</span>
          </div>
          <div>
            <i className="fab fa-python"></i>
            <span>Python</span>
          </div>
          <div>
            <i className="fab fa-java"></i>
            <span>Java</span>
          </div>
          <div>
            <i className="fab fa-react"></i>
            <span>React.js</span>
          </div>
          <div>
            <i className="fab fa-node"></i>
            <span>Node.js</span>
          </div>
          <div>
            <i className="fab fa-node"></i>
            <span>Express.js</span>
          </div>
          <div>
            <i className="fas fa-database"></i>
            <span>MySQL</span>
          </div>
          <div>
            <i className="fab fa-github"></i>
            <span>Git/GitHub</span>
          </div>
        </div>
      </section>


      {/* Projects */}
      <section className="section">
        <h2>Projects</h2>
        <div className="projects-grid">

          <div className="project-card">
            <div className="project-info">
              <h3>AI-Powered Hospital Management System</h3>
              <p><i>A patient-focused web platform that bridges the gap between early diagnosis and accessible care.</i><br/><br/>
              This system integrates AI-based skin disease detection, a symptom checker, and OpenStreetMap for locating nearby hospitals. By combining early diagnostics with location-aware hospital suggestions, it aims to reduce the healthcare access gap, especially in remote or underserved areas.</p>
              <a href="https://github.com/Kushal-pichika/minor_project" className="github-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h3> Urban- Hero</h3>
              <p><i>A web app for urban safety and real-time incident reporting.</i><br /><br />
                Built using React.js, Node.js, and Firebase, Urban Hero lets users report and visualize local incidents on an interactive map (Google Maps API). It promotes community engagement and safety awareness with efficient backend data handling via Express.js.</p><br/><br/><br/>
              <a href="https://github.com/Kushal-pichika/urban-hero" className="github-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>
          <div className="project-card">
            <div className="project-info">
              <h3>Power Track</h3>
              <p><i>A smart electricity monitoring and optimization system.</i><br /><br />
                Using ESP32, Blynk Cloud, and Wokwi Simulator, Power Track helps monitor real-time energy consumption and reduce power waste. Users can remotely access data via the Blynk app, making it ideal for smart home setups.</p><br/>
              <a href="##" className="github-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>

          <div className="project-card">
            <div className="project-info">
              <h3>Airline Reservation System</h3>
              <p><i>A desktop-based airline booking application with a user-friendly GUI.</i><br /><br />
                Developed in Java (Swing, AWT) with MySQL integration, this system supports flight booking, passenger management, and secure CRUD operations. It provides efficient search functionality and maintains data integrity across operations.</p>
              <a href="https://github.com/Kushal-pichika/Airline_Reservation_System" className="github-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> GitHub
              </a>
            </div>
          </div>

        </div>
      </section>


      {/* Experience */}
      <section className="section">
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3>Software Development Intern</h3>
            <p><strong>Company:</strong> Industrial Training – NSIC</p>
            <p><strong>Duration:</strong> December 2022 – May 2023</p>
            <p>
            Worked on the development of SAM – a Library Management System using Python with MySQL integration. The system included features such as book and member management, issuing/return workflows, and database handling. Gained practical experience in Python programming, database design, version control using Git/GitHub, and the use of PyCharm IDE for software development.
            </p>
          </div>

          {/* Add more experience cards */}
        </div>
      </section>


      <section className="section certifications">
        <h2>Certifications</h2>
        <div className="certifications-grid">
          <div className="certification-card">
            <div className="card-content">
              <h3>Full Stack Web Development</h3>
              <p><strong>Issued by:</strong> Udemy</p>
            </div>
            <div className="card-icon">
              <i className="fas fa-certificate"></i>
            </div>
          </div>

          <div className="certification-card">
            <div className="card-content">
              <h3>Java and Python Programming </h3>
              <p><strong>Issued by:</strong> NSIC</p>
            </div>
            <div className="card-icon">
              <i className="fas fa-certificate"></i>
            </div>
          </div>

          <div className="certification-card">
            <div className="card-content">
              <h3>Big Data</h3>
              <p><strong>Issued by:</strong>Samsung Innovation Campus</p>
            </div>
            <div className="card-icon">
              <i className="fas fa-certificate"></i>
            </div>
          </div>
          
          <div className="certification-card">
            <div className="card-content">
              <h3>AI/ML for Geodata Analysis</h3>
              <p><strong>Issued by:</strong>ISRO</p>
            </div>
            <div className="card-icon">
              <i className="fas fa-certificate"></i>
            </div>
          </div>

          {/* Add more certification cards here */}
        </div>
      </section>



      {/* Contact */}
      <section className="contact">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out via email or connect on LinkedIn.</p>
        <div className="contact-links">
          <a href="mailto:kushal12082004@gmail.com">Email</a>
          <a href="https://github.com/Kushal-pichika" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/pichika-kushal/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </section>
    </div>
  );
}

export default App;
