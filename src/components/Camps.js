import React, { Component } from "react"
import { camps } from "../../content/campsContent"
import Venmo from "./Venmo"
import Paypal from "./Paypal"

import img1 from "../images/clutchcamp.jpg"
import img2 from "../images/clutchcamp.jpg"
import img3 from "../images/clutchcamp.jpg"

const CampCard = props => {
  return (
    <div className="camp-card">
      <img src={props.image} alt={props.name} className="camp-card-img" />
      <div className="camp-padding camp-text">
        <div className="camp-padding camp-name">{props.name}</div>
        <div className="camp-padding camp-description">{props.description}</div>
        <div className="camp-padding camp-date">{props.date}</div>
        <div className="camp-padding camptime">{props.time}</div>
        {props.active ? (
          <button className="camp-button">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              Sign Up Now!
            </a>
          </button>
        ) : (
          <button className="camp-button" disabled>
            Sign Up Now!
          </button>
        )}
      </div>
    </div>
  )
}

class Camps extends Component {
  render() {
    let images = [img1, img2, img3, img3]

    const allCamps = camps.info.map((item, index) => (
      <div key={index} className="camp-item">
        <CampCard
          name={item.name}
          description={item.description}
          date={item.date}
          time={item.time}
          image={images[index]}
          active={item.active}
          link={item.link}
        />
      </div>
    ))
    return (
      <div id="camps">
        <div className="section-title">{camps.title}</div>
        <div className="camp-card-container">
          <div className="camp-card-inner">{allCamps}</div>
          <div className="camp-payment">
            <Paypal details={camps.payment.paypal} />
            <Venmo details={camps.payment.venmo} />
          </div>
        </div>
      </div>
    )
  }
}

export default Camps
