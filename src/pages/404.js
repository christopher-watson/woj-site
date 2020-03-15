import React from "react"
import { GiBasketballBasket } from "react-icons/gi"

function ErrorPage() {
  const errorStyle = {
    display: "flex",
    width: "100vw",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }
  return (
    <div style={errorStyle}>
      <h1>404 Page Not Found</h1>
      <span style={{ fontSize: 100 }}>
        <GiBasketballBasket />
      </span>
    </div>
  )
}

export default ErrorPage
