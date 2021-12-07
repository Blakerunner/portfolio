import React from "react"
import Fade from "react-reveal/Fade"
import data from "../mydata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About</h1>
              <p>
                {data.aboutParas.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </p>
            </Fade>
          </div>
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
