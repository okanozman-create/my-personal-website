import Image from "../assets/example.png";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import resume from "../assets/cvjuly.pdf";
// import { useEffect } from "react";

const Home = () => {
  const handleDownload = () => {
    const confirmed = window.confirm("Do you want to download the resume?");
    if (confirmed) {
      const link = document.createElement("a");
      link.href = resume;
      link.download = "resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <section className="m-4 p-3">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:items-center lg:justify-center lg:gap-x-12">
          <div className="flex-1 pt-4 text-center lg:pt-28 lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-2 font-secondary text-[30px] font-bold leading-[0.8] lg:mb-4 lg:text-[55px]"
            >
              OKAN <span>OZMAN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-2 font-secondary text-[25px] font-semibold uppercase leading-[1] lg:mb-6 lg:text-[60px]"
            >
              <span className="mr-4 text-white">I am a </span>

              <TypeAnimation
                sequence={["Self-taught", 2000, "Programmer", 2000]}
                speed={15}
                className="text-zinc-800"
                wrapper="span"
                repeat={0}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-8 mt-4 max-w-lg p-4 font-tertiary text-[12px] text-white sm:text-[18px] lg:mx-0 lg:leading-7"
            >
              Hello, my name is Okan. After years, I finally achieved my dream,
              and since 2022, I have been programming and writing code on my
              own.On this page, you can find information about me. Have a nice
              surf!
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-12 flex max-w-max items-center gap-x-6 lg:mx-0"
            >
              <button
                className="mt-3 rounded-full bg-black px-4 py-2 font-bold text-white shadow-md shadow-[#009e66] duration-300 hover:scale-100 hover:bg-zinc-700 hover:shadow-lg"
                onClick={handleDownload}
              >
                Download CV
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="hidden max-w-[320px] lg:block"
          >
            <img
              className="w-full overflow-hidden rounded-lg md:rounded-full"
              src={Image}
              alt="Okanphoto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
