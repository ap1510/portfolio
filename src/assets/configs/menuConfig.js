import React from "react";

import { AiFillCode, AiFillHome, AiOutlineGithub } from "react-icons/ai";
import { RiFilePaperLine } from "react-icons/ri";

import { BsMedium } from "react-icons/bs";

const menuConfig = {
  sidebarData: [
    {
      id: "menu-0",
      title: "Home",
      path: "/portfolio",
      icon: <AiFillHome size={35} />,
      className: "nav-text",
    },
    {
      id: "menu-1",
      title: "Projects",
      path: "/projects",
      icon: <AiOutlineGithub size={35} />,
      className: "nav-text",
    },
    // {
    //   id: "menu-2",
    //   title: "Blogs",
    //   path: "/blogs",
    //   icon: <BsMedium size={35} />,
    //   className: "nav-text",
    // },
    {
      id: "menu-3",
      title: "Skills",
      path: "/skills",
      icon: <AiFillCode size={35} />,
      className: "nav-text",
    }
    ,

    {
      id: "menu-4",
      title: "Resume",
      path: "https://drive.google.com/file/d/1VflX8E7wck9UH211RO8CGIbJ_r0SwPtF/view?usp=sharing",
      icon: <RiFilePaperLine size={35} />,
      className: "nav-text",
    }
  ],
};

export default menuConfig;
