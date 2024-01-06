
const Card = ({ img, code, demo }) => {
  return (
    <div className='group'>
      <div className="work-content">
          <img
              src={img}
              className="work-img"
              alt="Louvre" />
          <div className="work-overlay">
          <a href={code}><button className='work-light-btn'>Code</button></a>
          <a href={demo}><button className='work-dark-btn'>Demo</button></a>
          </div>
      </div>
    </div>
  )
}

export default Card
