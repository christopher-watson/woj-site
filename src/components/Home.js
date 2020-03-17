import React, { Component } from "react"
import bg from "../images/banner.jpg"

class Home extends Component {
  handleArrowClick = dest => {
    document.querySelector(dest).scrollIntoView({
      behavior: "smooth",
    })
  }

  render() {
    return (
      <div id="home">
        <div className="bg-image">
          <img src={bg} alt="Baksetball Court and Players" />
        </div>
        <div className="home-content-div">
          <div className="home-text">Clutch Sports NJ</div>
          <div className="home-cta-div">
            <button onClick={() => this.handleArrowClick("#coaches")}>
              Meet the Coaches
            </button>
            <button onClick={() => this.handleArrowClick("#camps")}>
              Sign Up for a Camp
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
