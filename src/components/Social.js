import React, { Component } from "react"
import { socialMedia } from "../../content/socialContent"
import SocialCTA from "./SocialCTA"

class Social extends Component {
  render() {
    const socialItems = socialMedia.media.map((item, index) => (
      <div key={index} className="social-item">
        <SocialCTA
          image={item.image}
          name={item.name}
          link={item.link}
          handle={item.handle}
          bgColor={item.color}
        />
      </div>
    ))
    return (
      <div id="social">
        <div className="section-title">{socialMedia.title}</div>
        <div className="social-content">{socialItems}</div>
      </div>
    )
  }
}

export default Social
