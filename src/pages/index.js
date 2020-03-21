import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Quote from "../components/Quote"
import Image from "../components/Image"
import About from "../components/About"
import Coaches from "../components/Coaches"
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
      <Navbar />
      <Home />
      <div id="breakpoint"></div>
      <Quote by="Michael Jordan" right>
        My attitude is that if you push me towards something that you think is a
        weakness, then I will turn that perceived weakness into a strength.
      </Quote>
      <About />
      <Image src={lebron} alt="Lebron James" />
      <Camps />
      <Image src={lebron} alt="Lebron James" />
      <Quote by="Lebron James">Nothing is given. Everything is earned.”</Quote>
      <Coaches />
      <Alumni />
      <Image src={lebron} alt="Lebron James" />
      <Quote by="Larry Bird" right>
        Practice habits were crucial to my development in basketball. I didn’t
        play against the toughest competition in high school, but one reason I
        was able to do well in college was that I mastered the fundamentals.
        You’ve got to have them down before you can even think about playing.
      </Quote>
      <Social />
      <Contact />
      <Quote by="Kobe Bryant" right>
        If you want to be a better player, you have to prepare, prepare, and
        prepare some more.
      </Quote>
      <Footer />
    </div>
  )
}

export default index
