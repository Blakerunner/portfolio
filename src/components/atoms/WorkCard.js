import React, { useState } from "react"

const WorkCard = ({ work }) => {
  const [cardActive, setCardActive] = useState(false)

  return (
    <div
      className={`card ${cardActive ? "active" : ""}`}
      onMouseEnter={() => setCardActive(true)}
      onMouseLeave={() => setCardActive(false)}
      // onClick={() => setCardActive(!cardActive)}
      style={{ backgroundImage: "url(" + work.imageSrc + ")" }}
      href={work.links[0].url ? work.links[0].url : "#"}
    >
      <div className="content">
        <h1 className="company">{work.company}</h1>
        <div className="position-wrapper">
          <p className="position">{work.position}</p>
          <p className="period">{work.period}</p>
        </div>
        <ul class="role-list">
          {work.roleList.map((role, index) => (
            <li key={index} className="role-list-item">
              <p>{role}</p>
            </li>
          ))}
        </ul>
        <div className="link-icons">
          {work.links.map((link, index) => (
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

export default WorkCard
