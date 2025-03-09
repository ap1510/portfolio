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
        title: "Market Index Replication using Linear Optimization",
        links: [
            {
                name: "repo",
                url: "https://github.com/aman-uta-kgp/index_replica_building",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/aman-uta-kgp/index_replica_building/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/aman-uta-kgp/index_replica_building/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "article",
                url: "https://medium.com/@sharmaaman5598/index-replica-building-3f16f3ae9257",
                icon: <FaMediumM/>
            }
            
        ],
        image: index,
        description: "As passive portfolio management gains more traction, it is key to identify low-cost, first-principle solutions to the index tracking problems. Here, we compare a two linear optimization approaches on their ability to track an index.",
        target: "_blank"
    },
        
    {
        id: "project-5",
        title: "Customer Churn Prediction in Telecom Industry",
        links: [
            {
                name: "repo",
                url: "https://github.com/aman-uta-kgp/customer_churn_prediction",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/aman-uta-kgp/customer_churn_prediction/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/aman-uta-kgp/customer_churn_prediction/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: churn,
        description: "Using customer churn prediction to maximize portfolio LTV under retention budget constraints.",
        target: "_blank"
    },


    {
        id: "project-4",
        title: "Credit Rating Migration & Adverse News",
        links: [
            {
                name: "repo",
                url: "https://github.com/aman-uta-kgp/credit_rating_migration",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/aman-uta-kgp/credit_rating_migration/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/aman-uta-kgp/credit_rating_migration/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: adverse_cred_rating,
        description: "Does adverse public information like litigation or judgements influence company credit ratings? Let's find out.",
        target: "_blank"
    },
    
    {
        id: "project-3",
        title: "BSM Options Pricing Model",
        links: [
            {
                name: "repo",
                url: "https://github.com/aman-uta-kgp/BSM_Monte_Carlo_engine",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/aman-uta-kgp/BSM_Monte_Carlo_engine/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/aman-uta-kgp/BSM_Monte_Carlo_engine/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: BSM_model_image,
        description: "Implementation of Black Scholes Merton Option Pricing Model for a non dividend paying European option.",
        target: "_blank"
    },

    {
        id: "project-2",
        title: "Unraveling patterns within unstructured text data",
        links: [
            {
                name: "repo",
                url: "https://github.com/aman-uta-kgp/ML_Assignment_Prof_Puelz/blob/main/Ques_7.ipynb",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/aman-uta-kgp/ML_Assignment_Prof_Puelz/tree/main/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/aman-uta-kgp/ML_Assignment_Prof_Puelz/tree/main/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: writing,
        description: "Can we segregate Reuters journalists with just their writings samples? Unsupervised learning methods like PCA show us how.",
        target: "_blank"
    },

    {
        id: "project-1",
        title: "Binomial Pricing using CRR Strategy",
        links: [
            {
                name: "repo",
                url: "https://github.com/aman-uta-kgp/binomial_pricing_model",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/aman-uta-kgp/binomial_pricing_model/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/aman-uta-kgp/binomial_pricing_model/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: Binomial,
        description: "A C++ implementation of the binomial pricing model using the CRR strategy, widely used for derivative pricing.",
        target: "_blank"
    }
]

export default projectConfig