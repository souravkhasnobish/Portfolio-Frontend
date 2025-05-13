import React from 'react'
import Tictactoe from "../../public/Tic-tac-toe.png"
const Portfolio = () => {
 const projects = [
   {
     id: 1,
     name: "Tic Tac Toe",
     description:
       "A simple Tic Tac Toe game built with React. Play against a friend or the computer.",
     image: Tictactoe,
     githubLink: "https://github.com/souravkhasnobish/Tic-Tac-Toe",
      link: "https://tic-tac-toe-flax-six-23.vercel.app/",
   }
    ]
  return (
    <section id="projects" className=" mb-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-20 2xl:px-10 2xl:ml-10 ">
        <h3 className="text-3xl font-bold mb-12 text-start">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="dark:bg-gray-800 bg-gray-50 rounded-lg p-6 hover:dark:bg-gray-700 hover:bg-gray-100 transition shadow-lg"
            >
              <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded mb-4 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
              <p className="dark:text-gray-400 text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-gray-700 bg-gray-200 dark:text-white text-black px-4 py-2 text-sm rounded hover:dark:bg-gray-600 hover:bg-gray-300 transition"
                >
                  GitHub
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 text-sm rounded shadow hover:from-green-600 hover:to-green-700 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
