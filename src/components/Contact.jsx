
const Contact = () => {
  return (
    <div name="contact" className='page light-mode flex justify-center items-center p-2 md:p-4'>
      <form action="https://getform.io/f/73978d5f-eb51-4a42-a231-9bd39306a350" method='POST' className='flex flex-col max-w-[600px] p-1 w-full'>
        <div className=''>
            <p className='title'>Contact</p>
            <p className='text-[#303030] py-4'>Submit the form below or shoot me an email - <span className='font-bold'>jomarmagpoot24@gmail.com</span></p>
        </div>
        <input className=' contact-input' type="text" name="name" id="" placeholder='Your name' />
        <input className='my-4  contact-input' type="email" name="email" id="" placeholder='Your email' />
        <textarea name="message" placeholder='Your message' className=' contact-textbox' id="" cols="30" rows="10"></textarea>
        <button type='submit' className='contact-btn'>{`Let's Collaborate`}</button>
      </form>
    </div>
  )
}

export default Contact
