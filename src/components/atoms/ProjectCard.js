import React, { useState } from "react"

const ProjectCard = ({ project }) => {
  const [cardActive, setCardActive] = useState(false)

  return (
    <div
      className={`card ${cardActive ? "active" : ""}`}
      onClick={() => setCardActive(!cardActive)}
      style={{ backgroundImage: "url(" + project.imageSrc + ")" }}
      href={project.links[0].url ? project.links[0].url : "#"}
    >
      <div className={`content ${cardActive ? "active-content" : ""}`}>
        <h1 className="title">{project.title}</h1>
        <div className="blurb-wrapper">
          <p className="blurb">{project.blurb}</p>
        </div>
        <ul class="role-list">
          {project.featureList.map((role, index) => (
            <li key={index} className="feature-list-item">
              <p>{role}</p>
            </li>
          ))}
        </ul>
        <div className="link-icons">
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.icon} alt="icons"></img>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
