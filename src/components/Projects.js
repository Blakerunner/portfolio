import React from "react"
import ProjectCard from "./atoms/ProjectCard"
import Fade from "react-reveal/Fade"

import data from "../mydata"

const Projects = () => {
  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="projects-wrapper">
          <Fade bottom>
            <h1>Projects</h1>
          </Fade>

          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map((project, index) => (
                <ProjectCard key={index} project={project}></ProjectCard>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
