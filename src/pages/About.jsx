// import CountUp from "react-countup";
// import { useInView } from "react-intersection-observer";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";
// import aboutImg from "../assets/bg22.gif";
// const About = () => {
//   const [ref, inView] = useInView({
//     threshold: 0.5,
//   });

//   return (
//     <section className="" id="about" ref={ref}>
//       <div className="">
//         <div className="flex flex-col gap-y-2 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 m-5 px-2 lg:p-5">
//           <div className="flex flex-1">
//             <img
//               className="hidden h-[50px] w-[150px] -translate-y-4 rounded-xl transition-all duration-500 lg:block lg:h-[350px] lg:w-[450px] lg:hover:scale-125 lg:hover:rounded-full"
//               // className="h-[50px] w-[150px] -translate-y-4 rounded-xl transition-all duration-500 lg:h-[350px] lg:w-[450px] lg:hover:scale-125 lg:hover:rounded-full hidden lg:block"
//               src={aboutImg}
//               alt=""
//             />
//           </div>

//           {/* text */}
//           <motion.div
//             variants={fadeIn("left", 0.5)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.3 }}
//             className="flex-1"
//           >
//             <h1 className="mb-6 text-[30px] font-bold leading-[0.8] lg:text-[55px]">
//               About me
//             </h1>
//             <p className="mb-3 font-secondary text-[20px] font-bold text-gray-950 lg:text-[35px]">
//               I‘am a Freelance Web Developer.
//             </p>
//             <p className="mb-1 bg-orange-300 p-2 font-primary text-[12px] sm:text-[18px] md:leading-7 lg:mb-6">
//               I have been continuing my software development journey that I
//               started in 2022 at full speed. Over nearly two years, I have been
//               developing projects and continuing to learn about React, React
//               libraries and tools, JavaScript, CSS, and HTML. Everyone finds
//               those over 35 years old to be latecomers to a new sector. However,
//               especially in the software sector, I find myself to be calm,
//               mature, decisive, and solution-oriented in the face of problems.
//               When it comes to software, I am genuinely eager, determined, and
//               ambitious. With this belief, I want to take a more active role in
//               this sector as a Junior Web Developer.
//             </p>
//             {/* stats */}
//             <div className="mb-12 flex gap-x-6 lg:gap-x-10">
//               <div>
//                 <div className="text-gradient mb-2 font-tertiary text-[35px]  font-bold lg:text-[50px]">
//                   {inView ? <CountUp start={0} end={2} duration={5} /> : null}
//                 </div>
//                 <div className="font-primary text-[20px] font-bold md:text-3xl md:tracking-[2px]">
//                   Years of <br />
//                   Experience
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;





import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });



  // .section {
  //    @apply py-8 lg:py-24 lg:h-screen flex items-center; 

  // }



  return (
    <section className="p-5 m-3 max-w-ful"  id="about" ref={ref}>
      
        <div className="container mx-auto">
          

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col items-center"
          >
            <h1 className="mb-6 mt-4 text-[30px] font-bold leading-[0.8] lg:text-[55px]  ">
              About me
            </h1>
            <p className="mb-3 lg:mb-7 font-secondary  text-[20px] font-bold text-gray-950 lg:text-[35px] ">
              I'am a Freelance Web Developer.
            </p>
            <p className="mb-1 p-2 font-tertiary text-[12px] sm:text-[20px] md:leading-7 lg:mb-6 text-white">
              I have been continuing my software development journey that I
              started in 2022 at full speed. Over nearly two years, I have been
              developing projects and continuing to learn about React, React
              libraries and tools, JavaScript, CSS, and HTML. Everyone finds
              those over 35 years old to be latecomers to a new sector. However,
              especially in the software sector, I find myself to be calm,
              mature, decisive, and solution-oriented in the face of problems.
              When it comes to software, I am genuinely eager, determined, and
              ambitious. With this belief, I want to take a more active role in
              this sector as a Junior Web Developer.
            </p>
            {/* stats */}
            <div className="mb-12 flex items-center  gap-4">
             
                <div className="text-gradient mb-2 font-tertiary text-[35px]  font-bold lg:text-[50px]">
                  {inView ? <CountUp start={0} end={2} duration={5} /> : null}
                </div>
                <div className="font-primary text-[20px] font-bold md:text-3xl">
                  Years of 
                  Experience
                </div>
              
            </div>
          </motion.div>





        </div>
      
    </section>
  );
};

export default About;
