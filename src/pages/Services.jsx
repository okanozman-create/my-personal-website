import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Services() {
  const skills = [
    { name: "React", iconClass: "devicon-react-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "CSS 3", iconClass: "devicon-css3-plain colored" },
    { name: "TailwindCSS", iconClass: "devicon-tailwindcss-original colored" },
    { name: "HTML 5", iconClass: "devicon-html5-plain" },
    { name: "AWS", iconClass: "devicon-amazonwebservices-plain-wordmark" },
    { name: "Loading...", iconClass: "devicon-nodejs-plain-wordmark" },
    { name: "Loading...", iconClass: "devicon-mongodb-plain" },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 640);
  };

  
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="flex h-screen flex-col items-center py-8 lg:py-12">
      <h1 className="m mb-10 text-center bg-gradient-to-r from-orange-500 text-[15px] font-extrabold leading-[0.8] lg:text-[20px] font-secondary  ">
      01010011 01001011 01001001 01001100 01001100 01010011

      </h1>
      <div className="w-60">
        <div className="mb-2  lg:mb-10 border-4 border-orange-500"></div>
      </div>
      <div className="container mx-auto">
        <div className="">
          <motion.ul
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="m-2 flex items-center justify-center gap-6 p-5 text-center lg:bg-orange-300"
          >
            {skills.map((skill, index) => (
              <li key={index} className="">
                <div className="mx-2 mt-3 flex h-20 w-20 flex-col items-center rounded-lg bg-orange-500 p-4 text-white">
                  <i className={`${skill.iconClass} text-center text-2xl`}>
                    <p className="text-center text-xs">{skill.name}</p>
                  </i>
                </div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      <div className="">
        {isSmallScreen ? (
          <div className="flex flex-col items-center gap-y-8">
            <h1 className="mb-3 lg:mb-10  mt-5 lg:mt-20 text-center text-[30px] font-bold leading-[0.8] lg:text-[55px]">
              Services I Provide
            </h1>
            <ul className="space-y-4 text-2xl font-semibold">
              <li className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                  1
                </div>
                <h3 className="ml-4 text-[15px]">
                  Full Stack Deployment with AWS.
                </h3>
              </li>
              <li className="flex items-center space-x-2 text-[15px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                  2
                </div>
                <h3 className="ml-4">Creating Dynamic Web Pages with React.</h3>
              </li>
              <li className="flex items-center space-x-2 text-[15px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                  3
                </div>
                <h3 className="ml-4 text-[15px]">
                  Junior-Level Web Development Debugging.
                </h3>
              </li>
            </ul>
          </div>
        ) : (
          <div className="mt-10 lg:block">
            <h1 className="m mb-10 text-center text-[45px] font-bold leading-[0.8] lg:text-[55px] font-secondary">
              Services I Provide
            </h1>
            <ul className="flex justify-center gap-8">
              <li className="m-4 w-[350px] bg-orange-300 p-4 text-center">
                <h2 className="text3xl font-bold">
                  Full Stack Deployment with AWS
                </h2>
                <p className="font-primary">
                  Implementing Full Stack Deployment Using Amazon Amplify,
                  Lambda Functions, API Gateway, and S3 Bucket Services, and
                  Acquiring a Domain Using Route 53
                </p>
              </li>
              <li className="m-4 w-[350px] bg-orange-300 p-4 text-center">
                <h2 className="text3xl font-bold">Web Development</h2>
                <p className="font-primary">
                  Meeting all kinds of frontend needs using React, JavaScript,
                  Tailwind, CSS,HTML and varios React libraries.
                </p>
              </li>
              <li className="m-4 w-[350px] bg-orange-300 p-4 text-center">
                <h2 className="text3xl font-bold">Responsive Designs</h2>
                <p className="font-primary">
                  Designs are responsive to all devices and adhere to friendly
                  UI/UX principles with up-to-date information.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;

