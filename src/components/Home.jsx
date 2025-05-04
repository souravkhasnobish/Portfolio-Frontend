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
        className="max-w-screen-2xl container mx-auto px-2 sm:px-4 md:px-20 my-10 sm:my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-8 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-lg sm:text-xl">Welcome In My Feed</span>
            <div className="flex space-x-2 text-xl sm:text-2xl md:text-4xl items-center flex-wrap">
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
            <p className="text-lg sm:text-xl md:text-md text-justify">
              LET&apos;S BUILD SOMETHING AMAZING TOGETHER
            </p>
            <br />
            {/* Social media icons */}
            <div className="flex flex-col md:flex-row md:space-y-0 space-y-6 justify-between items-center">
              <div className="space-y-2">
                <h1 className="font-bold  text-center">Available on</h1>
                <ul className="flex flex-wrap space-x-3 sm:space-x-5 justify-center md:justify-start">
                  <li>
                    <a
                      href="https://www.instagram.com/crew_igl/"
                      target="_blank"
                    >
                      <FaSquareInstagram className="text-xl sm:text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/sourav-khasnobish-58825a24a/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-xl sm:text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/souravkhasnobish"
                      target="_blank"
                    >
                      <FaGithub className="text-xl sm:text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://t.me" target="_blank">
                      <FaTelegram className="text-xl sm:text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              {/* Currently working on section */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently Working on</h1>
                <ul className="flex flex-wrap space-x-3 sm:space-x-5 justify-center md:justify-start">
                  <li>
                    <SiMongodb className="text-lg sm:text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                  </li>
                  <li>
                    <SiExpress className="text-lg sm:text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                  </li>
                  <li>
                    <FaReact className="text-lg sm:text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                  </li>
                  <li>
                    <FaNodeJs className="text-lg sm:text-xl md:text-3xl hover:scale-110 duration-200 rounded-full" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:mt-20 xl:ml-50 mt-8 order-1 flex justify-center md:justify-start p-2">
            <img
              src={image}
              className="rounded-full w-36 sm:w-48 h-36 sm:h-48 md:w-[450px] md:h-[450px] object-cover"
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
