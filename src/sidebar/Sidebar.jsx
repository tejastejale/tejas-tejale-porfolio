import Links from "./links/Links";
import "./sidebar.scss";
import Togglebutton from "./togglebutton/Togglebutton";
import { motion } from "framer-motion";
import React, {useState} from "react";

const Sidebar=()=>{

    const [open, setOpen]= useState(false);

    const variants={
        open:{
            clipPath: "circle(1200px at 50px 50px)",
            transition:{
                type: "spring",
                stiffness: 20,
                opacity:0,
            }
        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay:  0.3,
                type: "spring",
                stiffness: 400,
                damping: 50,
                opacity:1,
            },
        },
    };

    return(
        <motion.div className="sidebar" animate={open ? "open" : "closed"}>
            <motion.div className="bg" variants={variants}>
                <Links/>
            </motion.div>
            <Togglebutton setOpen={setOpen}/>
        </motion.div>
    );
};
export default Sidebar;