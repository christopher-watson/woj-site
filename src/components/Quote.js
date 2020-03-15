import React from "react"
import logo from "../images/gatsby-icon.png"

const Quote = props => {
  return (
    <div className={props.right ? "quote quote-right" : "quote quote-left"}>
      <span className="quotations">"</span>
      {props.children}
      <span className="quotations"> "</span>
      <span className="quote-by"> - {props.by}</span>
      <div className="quote-logo">
        <img src={logo} alt="Clutch Sports LLC" />
      </div>
    </div>
  )
}

export default Quote
