// import Img1 from "../assets/portfolio-img1.png";
import ImgCont from "../assets/contactImg.jpg";
import ImgWeath from "../assets/ImgWeather.jpg";
import  ImgPort from  "../assets/imagePortf2.png"

const Projects = () => {
  return (
    <section  >
      {/* <div className="container mx-auto"> */}

      <h1 className="text-[30px] font-bold leading-[0.8] lg:text-[55px] m text-center mb-10 lg:mb-20">
        My Projects
      </h1>

      <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:items-center lg:justify-evenly">
    

        <div className="">
          {/* ımages */}
          <div
            className="group relative overflow-hidden border-2 border-white/50 rounded-xl    h-40 w-60   lg:h-60 lg:w-80 mb-2 "
            // onClick={() =>
            //   (window.location.href =
            //     "https://master2.d35m01a902r94k.amplifyapp.com/")
            // }
          >
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
            {/* img */}
            <img
              className="group-hover:scale-125 transition-all duration-500 h-60 w-80"
              src={ImgWeath}
              alt=""
            />
            {/* pretitile */}
            <div className="absolute -bottom-full left-20  group-hover:bottom-16 lg:group-hover:bottom-24 transition-all duration-500 z-50 ">
              <span className="text-gradient">Full-Stack Deployment</span>
            </div>
          
          </div>
          <div>
            <div className="w-60 lg:w-80  text-black text-center ">
              <p className="font-primary font-bold text-base  bg-orange-300 p-4 rounded-b-lg">
                <span
                  className="font-secondary text-[18px] lg:text-[27px] font-bold text-orange-700  cursor-grab   after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100"
                  onClick={() =>
                    (window.location.href =
                      "https://master2.d35m01a902r94k.amplifyapp.com/")
                  }
                >
                  Weather <br /> Application
                  <br />
                </span>{" "}
                <span className="hidden lg:inline">This application allows users to input city names and retrieve
                the current weather conditions. It is deployed on Amazon and
                provides real-time weather information.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="">
          {/* ımages */}

          <div
            className="group relative overflow-hidden border-2 border-white/50 rounded-xl  h-40 w-60   lg:h-60 lg:w-80"
          
          >
            {/* overlay */}
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
            {/* img */}
            <img
              className="group-hover:scale-125 transition-all duration-500 h-60 w-80"
              src={ImgCont}
              alt=""
            />
            {/* pretitile */}
            <div className="absolute -bottom-full left-20  group-hover:bottom-16 lg:group-hover:bottom-24   transition-all duration-500 z-50 ">
              <span className="text-gradient ">Full-Stack Deployment</span>
            </div>
      
          </div>
          <div className="w-60 lg:w-80  text-black text-center mt-2">
            <p className="font-primary font-bold text-base  bg-orange-300 p-4 rounded-b-lg">
              <span
                className="font-secondary text-[18px] lg:text-[27px] font-bold text-orange-700 cursor-grab after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100"
                onClick={() =>
                  (window.location.href =
                    "https://master.d73081eebwwdg.amplifyapp.com/")
                }
              >
                Contact Form<br/>Application
              
              </span>{" "}
           
              <span className="hidden lg:inline">   Another React application where users fill out specific input
              fields, including mandatory data, and the information is sent to
              an Amazon S3 bucket.</span>
            </p>
          </div>
        </div>

        {/* aaaaaaaaaaaaaaaaaaa */}

        <div className="">
     

          <div
            className="group relative overflow-hidden border-2 border-white/50 rounded-xl  h-40 w-60   lg:h-60 lg:w-80"
     
          >
        
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 ">
            
              <img
                className="group-hover:scale-125 transition-all duration-500 h-60 w-80"
                src={ImgPort}
                alt=""
              />
            </div>

           
            <div className="absolute -bottom-full left-20  group-hover:bottom-16 lg:group-hover:bottom-24 transition-all duration-500 z-50 ">
              <span className="text-gradient">Full-Stack Deployment</span>
            </div>
            
          </div>
          <div className="w-60 lg:w-80  text-black text-center mt-2">
            <p className="font-primary font-bold text-base  bg-orange-300 p-4 rounded-b-lg ">
              <span
                className="font-secondary text-[18px] lg:text-[27px] font-bold text-orange-700   cursor-grab   after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100"
                onClick={() =>
                  (window.location.href =
                    "https://www.okan-ozman.com/")
                }
              >
                My Personal <br /> Website
                <br />
              </span>{" "}
             

              <span className="hidden lg:inline">   Built a responsive personal website/portfolio using React and
              Tailwind CSS, featuring a modern design and optimized for all
              devices.</span>

              
            </p>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Projects;


