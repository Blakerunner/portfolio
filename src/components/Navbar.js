import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import downloadResume from '../files/Blake Michalzik - Resume.pdf'
import downloadCV from '../files/Blake Michalzik - CV.pdf'
import resumeIcon from '../images/resume.svg'
import cvIcon from '../images/cv.svg'

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div>
            <a href={downloadResume} download><img src={resumeIcon} alt="icons"></img></a>
            <a href={downloadCV} download><img src={cvIcon} alt="icons"></img></a>
          </div>
          <div className="links-wrapper">
            <button onClick={() => scrollTo("#work")}>Work</button>
            <button onClick={() => scrollTo("#projects")}>Projects</button>
            <button onClick={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
