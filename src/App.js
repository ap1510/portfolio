import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Aditya Parashar</h1>
        <p>Data Scientist | ML Engineer | Analytics</p>
      </header>
      <section id="about">
        <h2>About Me</h2>
        <p>
          Data Scientist with 3+ years of experience in ML, predictive modeling,
          and big data analytics at Amex. Expertise in Python, SQL, AWS, and
          Spark. Passionate about AI for risk modeling and business growth.
        </p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Python, SQL, C++</li>
          <li>Machine Learning: Scikit-learn, PyTorch, XGBoost</li>
          <li>Big Data & Cloud: AWS, GCP, Spark</li>
          <li>A/B Testing, Causal Inference, Time Series Analysis</li>
        </ul>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="Auto_Dealership_NLP_Analysis.pdf">Auto Dealership Analysis - Capital One</a>
          </li>
          <li>
            <a href="sub.py">Vehicle Accident Detection - Colevit</a>
          </li>
        </ul>
      </section>
      <section id="experience">
        <h2>Experience</h2>
        <p><strong>American Express</strong> - Data Scientist (Aug 2021 - Present)</p>
        <p><strong>Capital One</strong> - ML Intern (May 2020 - Jul 2020)</p>
        <p><strong>Colevit Technology</strong> - ML Intern (May 2019 - Jul 2019)</p>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:adityaparashar1150@gmail.com">adityaparashar1150@gmail.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://linkedin.com/in/adityaparashar149">linkedin.com/in/adityaparashar149</a>
        </p>
        <p>
          GitHub: <a href="https://github.com/ap1510">github.com/yourgithub</a>
        </p>
      </section>
      <footer>
        <p>&copy; 2025 Aditya Parashar | Hosted on GitHub Pages</p>
      </footer>
    </div>
  );
};

export default App;

