import React from "react"
import Layout from "../components/Layout"
import About from "../components/sections/about/About"
import Skills from "../components/sections/skills/Skills.js"
import Projects from "../components/sections/projects/Projects"

export default function Home() {
  return (
    <Layout>
      <About />
      <Skills />
      <Projects />
    </Layout>
  )
}
