// Skills.jsx
// import React from "react";
// import '../Skills.css';
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

  // Function to check screen size
  const checkScreenSize = () => {
    setIsSmallScreen(window.innerWidth <= 640);
  };

  // Check screen size on mount and on window resize
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="flex h-screen flex-col items-center py-8 lg:py-12">
      <h1 className="m mb-10 text-center text-[45px] font-bold leading-[0.8] lg:text-[55px]">
        SKILLS
      </h1>
      <div className="w-60">
        <div className="mb-10 border-4 border-borderOr"></div>
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
            <h1 className="mb-10 mt-20 text-center text-[45px] font-bold leading-[0.8] lg:text-[55px]">
              Services I Provide
            </h1>
            <ol className="list-inside list-decimal space-y-4 text-2xl font-semibold">
              <li className="flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                  1
                </div>
                <h3 className="ml-4 text-[22px]">
                  Full Stack Deployment with AWS.
                </h3>
              </li>
              <li className="flex items-center space-x-2 text-[22px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                  2
                </div>
                <h3 className="ml-4">Creating Dynamic Web Pages with React.</h3>
              </li>
              <li className="flex items-center space-x-2 text-[22px]">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                  3
                </div>
                <h3 className="ml-4">
                  Junior-Level Web Development Debugging.
                </h3>
              </li>
            </ol>
          </div>
        ) : (
          <div className="mt-10 lg:block">
            <h1 className="m mb-10 text-center text-[45px] font-bold leading-[0.8] lg:text-[55px]">
              Services I Provide
            </h1>
            <ul className="flex justify-center gap-8">
              <li className="m-4 w-[350px] bg-orange-300 p-4 text-center">
                <h2 className="text3xl font-bold">
                  Full Stack Deployment with AWS
                </h2>
                <p>
                  Implementing Full Stack Deployment Using Amazon Amplify,
                  Lambda Functions, API Gateway, and S3 Bucket Services, and
                  Acquiring a Domain Using Route 53
                </p>
              </li>
              <li className="m-4 w-[350px] bg-orange-300 p-4 text-center">
                <h2 className="text3xl font-bold">Web Development</h2>
                <p>
                  Meeting all kinds of frontend needs using React, JavaScript,
                  Tailwind, CSS,HTML and varios React libraries.
                </p>
              </li>
              <li className="m-4 w-[350px] bg-orange-300 p-4 text-center">
                <h2 className="text3xl font-bold">Responsive Designs</h2>
                <p>
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

<div class="max-w-xl px-6 text-left">
  <h2 class="font-general-medium text-primary-dark dark:text-primary-light mb-8 mt-12 text-2xl">
    Contact details
  </h2>
  <ul class="font-general-regular">
    <li class="flex">
      <i class="mr-4 text-2xl text-gray-500 dark:text-gray-400">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      </i>
      <span class="text-ternary-dark dark:text-ternary-light mb-4 text-lg">
        Your Address, Your City, Your Country
      </span>
    </li>
    <li class="flex">
      <i class="mr-4 text-2xl text-gray-500 dark:text-gray-400">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      </i>
      <span class="text-ternary-dark dark:text-ternary-light mb-4 text-lg">
        email@domain.com
      </span>
    </li>
    <li class="flex">
      <i class="mr-4 text-2xl text-gray-500 dark:text-gray-400">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      </i>
      <span class="text-ternary-dark dark:text-ternary-light mb-4 text-lg">
        555 8888 888
      </span>
    </li>
  </ul>
</div>;
