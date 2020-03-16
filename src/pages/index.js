import React from "react"
import { Helmet } from "react-helmet"
// import Navbar from "../components/Navbar"
import Nav2 from "../components/Nav2"
import Home from "../components/Home"
import Quote from "../components/Quote"
import Image from "../components/Image"
import About from "../components/About"
import Trainers from "../components/Trainers"
import Camps from "../components/Camps"
import Alumni from "../components/Alumni"
import Social from "../components/Social"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import lebron from "../images/banner.jpg"
import "../style.css"

function index() {
  return (
    <div id="index">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Clutch Sports</title>
      </Helmet>
      {/* <Navbar /> */}
      <Nav2 />
      <Home />
      <div id="breakpoint"></div>
      <Quote by="Michael Jordan" right>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, possimus!
      </Quote>
      <Image src={lebron} alt="Lebron James" />
      <About />
      <Quote by="Michael Jordan" right>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, possimus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, possimus!
      </Quote>
      <Trainers />
      <Camps />
      <Alumni />
      <Social />
      <Contact />
      <Footer />
    </div>
  )
}

export default index
