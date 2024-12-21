import React from 'react'
import {AiFillGithub} from "react-icons/ai";
import {SiMedium} from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png"

const blogConfig = [
    {
        id: "blog-3",
        title: "Deep Laugh",
        links: [
            {
                name: "article",
                url: "https://medium.com/@sharmaaman5598/analysis-of-stand-up-comedians-e0bb7dd2470e",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/v2/resize:fit:1224/format:webp/1*2mQ7K7RZM1-PA3pV2EdN_A.jpeg",
        description: "Can deep learning uncover the secret behind what makes us laugh? That's exactly what DeepLaugh explores. Follow the link to know more.",
        target: "_blank"
    },
    {
        id: "blog-2",
        title: "NLP Techniques for Brand Perception",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/tune-your-scikit-learn-model-using-evolutionary-algorithms-30538248ac16",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/max/1400/1*gmNunOZ86_URtnzuOA7oNg.jpeg",
        description: "Scikit-learn hyperparameters tuning with evolutionary algorithms and cross-validation.",
        target: "_blank"
    },
    {
        id: "blog-1",
        title: "Manage your machine learning life cycle with MLflow in Python",
        links: [
            {
                name: "article",
                url: "https://medium.com/analytics-vidhya/manage-your-machine-learning-lifecycle-with-mlflow-in-python-d678d5f3c682",
                icon: <SiMedium/>
            },
            {
                name: "repo",
                url: "https://github.com/rodrigo-arenas/mlflow-basics",
                icon: <AiFillGithub/>
            }
        ],
        image: "https://miro.medium.com/max/1400/1*FhKrMpcUPeZxNsZpKNv4BA.png",
        description: "Enable collaboration across data scientists; gain control over different models versions, " +
            "multiple experiments within the same problem, and models management and deployment.",
        target: "_blank"
    },
    {
        id: "blog-0",
        title: "Workforce planning optimization using Python",
        links: [
            {
                name: "article",
                url: "https://towardsdatascience.com/workforce-planning-optimization-using-python-69af0ef9011a",
                icon: <SiMedium/>
            }
        ],
        image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
        description: "Learn how to find the optimal number of positions needed to manage incoming traffic.",
        target: "_blank"
    }
]

export default blogConfig