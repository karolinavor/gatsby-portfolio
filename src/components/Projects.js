import React from "react"
import styled from "styled-components/macro"
import { Container, Wrapper } from "./Container"
import { Subheading } from "./Heading"
import Paragraph from "./Paragraph"
import Card from "./Card"
import NextcorePreview from "../images/Nextcore-preview.png"
import Nextcore2 from "../images/Nextcore2.png"

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
    <Wrapper>
      <Container>
        <Subheading>Projects</Subheading>
        <Paragraph>Zde najdete mé projekty. Další budou časem přibývat.</Paragraph>
        <ProjectsGridWrapper>
          <Card
            name="Nextcore"
            page="/nextcore"
            img={NextcorePreview}
            description=""
          />
          <Card
            name="Nakladatelství Riva"
            page="/nakladatelstvi-riva"
            img={Nextcore2}
            description=""
          />
          <Card
            name="Diveen"
            page="/diveen"
            img={Nextcore2}
            description=""
          />
        </ProjectsGridWrapper>
      </Container>
    </Wrapper>
  )
}
