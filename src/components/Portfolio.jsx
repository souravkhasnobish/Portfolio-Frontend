import python from "../../public/python.webp"
import mongoDB from "../../public/mongodb.svg"
import express from "../../public/express.png"
import react from "../../public/react.svg"
import nodejs from "../../public/node.svg"
const Portfolio = () => {
  const cardItems=[
    {
      id:1,
      logo:mongoDB,
      name:"MongoDB"
    },

    {
      id:2,
      logo:express,
      name:"Express"
    },

    {
      id:3,
      logo:react,
      name:"React"
    },

    
    {
      id:4,
      logo:nodejs,
      name:"NodeJS"
    },

    {
      id:5,
      logo:python,
      name:"Python"
    },

  ]
  return (
    <div name="Portfolio"className="max-w-screen-2xl container mx-auto px-4 md:px-20">
      <div>
        <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
        <span className='underline semi-bold'>Featured Projects</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
         {cardItems.map(({id,logo,name})=>(
          <div key={id} className='md:w-[300px] md:h-[300px]  rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300'>
<img src={logo} className='max-w-[120px] max-h-[120px] object-contain p-1' alt="" />
            <div>
              <div className='font-bold text-xl mb-2 px-2'>{name}</div>
              <p className='px-2 text-gray-700'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='justify-around px-6 py-4 space-x-3'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 py-4 rounded'>Video</button>
              <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-2 py-4 rounded'>Source code</button>
            </div>
          </div>
         ))}
        </div>
      </div>
      
    </div>
  )
}

export default Portfolio
