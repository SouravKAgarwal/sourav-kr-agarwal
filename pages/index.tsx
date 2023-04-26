import Head from "next/head";
import Hero from "./hero"
import About from "./about"
import Projects from "./projects" 
import Contacts from "./contacts"
import { useState } from "react";
import Navbar from './navbar'
import Footer from './footer'
import Sidebar from './sidebar'


export default function Home() {
  const [isOpen,setIsOpen] = useState(false)

  const toggleSideBar = ()=>{
    setIsOpen(!isOpen)
  }
  
  return (
    <div>
    <Head>
      <title>Sourav Agarwal-Web Developer</title>
      <meta name="This is a portfolio website designed for internship purposes." content="This contains a home page along with about me, my projects and contact page." />
      <link rel="icon" href="" />
    </Head>
    <header>
      <Navbar toggleSideBar={toggleSideBar}/>
      <Sidebar isOpen={isOpen} toggleSideBar={toggleSideBar} />
    </header>

    <main>
      <Hero />
      <About />
      <Projects />
      <Contacts />
    </main>

    <footer>
      <Footer/>
    </footer>

    </div>
  )
}