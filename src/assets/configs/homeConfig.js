import React from 'react'
import { BiRocket } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa6";
import { MdHomeWork } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import { IoSchoolSharp } from "react-icons/io5";

// Import your image
import profileImage from '../../assets/images/new_profile_image_cropped.png'; // Adjust the path as necessary


const homeConfig = {

    greeting:
        <div className="greeting-container">
        <img src={profileImage} alt="Aditya Parashar" className="profile-image" />
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Aditya Parashar</strong>
        </h1>
</div>,
    titles: [
        "A Data Scientist",
        "A Decision Science Professional"

    ],
    about: {
        start: ["With nearly 3 years of experience in Data Science, ML modeling, and Advanced Analytics, I specialize in building large-scale ML models, deriving insights, and crafting data-driven strategies."

    ],
            
        exit: "Currently, I manage global card fraud risk as a Data Science Manager at American Express."
    },
    workTimeline: [
        {
            id: "work-3",
            title: ["Data Science Manager"],
            company: (  
                <div>
                <p style={{ fontSize: "larger", display: "block", marginTop: "0" }}>Amex</p>
                <div style={{ fontSize: "smaller", display: "block", marginTop: "0" }}> Global Fraud</div>
            </div>
        ),
        description: (<ul>
            <li>Developed fundamental ML models (XGBoost, Neural Networks & RNN) improving fraud detection by 20%. </li>
            <li>Leading a team of four, ensuring robust ML based fraud decisioning on 1B+ monthly transactions </li>
            <li>Designed 25+ decision strategies, delivering $12M+ in annual savings.</li>
        </ul>),
           


            date: "Aug'21 - Present",
            icon: <MdHomeWork/>,
            tags: ["python", "SQL","ML Modelling","A/B Testing","Decision Analytics"]
        },
        
        {
            id: "work-2",
            title: "Machine Learning Intern",
            company: (  
                <div>
                <p style={{ fontSize: "larger", display: "block", marginTop: "0" }}>Capital One</p>
                <div style={{ fontSize: "smaller", display: "block", marginTop: "0" }}> DataLabs</div>
            </div>
        ),
            description: (<ul>
            <li>Built NLP models (F1 score: 0.85) using SVC & TF-IDF to detect suboptimal dealership practices.</li>
            <li>Identified 125+ fraudulent dealerships, mitigating brand and regulatory risks.</li>
            <li>Developed automated risk-based decisioning for dealerships in California & Texas.</li>
        </ul>),
            date: "May' 20 - Jul' 20",
            icon: <BiRocket/>,
            tags: ["Python","Deep Learning","Unsupervised Learning","Customer Journey Analytics","Clustering & Dimensionality Reduction","Risk-Based Decisioning"]
        },
        {
            id: "work-3",
            title: "Machine Learning Intern",
            company: (  
                <div>
                <p style={{ fontSize: "larger", display: "block", marginTop: "0" }}>Colevit Technology</p>
                <div style={{ fontSize: "smaller", display: "block", marginTop: "0" }}> Surveillance Tech</div>
            </div>),
            description: (<ul>
                <li>IoT Security: Developed a smart city security prototype on a distributed IoT infrastructure</li>
                <li>Vehicle Detection: Achieved 0.72 precision in real-time monitoring using MobileNet SSD</li>
                <li>Facial Recognition: Enhanced security efficiency 5x with YOLOv3-integrated smart cameras</li>
            </ul>),
            date: "May' 19 - Jul' 19",
            icon: <BiRocket/>,
            tags: ["IoT Security","Deep Learning"]
        },
        {
            id: "work-2",
            title: "Undergraduate Student",
            company: (  
                <div>
                <p style={{ fontSize: "larger", display: "block", marginTop: "0" }}>IIT Kharagpur, India</p>
                <div style={{ fontSize: "smaller", display: "block", marginTop: "0" }}> Bachelors in Electronics and Communication Engineering</div>
            </div>),
            description: (<ul>
                <li>Relevant Coursework: ML in medicine, AI: Foundations & Applications, Expert Systems, Data Structures and Algorithms</li>
                <li>Student Activities - Governor, Business Club; Vice Captain, Inter IIT Case Study Team; Public Service Volunteer </li>
            </ul>),
            date: "Jul' 17 - Jul' 21",
            icon: <IoSchoolSharp/>,
            tags: ["C", "C++","Python","MATLAB", "neural networks","bayesian optimization","Deep Learning","volunteering"]
        }
    ]
}


export default homeConfig
