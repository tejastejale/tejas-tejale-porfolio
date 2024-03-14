import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
    layoutEffect: false,
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["50%", "-950%"]);
  const yPl = useTransform(scrollYProgress, [0, 1], ["100%", "-400%"]);
  const ySt = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const ySs = useTransform(scrollYProgress, [0, 1], ["10%", "-990%"]);

  const t1 = "What I Provide?";
  const t2 = "What I Did?";
  const t3 = type == "services" ? t1 : t2;

  const p1 = "/sun.png";
  const p2 = "/planets.png";
  const p3 = "id" == "services" ? p1 : p2;

  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg,#111132,#0c0c1d"
            : "linear-gradient(180deg,#111132,#505064",
      }}
    >
      <div className="hh1">
        <motion.h1
          style={{
            y: type === "services" ? yBg : ySs,
            marginTop: t3 === t2 ? "400px" : "0px",
          }}
        >
          {t3}
        </motion.h1>
      </div>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ x: ySt }} className="shooting"></motion.div>
      <motion.div
        className="planets"
        style={{ y: type === "services" ? yBg : yPl, backgroundImage: p3 }}
      ></motion.div>
      <motion.div style={{ x: ySt }} className="stars"></motion.div>
    </div>
  );
};
export default Parallax;
