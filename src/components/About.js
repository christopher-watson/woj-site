import React from "react"
import Icons from "./Icons"
import { about } from "../../content/aboutContent"

const About = () => {
  return (
    <section id="about">
      <div className="section-title">{about.title}</div>
      <div className="about-content">{about.text}</div>
      <div className="about-icons">
        <Icons />
      </div>
    </section>
  )
}

export default About
