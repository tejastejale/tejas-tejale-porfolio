import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import React from "react";
import { Link } from 'react-router-dom'
const Navbar =()=>{
    const handleContactClick = () => {
    window.location.href = "mailto:tejastejale13@gmail.com";}
    return(
        <div className="navbar">
            <Sidebar />
            <div className="wrapper">
                <div className="spann">
                <motion.h2
                initial={{opacity:0, scale:0.5, x:-500}} 
                animate={{opacity:1, scale:1, x:0}} 
                transition={{duration:0.8,staggerChildren:0.1}} 
                >Hey...</motion.h2></div>
                <div className="social">
                    <a href="https://github.com/tejastejale"><img src="public/git.jpg"/></a>
                    {/* <a herf="#"><img src="/instagram.png"></img></a> */}
                    <a href="https://www.instagram.com/tejass_13_10/"><img src="public/instagram 2.png"/></a>
                    <a href="https://www.linkedin.com/in/tejas-tejale/"><img src="public/linkedin 2.jpg"/></a>
                    {/* <a herf="https://www.linkedin.com/in/tejas-tejale/"><img src="public/linkedin 2.jpg"/></a> */}
                    <div className="mail">
                    <a herf="#"><img onClick={handleContactClick} src="/mail.jpg"></img></a></div>
                </div>
            </div>
        </div>
    )
}
export default Navbar;