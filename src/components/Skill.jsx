import HTML from '../assets/html-5.png'
import CSS from '../assets/css-3.png'
import JavaScript from '../assets/js.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
// import Firebase from '../assets/firebase.png'
import GitHub from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'
import Mongo from '../assets/mongo.png'

const Skill = () => {
  return (
    <div name='skills' className='page light-mode'>

      {/*  container  */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className=''>
            <p className='title'>Skills</p>
            <p className='py-4 text-[#303030]'>{`These are technologies I've worked with`}</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
            <div className='skill-card'>
                <img className='w-12 md:w-20 mx-auto' src={HTML} alt="hmtl" />
                <p className='text-[#303030] text-sm font-semibold md:text-md my-4'>HTML5</p>
            </div>
            <div className='skill-card'>
                <img className='w-12 md:w-20 mx-auto' src={CSS} alt="hmtl" />
                <p className='text-[#303030] text-sm font-semibold md:text-md my-4'>CSS3</p>
            </div>
            <div className='skill-card'>
                <img className='w-12 md:w-20 mx-auto' src={JavaScript} alt="hmtl" />
                <p className='text-[#303030] text-sm font-semibold md:text-md my-4'>JAVASCRIPT</p>
            </div>
            <div className='skill-card'>
                <img className='w-12 md:w-20 mx-auto' src={ReactImg} alt="hmtl" />
                <p className='text-[#303030] text-sm font-semibold md:text-md my-4'>REACT</p>
            </div>
            <div className='skill-card'>
                <img className='w-12 md:w-20 mx-auto' src={GitHub} alt="hmtl" />
                <p className='text-[#303030] text-sm font-semibold md:text-md my-4'>GITHUB</p>
            </div>
            <div className='skill-card'>
                <img className='w-12 md:w-20 mx-auto' src={Node} alt="hmtl" />
                <p className='text-[#303030] text-sm font-semibold md:text-md my-4'>NODE JS</p>
            </div>
            <div className='skill-card'>
                <img className='w-12 md:w-20 mx-auto' src={Mongo} alt="hmtl" />
                <p className='text-[#303030] text-sm font-semibold md:text-md my-4'>MONGO DB</p>
            </div>
            
            <div className='skill-card'>
                <img className='w-12 md:w-20 mx-auto' src={Tailwind} alt="hmtl" />
                <p className='text-[#303030] text-sm font-semibold md:text-md my-4'>TAILWINDCSS</p>
            </div>
        </div>
        
      </div>

    </div>
  )
}

export default Skill
