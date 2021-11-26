import React from "react"

const Card = ({ work }) => {
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

export default Card
