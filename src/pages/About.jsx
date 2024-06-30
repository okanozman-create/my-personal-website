import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="max-w-ful m-3 p-2 lg:p-5" id="about" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col items-center"
        >
          <h1 className="mb-6 mt-4 text-[30px] font-bold leading-[0.8] lg:text-[55px]">
            About me
          </h1>
          <p className="mb-3 font-secondary text-[20px] font-bold text-gray-950 lg:mb-7 lg:text-[35px]">
            I'am a Freelance Web Developer.
          </p>
          <p className="mb-1 p-2 font-tertiary text-[12px] text-white sm:text-[20px] md:leading-7 lg:mb-6">
            I have been continuing my software development journey that I
            started in 2022 at full speed. Over nearly two years, I have been
            developing projects and continuing to learn about React, React
            libraries and tools, JavaScript, CSS, and HTML. In the software
            sector, I find myself to be calm, mature, decisive, and
            solution-oriented in the face of problems. I am genuinely eager,
            determined, and ambitious when it comes to software. With this
            belief, I want to take a more active role in this sector as a Junior
            Web Developer.
          </p>

          <div className="mb-12 flex items-center gap-4">
            <div className="text-gradient mb-2 font-tertiary text-[35px] font-bold lg:text-[50px]">
              {inView ? <CountUp start={0} end={2} duration={5} /> : null}
            </div>
            <div className="font-primary text-[20px] font-bold md:text-3xl">
              Years of Experience
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
