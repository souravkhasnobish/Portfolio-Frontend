import html from "../../public/html.svg";
import css from "../../public/css.svg";
import javascript from "../../public/javascript.svg";
import react from "../../public/react.svg";
import nodejs from "../../public/node.svg";
import mongodb from "../../public/mongodb.svg";
const Experience = () => {
  const cardItems = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },

    {
      id: 2,
      logo: css,
      name: "CSS",
    },

    {
      id: 4,
      logo: javascript,
      name: "Javascript",
    },

    {
      id: 5,
      logo: react,
      name: "React",
    },

    {
      id: 6,
      logo: nodejs,
      name: "NodeJs",
    },

    {
      id: 7,
      logo: mongodb,
      name: "MongoDB",
    }
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-1"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p>I have experience in these technologies</p>
        <div className="grid grid-cols-2 md:grid-cols-3 my-3 p-2 gap-3  ">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className=" md:mx-auto md:h-[200px] md:w-[200px] flex flex-col items-center justify-center rounded-full shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={logo}
                className="xl:max-w-[150px] xl:max-h-[150px] sm:max-w-[100px] sm:max-h-[100px] object-contain "
                alt=""
              />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
