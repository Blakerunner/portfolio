import React from "react"

const Card = ({ heading, paragraph, imgUrl, links }) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: "url(" + imgUrl + ")"
      }}
      href={links[0].url ? links[0].url : "#"}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <div className="link-icons">
            {links.map((link, index) => (
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

export default Card
