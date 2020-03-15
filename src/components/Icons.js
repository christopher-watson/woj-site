import React from "react"
import {
  FiFacebook as Facebook,
  FiTwitter as Twitter,
  FiInstagram as Instagram,
} from "react-icons/fi"

const Icons = props => {
  return (
    <div id="icons">
      <div className="icon">
        <a
          style={props.light ? { color: "var(--white)" } : {}}
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook />
        </a>
      </div>
      <div className="icon">
        <a
          style={props.light ? { color: "var(--white)" } : {}}
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter />
        </a>
      </div>
      <div className="icon">
        <a
          style={props.light ? { color: "var(--white)" } : {}}
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram />
        </a>
      </div>
    </div>
  )
}

export default Icons
