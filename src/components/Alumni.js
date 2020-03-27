import React, { Component } from "react"
import { alumni } from "../../content/alumniContent"
import logo from '../images/gatsby-icon.png'

import img1 from "../images/corey.jpg"
import img2 from "../images/jehyve.jpg"

const AlumniCard = props => {
  return (
    <div className="alumni-card">
      <img className="alumni-image" src={props.image} alt={props.name} />
      <div className="alumni-text">
        <div className="alumni-name">{props.name}</div>
        <div className="alumni-title">{props.title}</div>
        <div className="alumni-status">{props.status}</div>
        <div className="alumni-testimonial">{props.testimonial}</div>
      </div>
      <img className="alumni-logo" src={logo} alt="Clutch Sports Logo"/>
    </div>
  )
}

class Alumni extends Component {
  render() {
    let images = [img1, img2]

    const allAlumni = alumni.info.map((item, index) => (
      <div key={index} className="alumni-item">
        <AlumniCard
          name={item.name}
          title={item.title}
          status={item.status}
          testimonial={item.testimonial}
          image={images[index]}
        />
      </div>
    ))
    return (
      <div id="alumni">
        <div className="section-title">{alumni.title}</div>
        <div className="alumni-card-container">{allAlumni}</div>
      </div>
    )
  }
}

export default Alumni
