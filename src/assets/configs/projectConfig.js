import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";
import { FaMediumM } from "react-icons/fa";


import BSM_model_image from "../images/BSM_model_image.png"
import adverse_cred_rating from "../images/ratings_image.png"
import ff_model from "../images/ff_model.jpg"
import writing from "../images/writing_sample.jpg"
import index from "../images/index_replication.webp"
import starbucks from "../images/Starbucks_analysis.webp"
import standup from "../images/stand_up_comedians.jpeg"
import churn from "../images/churn.png"
import Binomial from "../images/Binomial_CRR.png"
import loan from "../images/loan_amortization.jpg"

import React from 'react'

const projectConfig = [


    {
        id: "project-9",
        title: "Auto Dealership Fraud Detection",
        links: [
            {
                name: "repo",
                url: "https://github.com/ap1510/ML-Based-Auto-Dealership-Fraud-Detection",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/ap1510/ML-Based-Auto-Dealership-Fraud-Detection/fork",
                icon: <BiGitRepoForked/>
            }
            ,
            {
                name: "article",
                url: "https://medium.com/@crew_7967/detecting-auto-dealership-fraud-using-machine-learning-and-nlp-a61adafa64fc",
                icon: <FaMediumM/>
            }
        ],
        image: standup,
        description: "A Machine Learning & NLP project using TF-IDF + SVM to analyze negative reviews and detect fraudulent dealership practices.",
        target: "_blank"
    },

    {
        id: "project-8",
        title: "AI Based Disaster Relief And Management System",
        links: [
            {
                name: "repo",
                url: "https://github.com/ap1510/AI_Based_Disaster_Relief_And_Management_System",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/ap1510/AI_Based_Disaster_Relief_And_Management_System/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "article",
                url: "https://medium.com/@crew_7967/ai-powered-disaster-relief-and-management-the-drams-project-db8e71071672",
                icon: <FaMediumM/>
            }
        ],
        image: ff_model,
        description: "DRAMS is an AI-driven disaster management system that leverages Deep Learning, DBSCAN clustering, and AI-based routing algorithms to detect disasters, optimize rescue operations, and streamline post-disaster relief efforts.",
        target: "_blank"
    },

    {
        id: "project-7",
        title: "Smart Car Detection and Alert System",
        links: [
            {
                name: "repo",
                url: "https://github.com/ap1510/Car-Detection-Alert-System",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/ap1510/Car-Detection-Alert-System/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "article",
                url: "https://medium.com/@crew_7967/ai-powered-car-detection-and-alert-system-enhancing-security-with-computer-vision-600e1ad3bd0b",
                icon: <FaMediumM/>
            }
            
        ],
        image: starbucks,
        description: "A Deep Learning based real-time vehicle detection system that tracks cars in restricted areas and triggers automated email alerts if a vehicle overstays.",
        target: "_blank"
    },

    {
        id: "project-6",
        title: " Deep Learning Based Object Localization",
        links: [
            {
                name: "repo",
                url: "https://github.com/ap1510/Deep_Learning_Based_Object_Localization",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/ap1510/Deep_Learning_Based_Object_Localization/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "article",
                url: "https://medium.com/@crew_7967/object-localization-in-e-commerce-images-enhancing-product-discovery-with-ai-d74b05ce3aaa",
                icon: <FaMediumM/>
            }
            
        ],
        image: index,
        description: "A CNN-based deep learning model that detects and localizes objects in product images using data augmentation, feature extraction, and optimized training.",
        target: "_blank"
    },
        
    {
        id: "project-5",
        title: "Case Study - Growing an Organic Brand: Strategic Solutions for 24 Mantra",
        links: [
            {
                name: "repo",
                url: "https://github.com/ap1510/case_study_24Mantra",
                icon: <AiFillGithub/>
            },
            {
                name: "article",
                url: "https://medium.com/@crew_7967/growing-an-organic-brand-strategic-solutions-for-24-mantra-cd60567f2de0",
                icon: <FaMediumM/>
            }
        ],
        image: churn,
        description: "Strategic growth solutions for 24 Mantra Organic, focusing on brand awareness, consumer trust, and market expansion.",
        target: "_blank"
    },


    {
        id: "project-4",
        title: "Case Study - Scaling a Rock Climbing Business",
        links: [
            {
                name: "repo",
                url: "https://github.com/ap1510/case_study_the_piton_problem",
                icon: <AiFillGithub/>
            },
            {
                name: "article",
                url: "https://medium.com/@crew_7967/scaling-a-rock-climbing-business-the-piton-problem-case-study-3d1bbdd7bdf6",
                icon: <FaMediumM/>
            }
        ],
        image: adverse_cred_rating,
        description: "A strategic growth plan for a rock climbing equipment startup, optimizing financial feasibility, supply chain, and market expansion.",
        target: "_blank"
    }
 
]

export default projectConfig