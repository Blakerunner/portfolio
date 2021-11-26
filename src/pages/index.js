import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

// Components
import Header from "../components/Header"
import Work from "../components/Work"
import Projects from "../components/Projects"
import About from "../components/About"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Blake Michalzik Portfolio" />
    <Header />
    <About />
    <Work />
    <Projects />
    {/* <Skills /> */}
    <Footer />
  </Layout>
)

export default IndexPage
