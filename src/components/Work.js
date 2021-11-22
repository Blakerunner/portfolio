import React from "react"
import Card from "./atoms/Card"
import Fade from "react-reveal/Fade"

import data from "../mydata"

const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Work</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.works.map((work, index) => (
                <Card
                  key={index}
                  heading={work.title}
                  paragraph={work.para}
                  imgUrl={work.imageSrc}
                  links={work.links}
                ></Card>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
