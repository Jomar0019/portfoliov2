import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/b-logoT.png'
import { Link } from 'react-scroll'

const Nav = () => {

    const [ nav, setNav ] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }

  return (
    <div className='nav light-mode'>
    <div>
      <Link 
        to="home" 
        smooth={true} 
        offset={50} 
        duration={500}>
        <img src={Logo} alt="logo" style={{width: '80px'}}/>
      </Link>
    </div>

    {/* Menu */}
    <div className='hidden md:flex'>
      <ul className='hidden md:flex text-[#1F1F1F] font-bold'>
        <li>
          <Link 
            to="home" 
            smooth={true} 
            offset={50} 
            duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link 
            to="about" 
            smooth={true} 
            offset={50} 
            duration={500}>
            About
          </Link>
        </li>

        <li>
          <Link 
            to="skills" 
            smooth={true} 
            offset={50} 
            duration={500}>
            Skills
          </Link>
        </li>

        <li>
          <Link 
            to="work" 
            smooth={true} 
            offset={50} 
            duration={500}>
            Work
          </Link>
        </li>

        <li>
          <Link 
            to="contact" 
            smooth={true} 
            offset={50} 
            duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>

    {/* Hamburger Menu  */}
    <div className='md:hidden cursor-pointer z-10' onClick={handleClick}>
      {!nav ? <FaBars size={30} /> : <FaTimes size={30}/> }
    </div>

    {/* Mobile Menu  */}
    <ul className={nav ? 'mobile-nav light-mode text-[#1b1c1e]' : 'hidden'}>
      <li className='nav-item'>
        <Link 
          onClick={handleClick}
          to="home" 
          smooth={true} 
          offset={50} 
          duration={500}>
          Home
        </Link>
      </li>

      <li className='nav-item'>
        <Link 
          onClick={handleClick}
          to="about" 
          smooth={true} 
          offset={50} 
          duration={500} 
          >
          About
        </Link>
      </li>

      <li className='nav-item'>
        <Link 
          onClick={handleClick}
          to="skills" 
          smooth={true} 
          offset={50} 
          duration={500} 
          >
          Skills
        </Link>
      </li>

      <li className='nav-item'>
        <Link 
          onClick={handleClick}
          to="work" 
          smooth={true} 
          offset={50} 
          duration={500} 
          >
          Work
        </Link>
      </li>

      <li className='nav-item'>
        <Link 
          onClick={handleClick}
          to="contact" 
          smooth={true} 
          offset={50} 
          duration={500} 
          >
          Contact
        </Link>
      </li>
    </ul>

    {/* Social Icons  */}
    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
          <a 
          className='flex justify-between items-center w-full text-gray-300'
          href="https://www.linkedin.com/in/jomar-magpoot-69895b238/">LinkedIn <FaLinkedin size={30}/></a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]'>
          <a 
          className='flex justify-between items-center w-full text-gray-300'
          href="https://github.com/Jomar0019?tab=overview&from=2023-12-01&to=2023-12-05">GitHub <FaGithub size={30}/></a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-teal-500'>
          <a 
          className='flex justify-between items-center w-full text-gray-300'
          href="/">Email <HiOutlineMail size={30}/></a>
        </li>

        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600'>
          <a 
          className='flex justify-between items-center w-full text-gray-300'
          href="../assets/Resume.docx" download>Resume <BsFillPersonLinesFill size={30}/></a>
        </li>
      </ul>
    </div>

  </div>
  )
}

export default Nav
