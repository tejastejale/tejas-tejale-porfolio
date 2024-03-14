 
import "./hero.scss";
import { motion } from "framer-motion";
import React from 'react';
import MyComponent from "./Cb";
import { Link } from "react-scroll";

const textVariants={
    initial: {
        x: -300,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration:.8,
            staggerChildren:-0.2,
        },
    },
    scrollbutton:{
        opacity:0,
        y:10,
        transition:{
        duration:2,
        repeat:Infinity,
        }
    },
    initial1: {
        x: -500,
        opacity: 0,
    },
    animate1: {
        x: 0,
        opacity: 1,
        transition: {
            duration:2,
            staggerChildren:2,
        },
    },
};
const sliderVariants={
    initial: {
        x: 0,
        
    },
    animate: {
        x: "-600%",
        opacity: 1,
        transition: {
            duration:45,
            repeat:Infinity,
            repeatType:"mirror",
        },
    },
};

// const handleContactClick = () => {
//     // Replace 'your_email@example.com' with your actual email address
//     const email = 'tejastejale13@gmail.com';

//     // Construct the mailto URL
//     const mailtoURL = `mailto:${email}`;

//     // Open the email client with the mailto URL
//     window.location.href = mailtoURL;
// };
// const ContactButton = () => {
//     const handleContactClick = () => {
//       window.location.href = "mailto:tejastejale13@gmail.com";
//     }}



const Hero=()=>{
    const handleContactClick = () => {
    window.location.href = "mailto:tejastejale13@gmail.com";}

    return (
        <div>
            <div className="hero">
                <div className="wrapper">
                <motion.div 
                className="textcon"
                variants={textVariants}
                initial="initial" 
                animate="animate"
                >
                    <motion.h1 variants={textVariants}>TEJAS TEJALE</motion.h1>
                    <motion.h2 variants={textVariants}>Frontend Developer<br />and Data Scientist</motion.h2>

                    <motion.div className="buttons" variants={textVariants}
                    initial="initial1" 
                    animate="animate1"
                    >
                        <MyComponent/><motion.button onClick={handleContactClick}>Contact Me</motion.button>
                        {/* <motion.button>See the Latest Works Below</motion.button> */}
                       
                        
                    </motion.div>
                    <motion.div className="simg" link to="/services">
                        <motion.img variants={textVariants} animate="scrollbutton"src="scroll.png"></motion.img>
                    </motion.div>
                    
                </motion.div>
                </div>
                <motion.div className="slidetext" variants={sliderVariants} animate="animate" initial="initial">
                    Developer Analyst Tester Content Creater
                </motion.div>
                <div className="imgcon" >
                    <img src="public/me.png" alt=""></img>
                </div>
            </div>
        </div>
    )
}
export default Hero;