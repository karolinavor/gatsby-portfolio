import React from "react"
import styled from "styled-components/macro"
import { Container } from "./Container"
import { Subheading } from "./Heading"
import Paragraph from "./Paragraph"
import Card from "./Card"
import Nextcore1 from "../images/Nextcore1.png"
import Nextcore2 from "../images/Nextcore2.png"

const ProjectsWrapper = styled.div`
  padding: 4rem 0;
`

const ProjectsGridWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default function Projects() {
  return (
    <ProjectsWrapper>
      <Container>
        <Subheading>Projects</Subheading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          at leo at erat varius consectetur sed at neque. Phasellus venenatis
          justo eget iaculis aliquam.
        </Paragraph>
        <ProjectsGridWrapper>
          <Card
            name="Nextcore"
            page="/nextcore"
            img={Nextcore1}
            description="I worked on this website's front end. It's built with HTML, CSS and JavaScript. Phasellus venenatis justo eget iaculis aliquam."
          />
          <Card
            name="React Blog"
            page="/react-blog"
            img={Nextcore2}
            description="Full stack web application built with React, Node.js and MongoDB. Phasellus venenatis justo eget iaculis aliquam. Kelem asa nomeb."
          />
        </ProjectsGridWrapper>
      </Container>
    </ProjectsWrapper>
  )
}
