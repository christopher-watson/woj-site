import React from "react"
import Icons from "./Icons"

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons">
        <Icons light />
      </div>
      <div className="copyright">
        <span>&copy; Clutch Sports LLC {new Date().getFullYear()}</span>
        <span>
          Built By:{" "}
          <a
            href="https://christopherwatson.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            yowats0n
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
