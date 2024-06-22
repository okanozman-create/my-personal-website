// import React from 'react';

const Contact = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="m-4 flex items-center justify-between p-4 text-6xl">
        <div>
          <i className="devicon-github-original-wordmark colored"></i>
        </div>
        <div>
          <i className="devicon-linkedin-plain colored"></i>
        </div>
      </div>

      <div className="container mx-auto py-6">
        <div className="">
       
        <h1 className="mb-20 lg:mb-15  mt-5 text-center text-[45px] font-bold leading-[0.8] lg:mb-20 lg:text-[55px]">
            Contact details
          </h1>

          <ul className="flex flex-col items-start gap-y-5 lg:flex-row  lg:items-center lg:justify-around ">
         
            <li className="flex items-center justify-start gap-7">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                {" "}
                <span className="mb-4 text-2xl font-bold">
                  Ankara, Turkey
                </span>
              </div>
            </li>

            <li className="flex items-center justify-start gap-7 ">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10"
                >
                  <path
                    fillRule="evenodd"
                    d="M17.834 6.166a8.25 8.25 0 1 0 0 11.668.75.75 0 0 1 1.06 1.06c-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788 3.807-3.808 9.98-3.808 13.788 0A9.722 9.722 0 0 1 21.75 12c0 .975-.296 1.887-.809 2.571-.514.685-1.28 1.179-2.191 1.179-.904 0-1.666-.487-2.18-1.164a5.25 5.25 0 1 1-.82-6.26V8.25a.75.75 0 0 1 1.5 0V12c0 .682.208 1.27.509 1.671.3.401.659.579.991.579.332 0 .69-.178.991-.579.3-.4.509-.99.509-1.671a8.222 8.222 0 0 0-2.416-5.834ZM15.75 12a3.75 3.75 0 1 0-7.5 0 3.75 3.75 0 0 0 7.5 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                {" "}
                <span className="mb-4 text-2xl font-bold">okanozman88@gmail.com</span>
              </div>
            </li>

            <li className="flex items-center justify-center gap-7 ">
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-9"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                {" "}
                <span className="mb-4 text-2xl font-bold">+90 5333381535</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
