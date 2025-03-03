import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
// import {BsMedium} from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import React from "react";
import { FaMediumM } from "react-icons/fa";

const footerConfig = {

    icons: [
        {
            id: "footer-0",
            url: "https://github.com/ap1510",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/adityaparashar149/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        
        {
            id: "footer-2",
            url: "mailto:adityaparashar1150@gmail.com",
            className: "social-icon",
            target: "_blank",
            icon: <IoMail size={50}/>
        }
        ,
        
        {
            id: "footer-2",
            url: "tel:+91 9547966355",
            className: "social-icon",
            target: "_blank",
            icon: <IoMdCall size={50}/>,
            title : "+91 9547966355"
        }
    ]
}

export default footerConfig
