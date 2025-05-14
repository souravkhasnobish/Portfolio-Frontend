import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import image from '../assets/Profile.png';
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto md:px-20 m-5"
      >
        <div className="flex flex-col md:flex-row sm:gap-10 md:gap-25 lg:gap:20">
          <div className="md:w-2xl lg:w-1/2 p-4 mt-8 md:mt-24 md:pt-10 space-y-2 order-2 md:order-1 ">
            <span className="md:text-2xl sm:text-xl">Welcome In My Feed</span>
            <div className="flex space-x-2  sm:text-2xl  items-center flex-wrap">
              <h1>Hello, I&apos;m a</h1>

              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Web Developer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="sm:text-xl lg:text-2xl text-justify">
              LET&apos;S BUILD SOMETHING AMAZING TOGETHER
            </p>
            <br />
            {/* Social media icons */}
            <div className="flex flex-col md:flex-row md:space-y-0 space-y-6 justify-between items-center">
              <div className="space-y-2 ">
                <h1 className="font-bold  text-center">Available on</h1>
                <ul className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-2 lg:gap-5">
                  <li>
                    <a
                      href="https://www.instagram.com/crew_igl/"
                      target="_blank"
                    >
                      <FaSquareInstagram className="text-xl md:text-xl lg-text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sourav-khasnobish-58825a24a/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-xl md:text-xl lg-text-2xl  cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/souravkhasnobish"
                      target="_blank"
                    >
                      <FaGithub className="text-xl md:text-xl lg-text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me" target="_blank">
                      <FaTelegram className="text-xl md:text-xl lg-text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Currently working on section */}
              <div className="space-y-2 ml-3">
                <h1 className="font-bold text-center">Currently Working on</h1>
                <ul className="flex flex-wrap gap-5 justify-center  md:gap-2 lg:gap-5">
                  <li>
                    <SiMongodb className="text-xl md:text-xl lg-text-2xl hover:scale-110 duration-200 rounded-full" />
                  </li>
                  <li>
                    <SiExpress className="text-xl md:text-xl lg-text-2xl hover:scale-110 duration-200 rounded-full" />
                  </li>
                  <li>
                    <FaReact className="text-xl md:text-xl lg-text-2xl  hover:scale-110 duration-200 rounded-full" />
                  </li>
                  <li>
                    <FaNodeJs className="text-xl md:text-xl lg-text-2xl hover:scale-110 duration-200 rounded-full" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" mt-20 md:mt-20 md:pt-15 lg:p-2 lg:ml-10 xl:ml-50 order-1 flex justify-center md:justify-start  ">
            <img
              src={image}
              className="rounded-full w-50 h-50 sm:w-48 sm:h-48 md:w-[350px] md:h-[200px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[350px] 2xl:w-[400px] 2xl:h-[400px] 2xl:mr-5 xl:mb-5 object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Home;
