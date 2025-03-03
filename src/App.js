import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div className="section">
    <h2>Welcome to My Portfolio</h2>
    <p>I am a Data Scientist with expertise in AI, Big Data, and Machine Learning. Passionate about building scalable ML models and risk mitigation strategies.</p>
    <Link to="/projects" className="btn">View My Projects</Link>
  </div>
);

const About = () => (
  <div className="section">
    <h2>About Me</h2>
    <p>B.Tech graduate from IIT Kharagpur in Electronics & Communication Engineering with a strong foundation in AI and Machine Learning. I have 3+ years of experience at American Express, where I designed fraud detection models processing over 1B+ transactions monthly.</p>
  </div>
);

const Skills = () => (
  <div className="section">
    <h2>Skills</h2>
    <ul>
      <li>Programming: Python, SQL, C++, C</li>
      <li>Machine Learning: Scikit-learn, XGBoost, PyTorch, Neural Networks</li>
      <li>Big Data & Cloud: AWS, GCP, Spark, Kubernetes</li>
      <li>Advanced Analytics: A/B Testing, Bayesian Statistics, Time Series Forecasting</li>
    </ul>
  </div>
);

const Projects = () => (
  <div className="section">
    <h2>Projects</h2>
    <ul>
      <li><a href="Auto_Dealership_Analysis.pptx">Auto Dealership Analysis - Capital One</a>: Developed NLP models to detect fraudulent dealerships using customer reviews.</li>
      <li><a href="sub.py">Vehicle Accident Detection - Colevit</a>: Built a real-time smart city security system using deep learning models.</li>
      <li>Fraud Detection at American Express: Designed AI-based anomaly detection pipelines, increasing fraud capture by 20%.</li>
      <li>Disaster Management System: Gold Medal-winning project at Smart India Hackathon, achieving 94% accuracy in real-time flood detection.</li>
    </ul>
  </div>
);

const Experience = () => (
  <div className="section">
    <h2>Experience</h2>
    <p><strong>American Express</strong> - Data Scientist (Aug 2021 - Present)</p>
    <ul>
      <li>Designed fraud detection ML models, improving capture rates by 20% and saving $25M annually.</li>
      <li>Led a team of 4 to build risk mitigation strategies.</li>
      <li>Developed real-time anomaly detection pipelines for 1B+ transactions monthly.</li>
    </ul>
    <p><strong>Capital One</strong> - ML Intern (May 2020 - Jul 2020)</p>
    <ul>
      <li>Developed NLP models to analyze customer complaints, achieving 0.85 F1 Score.</li>
      <li>Identified 125+ high-risk dealerships through AI-driven insights.</li>
    </ul>
    <p><strong>Colevit Technology</strong> - ML Intern (May 2019 - Jul 2019)</p>
    <ul>
      <li>Built a smart city security system with YOLO V3 & MobileNet SSD.</li>
      <li>Enhanced real-time vehicle detection accuracy by 72%.</li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="section">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:adityaparashar1150@gmail.com">adityaparashar1150@gmail.com</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/adityaparashar149">linkedin.com/in/adityaparashar149</a></p>
    <p>GitHub: <a href="https://github.com/yourgithub">github.com/yourgithub</a></p>
  </div>
);

const Awards = () => (
  <div className="section">
    <h2>Awards & Recognition</h2>
    <ul>
      <li>Credit & Fraud Risk Excellence Award, American Express (2023)</li>
      <li>Star Project Award, American Express (2022)</li>
      <li>Analyst of the Quarter, American Express (2022)</li>
      <li>Gold Medalist, Smart India Hackathon (2020)</li>
    </ul>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Aditya Parashar</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/skills">Skills</Link> | <Link to="/projects">Projects</Link> | <Link to="/experience">Experience</Link> | <Link to="/awards">Awards</Link> | <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer>
          <p>&copy; 2025 Aditya Parashar | Hosted on GitHub Pages</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
