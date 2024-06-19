
//countup
import CountUp from "react-countup";
//intersection observer hook
import { useInView } from "react-intersection-observer";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";


const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0">
          {/* image */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            whileHover={{ scale: 1.1 }}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 bg-aboutImg bg-contain bg-no-repeat h-[640px]
           bg-center rounded-full transition-all duration-300"
          ></motion.div>

          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <h1  className="text-[45px] font-bold leading-[0.8] lg:text-[55px] mb-4">About me</h1>
            <span  className="mb-6 text-[25px] lg:text-[35px] font-secondary font-bold text-gray-950">I'am a Freelance Web Developer.</span>
            <p className="mb-6 text-sm sm:text-[18px] font-primary">
              Starting my software development journey in 2022, I've quickly
              mastered key web technologies like HTML, CSS, Tailwind,
              JavaScript, and React, while also gaining self-taught expertise in
              Amazon Web Services. This experience has honed my critical
              thinking and problem-solving abilities, essential for innovative
              web and application development. I'm eager to contribute my
              determination, technical proficiency, and continuous learning
              mindset to your projects. As a Junior Frontend Developer, I'm
              committed to delivering high-quality solutions and staying at the
              cutting edge of technology trends. Let's collaborate to bring your
              vision to life.
            </p>
            {/* stats */}
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[50px] font-tertiary text-gradient mb-2 font-bold">
                  {inView ? <CountUp start={0} end={2} duration={5} /> : null}
                </div>
                <div className="font-primary text-3xl tracking-[2px] font-bold ">
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