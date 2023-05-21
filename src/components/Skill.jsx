import React from "react";
import { motion } from "framer-motion";

const Skills =({name,x,y})=>{
return(
    <motion.div className="flex items-center justify-center rounded-full  font-mono sm:font-semibold bg-yellow-300 text-black py-1 px-1 sm:py-3 sm:px-6 cursor-pointer absolute"
    initial={{x:0,y:0}}
    whileInView={{x:x,y:y}}
    transition={{duration:1.5}}
    whileHover={{scale:1.06}}>
      {name}
    </motion.div>
)
}
const Skill = () => {
  return (
    <>
      <h2 className="font-medium text-6xl font-mono mt-14 w-full text-center">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full background-circle">
        <motion.div className="flex items-center justify-center rounded-full font-semibold bg-yellow-300 text-black p-2 sm:p-8 cursor-pointer"
        whileHover={{scale:1.05}}>
          Web
        </motion.div>
        <Skills name="HTML" x="-20vw" y="-10vw" />
        <Skills name="CSS" x="-5vw" y="-10vw" />
        <Skills name="JavaScript" x="10vw" y="5vw" />
        <Skills name="Bootstrap" x="-30vw" y="10vw" />
        <Skills name="Tailwind CSS" x="30vw" y="-10vw" />
        <Skills name="Material UI" x="-3vw" y="14vw" />
        <Skills name="ReactJs" x="12vw" y="-20vw" />
        <Skills name="NextJs" x="20vw" y="19vw" />
      </div>
    </>
  );
};

export default Skill;
