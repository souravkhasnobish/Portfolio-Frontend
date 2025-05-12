import python from "../../public/python.webp"
import mongoDB from "../../public/mongodb.svg"
import express from "../../public/express.png"
import react from "../../public/react.svg"
import nodejs from "../../public/node.svg"
const Portfolio = () => {
  const cardItems = [
    {
      id: 1,
      logo: mongoDB,
      name: "MongoDB",
    },

    {
      id: 2,
      logo: express,
      name: "Express",
    },

    {
      id: 3,
      logo: react,
      name: "React",
    },

    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
    },

    {
      id: 5,
      logo: python,
      name: "Python",
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-1 mb-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <p>My Projects</p>
        <div className="grid grid-cols-2 md:grid-cols-4 my-3 p-2 gap-x-2">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:h-[200px] md:w-[200px] flex flex-col items-center justify-center rounded-full shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
            >
              <img
                src={logo}
                className="md:max-w-[150px] md:max-h-[150px] sm:max-w-[130px] sm:max-h-[130px] object-cover"
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
export default Portfolio
