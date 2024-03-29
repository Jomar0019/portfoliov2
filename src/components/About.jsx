
const About = () => {
  return (
    <div name="about" className='page light-mode'>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
                <p className='title'>About</p>
            </div>
            <div>

            </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-4 md:gap-8 px-4'>
            <div className='sm:text-right text-2xl md:text-4xl font-bold'>
                <p className='text-[#303030]'>Hi. I'm Jomar, nice to meet you. Please take a look around.</p>
            </div>
            <div>
                <p className='text-[#303030]'>I am passionate about building excellent software that improves
                the lives of those around me. I specialize in creating software
                for clients ranging from individuals and small-businesses all the
                way to large enterprise corporations. What would you do if you had
                a software expert available at your fingertips?</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
