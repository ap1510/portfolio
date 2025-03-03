import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const Home = () => (
  <div className="section">
    <h2>Welcome to My Portfolio</h2>
    <p>I am a Data Scientist passionate about AI, Big Data, and Machine Learning.</p>
    <Link to="/projects" className="btn">View My Projects</Link>
  </div>
);

const About = () => (
  <div className="section">
    <h2>About Me</h2>
    <p>B.Tech from IIT Kharagpur with 3+ years at American Express in AI-driven fraud detection.</p>
  </div>
);

const Skills = () => (
  <div className="section">
    <h2>Skills</h2>
    <ul>
      <li>Python, SQL, C++</li>
      <li>Machine Learning: Scikit-learn, PyTorch, XGBoost</li>
      <li>Big Data & Cloud: AWS, GCP, Spark</li>
    </ul>
  </div>
);

const Projects = () => (
  <div className="section">
    <h2>Projects</h2>
    <ul>
      <li><a href="Auto_Dealership_Analysis.pptx">Auto Dealership Analysis - Capital One</a></li>
      <li><a href="sub.py">Vehicle Accident Detection - Colevit</a></li>
    </ul>
  </div>
);

const Contact = () => (
  <div className="section">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:adityaparashar1150@gmail.com">adityaparashar1150@gmail.com</a></p>
    <p>LinkedIn: <a href="https://linkedin.com/in/adityaparashar149">linkedin.com/in/adityaparashar149</a></p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="container">
        <header>
          <h1>Aditya Parashar</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/skills">Skills</Link> | <Link to="/projects">Projects</Link> | <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
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
