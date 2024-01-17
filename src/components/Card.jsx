
const Card = ({ img, code, demo }) => {
  return (
    <div className='group'>
      {/* Web  */}
      <div className="hidden md:flex relative overflow-hidden rounded-md shadow-lg">
          <img
              src={img}
              className="w-full object-cover"
              alt="Louvre" />

          <div className="absolute h-full w-full bg-gradient-to-r from-cyan-500/50 to-blue-500/50 flex gap-2 items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <a href={code}><button className='bg-white px-5 py-2 text-black font-bold rounded'>Code</button></a>
            <a href={demo}><button className='bg-black px-5 py-2 text-white/90 font-bold rounded'>Demo</button></a>
          </div>

 
      </div>


      {/* Mobile  */}  
      <div className="md:hidden overflow-hidden rounded-md shadow-lg">
          <img
              src={img}
              className="w-full object-cover"
              alt="Louvre" />

          <div className=" w-full bg-gradient-to-r from-cyan-500/50 to-blue-500/50  p-1 flex gap-1 items-center justify-end bottom-0">
            <a href={code}><button className='bg-white px-4 py-1 text-black font-bold rounded text-sm md:text-base'>Code</button></a>
            <a href={demo}><button className='bg-black px-4 py-1 text-white/90 font-bold rounded text-sm md:text-base'>Demo</button></a>
          </div>

          {/* Mobile  */}
          
      </div>
    </div>
  )
}

export default Card
