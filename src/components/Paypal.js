import React from "react"

const Paypal = props => {
  return (
    <div className="camp-payment-button camp-paypal">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <g transform="matrix(.123006 0 0 .123006 -29.423026 -14.127235)">
          <path
            d="M754.6 298.1c0 54.6-22.7 98.7-68 132.2s-108.6 50.2-190 50.2h-45L417.1 630H298.2L408 171.2h161c30 0 56.1 2.1 78.5 6.2 22.3 4.1 41.6 11.2 57.8 21.3 16 10.1 28.3 23.2 36.7 39.3 8.4 16 12.6 36.1 12.6 60.1z"
            fill="#009cde"
          />
          <path
            d="M421.1 634.9H292l112.2-468.7H569c30.1 0 56.8 2.1 79.3 6.2 22.8 4.2 42.8 11.6 59.5 21.9 16.7 10.5 29.7 24.4 38.5 41.2s13.2 37.8 13.2 62.5c0 56-23.5 101.9-70 136.2-46 34-110.9 51.2-193 51.2h-41.1zm-116.6-9.8h108.7l34.5-149.5h48.9c79.9 0 142.9-16.6 187.1-49.3 21.9-16.2 38.6-35.2 49.5-56.4s16.4-45.4 16.4-71.8c0-23.1-4.1-42.6-12.1-58-8-15.3-19.7-27.8-34.9-37.4-15.6-9.7-34.5-16.6-56.1-20.6-21.9-4-48-6.1-77.6-6.1h-157z"
            fill="#fff"
          />
          <path
            d="M701.8 247c0 54.6-22.7 98.7-68 132.2s-108.6 50.2-190 50.2h-45l-34.5 149.5H245.4L351.3 120h164.9c30 0 56.1 2.1 78.5 6.2 22.3 4.1 41.6 11.2 57.8 21.3 16 10.1 28.3 23.2 36.7 39.3 8.4 16 12.6 36.1 12.6 60.2z"
            fill="#0f3572"
          />
          <path
            d="M368.2 583.8h-129l108.1-468.7h168.9c30.1 0 56.8 2.1 79.3 6.2 22.8 4.2 42.8 11.6 59.5 21.9 16.7 10.5 29.7 24.4 38.5 41.2s13.2 37.8 13.2 62.5c0 56-23.5 101.9-70 136.2-46 34-110.9 51.2-193 51.2h-41.1zm-116.6-9.9h108.8l34.5-149.5h48.9c79.9 0 142.9-16.6 187.1-49.3 21.9-16.2 38.6-35.2 49.5-56.4s16.4-45.4 16.4-71.8c0-23.1-4.1-42.6-12.1-58-8-15.3-19.7-27.8-34.9-37.4-15.6-9.7-34.5-16.6-56.1-20.6-21.9-4-48-6.1-77.6-6.1h-161zm328-310.6c-.9 14-3.7 24.3-12.3 36.2-8.5 11.9-18.5 19.6-31.9 26-8.1 3.8-16.5 6.3-25.3 7.5s-19.3 1.9-31.6 1.9h-59.1l33.1-118.6h53.7c13.7 0 24.7.2 33 2.1 8.3 1.8 15.1 4.3 20.2 7.4 7.1 4.2 12.8 9.3 16.1 15.8 4.1 7.6 4.6 12.5 4.1 21.7z"
            fill="#fff"
          />
        </g>
      </svg>
      {props.details}
    </div>
  )
}

export default Paypal