import React from 'react'
import Heading from './heading'

const Contacts = () => {
  return (
    <section className='container mx-auto px-4 py-10'>
        <Heading title="Contact Me"/>

        <form className='flex flex-col gap-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <input type="text" placeholder='Name' className='inputStyle' required />   
            <input type="email" placeholder='Email' className='inputStyle' required />          
          </div>
            <input type="text" placeholder='Subject' className='inputStyle' required />          
            <textarea rows="6" placeholder='Message' className='inputStyle' required></textarea>

          <div>
            <button type="submit" className="btn">Send Message</button>
          </div>
        </form>
    </section>
  )
}

export default Contacts
