import React from "react"
import Fade from "react-reveal/Fade"
import data from "../mydata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>{data.name}</h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h2>{data.headerTagline[0]}</h2>
              <h2>{data.headerTagline[1]}</h2>
              <h2>{data.headerTagline[2]}</h2>
            </div>
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <a href={`mailto:${data.contactEmail}`} className="primary-btn">
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
