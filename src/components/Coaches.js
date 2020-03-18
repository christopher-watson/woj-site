import React, { Component } from "react"
import { coaches } from "../../content/coachesContent"
import { IoMdBasketball } from "react-icons/io"

// use format below to add a new coach image
import img1 from '../images/woj.jpeg'
import img2 from '../images/woj.jpeg'
import img3 from '../images/woj.jpeg'

const CoachCard = props => {
  return (
    <div className="coach-card">
      <img className="coach-image" src={props.image} alt={props.name} />
      <div className="coach-name-bio">
        <span className="coach-title">{props.name}</span>
        {props.bio}
      </div>

      <div className="coach-accolades">
        <span className="coach-title">Accolades</span>
        <div className="accolades-list">
          {props.accolades.map(item => (
            <span className="accolade-item">
              <span className="accolade-icon">
                <IoMdBasketball />
              </span>
              <span className="accolade-item-text">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

class Coaches extends Component {
  render() {
    // add the image here as well
    let images = [img1, img2, img3]

    // do not touch any of the code below
    const allCoaches = coaches.info.map((item, index) => (
      <div key={index} className="coach-item">
        <CoachCard
          name={item.name}
          bio={item.bio}
          image={images[index]}
          accolades={item.accolades}
        />
      </div>
    ))
    return (
      <div id="coaches">
        <div className="section-title">{coaches.title}</div>
        <div className="coaches-content">{allCoaches}</div>
      </div>
    )
  }
}

export default Coaches
