import React from "react"

const WorkCard = work => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: "url(" + work.imgUrl + ")",
      }}
      href={work.links[0].url ? work.links[0].url : "#"}
    >
      <div className="content">
        <h1 className="company">{work.company}</h1>
        <p className="position">{work.position}</p>
        <p className="period">{work.period}</p>
        <ul class="role-list" style={{ listStyleType: "none" }}>
          {work.roleList.map((role, index) => (
            <li key={index} className="role-list-item">
              {role}
            </li>
          ))}
        </ul>
        <div className="link-icons">
          {work.links.map((link, index) => (
            <a
              key={index}
              href={work.link.url}
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

export default WorkCard
