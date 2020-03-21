import React from "react"

const Venmo = props => {
  return (
    <div className="camp-payment-button camp-venmo">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <g transform="matrix(.124031 0 0 .124031 -.000001 56.062016)">
          <rect y="-452" rx="61" height="516" width="516" fill="#3396cd" />
          <path
            d="M385.16-347c11.1 18.3 16.08 37.17 16.08 61 0 76-64.87 174.7-117.52 244H163.5l-48.2-288.35 105.3-10 25.6 205.17C270-174 299.43-235 299.43-276.56c0-22.77-3.9-38.25-10-51z"
            fill="#fff"
          />
        </g>
      </svg>
      {props.details}
    </div>
  )
}

export default Venmo