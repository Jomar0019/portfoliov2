import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='page light-mode'>
      {/* container  */}
      <div className="max-w-[1000px] mx-auto px-5 flex flex-col justify-center h-full">
          <p className='text-base text-[#303030]'>Hi, my name is </p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#1b1c1e]'>Jomar Magpoot</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#303030]'>{`I'm a Web Developer.`}</h2>
          <p className='text-[#303030] py-4 max-w-[700px]'>{`I'm a web developer specializing in building(and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.`}</p>
          <div>
            <Link 
              to="work"
              smooth={true}
              offset={50}
              duration={500} >
              <button className='home-btn'>
              View Work <HiArrowNarrowRight className='ml-3' />
              </button>
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Home
