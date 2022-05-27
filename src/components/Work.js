import React, { useRef, useEffect } from "react"
import Fade from "react-reveal/Fade"
import WorkCard from "./atoms/WorkCard"

import data from "../mydata"

const Work = () => {
  return (
    <div className="section" id="career">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Career</h1>
          </Fade>
          <div className="grid">
            <Fade bottom cascade>
              {data.works.map((work, idx) => (
                <WorkCard key={idx} work={work}></WorkCard>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
