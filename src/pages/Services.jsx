// Skills.jsx
import React from "react";
// import '../Skills.css';
import { motion } from "framer-motion";

function Services() {
  const skills = [
    { name: "React", iconClass: "devicon-react-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "CSS 3", iconClass: "devicon-css3-plain colored" },
    { name: "TailwindCSS", iconClass: "devicon-tailwindcss-original colored" },
    { name: "HTML 5", iconClass: "devicon-html5-plain" },
    { name: "Loading...", iconClass: "devicon-nodejs-plain-wordmark" },
    { name: "Loading...", iconClass: "devicon-mongodb-plain" },
    { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark" },
  ];

  return (
    <section className="py-8 lg:py-12 h-screen  bg-orange-100">
      <h1 class="text-[45px] font-bold leading-[0.8] lg:text-[55px] m text-center mb-20">
        My Skills
      </h1>

      <div className="container mx-auto">
        <div className="">
          <motion.ul
        initial={{ x: 0 }}
       animate={{ x: "-100%" }}
       transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          
          
          className="m-2 p-5 bg-orange-300 flex items-center justify-center gap-6 text-center">
            {skills.map((skill, index) => (
              <li  key={index} className="">
            <div className= " bg-orange-500 text-white mt-3 mx-2 rounded-lg p-4 flex flex-col items-center  h-20 w-40">
                    <i className={`${skill.iconClass} text-center text-2xl`}>
                      <p
                        className="text-center text-xs"
                        
                      >
                        {skill.name}
                      </p>
                    </i>
                  </div>
               
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

export default Services;
