import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from './navbar'
import {useState} from "react"
import Footer from './footer'
import Sidebar from './sidebar'

export default function App({ Component, pageProps }: AppProps) {
  const [isOpen,setIsOpen] = useState(false)

  const toggleSideBar = ()=>{
    setIsOpen(!isOpen)
  }
  return <>
  <Navbar toggleSideBar={toggleSideBar} />
  <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar}/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
