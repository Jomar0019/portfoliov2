import Card from './Card'
import data from '../ProjectData'

const Work = () => {

    const cards = data.map( item => {
        return (
          <Card key={item.key} img={item.img} code={item.code} demo={item.link} />
        )
    })

  return (
    <div name="work" className='w-full md:h-screen light-mode'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className=''>
            <p className='title'>Work</p>
            <p className='py-6 text-[#303030]'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-3 md:gap-6'>

        {cards}
      
           
        </div>

      </div>
    </div>
  )
}

export default Work
