import { GoLocation } from "react-icons/go";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="m-4 flex items-center justify-evenly p-4 text-2xl lg:justify-evenly lg:text-6xl">
        <a
          href="https://github.com/okanozman-create"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-github-original-wordmark colored"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/okan-ozman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="devicon-linkedin-plain colored"></i>
        </a>
      </div>

    

      <div className="container m-6 mx-auto p-6 lg:mt-24">
        <h1 className="lg:mb-15 mb-10 text-center text-[30px] font-bold leading-[0.8] lg:mb-20 lg:text-[55px]">
          Contact Details
        </h1>

        <ul className="flex flex-col items-start justify-center gap-y-6 lg:flex-row lg:items-center lg:justify-around">
          <li className="flex items-center justify-center gap-2">
            <div>
              <GoLocation className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold lg:text-2xl">Ankara, Turkey</p>
          </li>

          <li className="flex items-center justify-center gap-2">
            <div>
              <SiGmail className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold lg:text-2xl">
              okanozman88@gmail.com
            </p>
          </li>

          <li className="flex items-center justify-center gap-2">
            <div>
              <FaPhoneAlt className="h-5 w-5" />
            </div>
            <p className="text-sm font-bold lg:text-2xl"> +90 533-338-15-35</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
