import React from "react"

const ProjectCard = ({ project }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: "url(" + project.imageSrc + ")",
      }}
      href={project.links[0].url ? project.links[0].url : "#"}
    >
      <div className="content">
        <h1 className="project">{project.company}</h1>
        <p className="blurb">{project.period}</p>
        <ul class="feature-list">
          {project.featureList.map((feature, index) => (
            <li key={index} className="feature-list-item">
              <p>{feature}</p>
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
