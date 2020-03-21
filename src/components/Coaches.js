import React, { Component } from "react"
import { coaches } from "../../content/coachesContent"
import { IoMdBasketball } from "react-icons/io"

// (1) use format below to add a new coach image (avoid using .JPEG images)
import img1 from '../images/woj.png'
import img2 from '../images/woj.png'
import img3 from '../images/woj.png'

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
    // (2) add the image here as well
    let images = [img1, img2, img3]

    // DO NOT TOUCH ANY OF THE CODE BELOW
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
