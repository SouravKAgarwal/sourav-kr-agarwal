import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[url("/footer.jpg")] bg-cover bg-center h-[200px] w-[75] text-white grid place-items-center'>
        <div className='text-center '>
            <ul>
                <li><h3>Quick Links</h3></li>
                <li><Link href="/" className='my-4'>Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contacts">Contact</Link></li>
                <li><p className='mt-4 font-thin'>&copy; 2023|Sourav Kumar Agarwal</p></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
