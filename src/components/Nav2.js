import React, { Component } from "react"
import logo from "../images/gatsby-icon.png"

class Nav2 extends Component {
  state = {
    navBg: false,
    navOpen: true,
  }

  componentDidMount() {
    window.addEventListener("scroll", () => this.handleNavShowHide())
    this.toggleNavbar()
  }

  handleNavShowHide = () => {
    // grab element passed as argument
    let element = document.getElementById("breakpoint")
    // if the element is not null ..
    if (element !== null) {
      // create an observable rectangle
      var rect = element.getBoundingClientRect()
      // if top of rectangle is 0
      // meaning if the distance from the
      // top of the viewport is 0
      // then set nag bg to true
      // else false
      if (rect.top <= 0) {
        this.setState({
          navBg: true,
        })
      } else {
        this.setState({
          navBg: false,
        })
      }
    }
  }

  handleArrowClick = dest => {
    document.querySelector(dest).scrollIntoView({
      behavior: "smooth",
    })
    this.toggleNavbar()
  }

  toggleNavbar = () => {
    let nav = document.querySelector("nav")
    let burger = document.querySelector("#burger-toggle")
    this.setState({
      navOpen: !this.state.navOpen,
    })
    this.state.navOpen
      ? (nav.className += " hide-nav")
      : (nav.className = "nav")
    this.state.navOpen
      ? (burger.className = "")
      : (burger.className += "active")
  }

  render() {
    return (
      <div className="nav-container">
        <div className="hamburger" onClick={() => this.toggleNavbar()}>
          <span id="burger-toggle"></span>
        </div>
        <nav
          className="nav"
          style={Object.assign(
            this.state.navBg
              ? { background: "var(--black)" }
              : { background: "var(--clear)" }
          )}
        >
          <div
            className="logo-title anchor"
            onClick={() => this.handleArrowClick("#home")}
          >
            <div className="title">Clutch Sports LLC</div>
            <div className="logo anchor">
              <img
                src={logo}
                alt="Clutch Sports Logo"
                onClick={() => this.handleArrowClick("#home")}
              />
            </div>
          </div>
          <div className="nav-item-container">
            <div
              className="nav-item anchor"
              onClick={() => this.handleArrowClick("#home")}
            >
              Home
            </div>
            <div
              className="nav-item anchor"
              onClick={() => this.handleArrowClick("#about")}
            >
              About
            </div>
            <div
              className="nav-item anchor"
              onClick={() => this.handleArrowClick("#trainers")}
            >
              Trainers
            </div>
            <div
              className="nav-item anchor"
              onClick={() => this.handleArrowClick("#camps")}
            >
              Camps
            </div>
            <div
              className="nav-item anchor"
              onClick={() => this.handleArrowClick("#alumni")}
            >
              Alumni
            </div>
            <div
              className="nav-item anchor"
              onClick={() => this.handleArrowClick("#social")}
            >
              Social
            </div>
            <div
              className="nav-item anchor"
              onClick={() => this.handleArrowClick("#contact")}
            >
              Contact
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav2
