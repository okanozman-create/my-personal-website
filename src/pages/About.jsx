//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

import aboutImg from "../assets/bg22.gif";
const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          <div className="flex flex-1">
            <img
              className="h-[150px] w-[250px] -translate-y-4 rounded-xl transition-all duration-500 lg:h-[350px] lg:w-[450px] lg:hover:scale-125 lg:hover:rounded-full"
              src={aboutImg}
              alt=""
              //  style={{ width: '400px', height: '300px' }}
            />
          </div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h1 className="mb-4 text-[45px] font-bold leading-[0.8] lg:text-[55px]">
              About me
            </h1>
            <span className="mb-6 font-secondary text-[25px] font-bold text-gray-950 lg:text-[35px]">
              I'am a Freelance Web Developer.
            </span>
            <p className="mb-6 bg-orange-300 p-4 font-primary text-16px sm:text-[18px] md:leading-7">
              I have been continuing my software development journey that I
              started in 2022 at full speed. Over nearly two years, I have been
              developing projects and continuing to learn about React, React
              libraries, JavaScript, CSS, and HTML. Everyone finds those over 35
              years old to be latecomers to a new sector. However, especially in
              the software sector, I find myself to be calm, mature, decisive,
              and solution-oriented in the face of problems. When it comes to
              software, I am genuinely eager, determined, and ambitious. With
              this belief, I want to take a more active role in this sector as a
              Junior Web Developer.
            </p>
            {/* stats */}
            <div className="mb-12 flex gap-x-6 lg:gap-x-10">
              <div>
                <div className="text-gradient mb-2 font-tertiary text-[50px] font-bold">
                  {inView ? <CountUp start={0} end={2} duration={5} /> : null}
                </div>
                <div className="font-primary font-bold md:text-3xl md:tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
