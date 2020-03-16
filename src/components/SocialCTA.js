import React from "react"

const styles = {
  card: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridTemplateAreas: "img handle",
    width: "350px",
    border: "5px solid #323232",
    borderRadius: "15px",
    margin: "5px 0",
    background: "#323232",
  },
}

const SocialCTA = props => {
  return (
    <div style={styles.card}>
      <div
        style={{
          display: "flex",
          borderRight: "1.5px dashed black",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--white)",
          borderRadius: "10px 0 0 10px",
          fontSize: "3rem",
          padding: "1rem 0",
          background: props.bgColor,
        }}
      >
        <i className={props.image}></i>
      </div>
      <a
        className='hover-social'
        style={{
          display: "flex",
          flexDirection: 'column',
          alignItems: "center",
          justifyContent: 'center',
          lineHeight: '25px',
          textAlign: "center",
          backgroundColor: "var(--white)",
          borderRadius: "0 8px 8px 0",
          padding: "0 .5rem",
          fontWeight: "bold",
          textDecoration: "none",
          color: "var(--black)",
        }}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow us on {props.name}!
        <div
          style={{
            color: "var(--black)",
            fontWeight: "initial",
          }}
        >
          @{props.handle}
        </div>
      </a>
    </div>
  )
}

export default SocialCTA
