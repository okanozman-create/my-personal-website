import Img1 from "../assets/portfolio-img1.png";


const Projects = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <div className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">My Projects</h2>

              <p className="max-w-sm mb-2 text-sm sm:text-[18px] leading-[1.5]">
                In my self-learning journey, I have developed two React
                applications
                <br />
                <span className="font-primary font-semibold  text-accent">
                  Weather Application:
                </span>{" "}
                This application allows users to input city names and retrieve
                the current weather conditions. It is deployed on Amazon and
                provides real-time weather information.
                <br />
                <span className="font-primary font-semibold  text-accent">
                  Contact Form Application: 
                </span>
                {" "}Another React application where users fill out specific input
                fields, including mandatory data, and the information is sent to
                an Amazon S3 bucket.
              </p>
              {/* <button className="btn btn-sm">View all projects</button> */}
            </div>
            {/* ımages */}
            <div
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://master2.d35m01a902r94k.amplifyapp.com/")
              }
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitile */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">Full-Stack Deployment</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white ">Weather App</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            {/* ımages */}

            <div
              className="group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://master.d73081eebwwdg.amplifyapp.com/")
              }
            >
              {/* overlay */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img1}
                alt=""
              />
              {/* pretitile */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-gradient">Full-Stack Deployment</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white ">Contact Form</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
