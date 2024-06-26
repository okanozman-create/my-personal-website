import ImgCont from "../assets/contactImg.jpg";
import ImgWeath from "../assets/ImgWeather.jpg";


const Projects = () => {
  return (
    <section>
      <h1 className="m mb-10 mt-4 p-3 lg:mt-10 text-center text-[25px] font-bold leading-[0.8] lg:mb-20 lg:text-[55px]">
        My Projects
      </h1>

      <div className="flex flex-col items-center gap-y-10 lg:flex-row lg:items-center lg:justify-evenly">
        <div className="">
          <div className="group relative mb-2 h-40 w-60 overflow-hidden rounded-xl border-2 border-white/50 lg:h-60 lg:w-80">
            <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>

            <img
              className="h-60 w-80 transition-all duration-500 group-hover:scale-125"
              src={ImgWeath}
              alt=""
            />

            <div className="absolute -bottom-full left-20 z-50 transition-all duration-500 group-hover:bottom-16 lg:group-hover:bottom-24">
              <span className="text-gradient">Full-Stack Deployment</span>
            </div>
          </div>
          <div>
            <div className="w-60 text-center text-black lg:w-80">
              <p className="rounded-b-lg bg-orange-300 p-4 font-primary text-base font-bold">
                <span
                  className="cursor-grab font-secondary text-[18px] font-bold text-orange-700 after:mt-1 after:block after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-[#009e66] after:transition-transform after:delay-200 after:ease-linear after:content-[''] hover:after:scale-x-100 lg:text-[27px]"
                  onClick={() =>
                    (window.location.href =
                      "https://master2.d35m01a902r94k.amplifyapp.com/")
                  }
                >
                  Weather <br /> Application
                  <br />
                </span>{" "}
                <span className="hidden lg:inline">
                  This application allows users to input city names and retrieve
                  the current weather conditions. It is deployed on Amazon and
                  provides real-time weather information.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="group relative h-40 w-60 overflow-hidden rounded-xl border-2 border-white/50 lg:h-60 lg:w-80">
            <div className="absolute z-40 h-full w-full transition-all duration-300 group-hover:bg-black/70"></div>

            <img
              className="h-60 w-80 transition-all duration-500 group-hover:scale-125"
              src={ImgCont}
              alt=""
            />

            <div className="absolute -bottom-full left-20 z-50 transition-all duration-500 group-hover:bottom-16 lg:group-hover:bottom-24">
              <span className="text-gradient">Full-Stack Deployment</span>
            </div>
          </div>
          <div className="mt-2 w-60 text-center text-black lg:w-80">
            <p className="rounded-b-lg bg-orange-300 p-4 font-primary text-base font-bold">
              <span
                className="cursor-grab font-secondary text-[18px] font-bold text-orange-700 after:mt-1 after:block after:h-1 after:w-full after:origin-left after:scale-x-0 after:bg-[#009e66] after:transition-transform after:delay-200 after:ease-linear after:content-[''] hover:after:scale-x-100 lg:text-[27px]"
                onClick={() =>
                  (window.location.href =
                    "https://master.d73081eebwwdg.amplifyapp.com/")
                }
              >
                Contact Form
                <br />
                Application
              </span>{" "}
              <span className="hidden lg:inline">
                {" "}
                Another React application where users fill out specific input
                fields, including mandatory data, and the information is sent to
                an Amazon S3 bucket.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;


