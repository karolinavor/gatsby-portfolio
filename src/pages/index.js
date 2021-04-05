import React from "react"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills.js"
import Projects from "../components/Projects"

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      <Skills />
      <Projects />
    </Layout>
  )
}
