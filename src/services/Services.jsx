import React, { useRef } from "react";
import "./services.scss";
import { motion,useInView } from "framer-motion";

const variants={
    initial:{
        x:-300,
        y:0,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildern:0.1,
        }
    }
}

const Services =()=>{
    
    const ref= useRef()
    const isInView = useInView(ref,{margin:"-50px"})
    

    return (
        <motion.div className="services" 
        variants={variants} initial="initial" 
        // whileInView="animate"
        ref={ref}
        animate={isInView  && "animate"}
        >
            <motion.div className="textc">
                <p>I Focus on Helping Your Brand Grow <br />and Move Towards the Success More & More...</p>
                <hr/>
            </motion.div>
            <motion.div className="titlec">
                <div className="title">
                    <img src="/people.webp" alt=""></img>
                    <div className="bt" ></div>
                    <h1><b>Things</b> I can do</h1>
                </div>
                <div className="title" style={{fontWeight:"80px",marginBottom:"150px"}}>
                    <h1>To Grow <b>Your Business</b> More</h1>     
                    <p>(View in Desktop Mode To Know More)</p>             
                </div>
            </motion.div>
            
            <motion.div className="listc">
                 <div className="box" >
                    
                    <h2>Web <br></br>Development</h2><br></br>
                    <p>I'm a passionate web developer with expertise in HTML, CSS, JSX, and ReactJS. I've successfully contributed to diverse web development projects.  My hands-on experience in WordPress development at TechMark India has honed my skills in customization and feature-rich implementations. I bring a unique perspective to crafting engaging online experiences.<br></br>
                    </p>

                 </div>
                 <div className="box" >
                    <h2>Data<br></br>Science</h2><br></br>
                    <p>As a budding data scientist and 3rd runner up in Hackathon arranged by Winjit technologies in 2024, I bring hands-on experience gained through internships, projects and Hackathon. My portfolio showcases practical skills in data analysis, machine learning, and problem-solving. Eager to contribute my growing skills to your projects and continue my proficiency in this dynamic field of Data Science.
                    <br></br>
                    </p>

                 </div>
                 <div className="box" >
                
                    <h2>Software<br></br>Testing</h2><br></br>
                    <p>Dedicated software testing enthusiast with a comprehensive understanding of testing methodologies and key components. Proficient in crafting robust test plans, executing thorough test cases, and ensuring software quality. Adept at identifying and resolving bugs to enhance product reliability. Eager to contribute expertise to dynamic development teams.
                    <br></br>
                    </p>

                 </div>
                 <div className="box" >
                    
                    <h2>Photoshop<br></br>and Editing</h2><br></br>
                    <p>With a wealth of expertise in Photoshop and editing, I bring a creative flair and technical proficiency to every project. My portfolio showcases a mastery of digital manipulation, photo retouching, and design, reflecting a passion for transforming concepts into visually stunning realities. Contact me to for letting me bring your visions to life.
                    <br></br>
                    </p>

                 </div> 
                 
            </motion.div>
        </motion.div>
    );
};
export default Services;