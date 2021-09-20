import React from "react"
import styled from "styled-components/macro"
import { Container, Wrapper } from "./Container"
import { Subheading } from "./Heading"
import Paragraph from "./Paragraph"
import Card from "./Card"
import NextcorePreview from "../images/Nextcore-preview.jpg"
import RivaPreview from "../images/Riva-preview.jpg"
import DiveenPreview from "../images/Diveen-preview.jpg"

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
            description="Website"
          />
          <Card
            name="Nakladatelství Riva"
            page="/nakladatelstvi-riva"
            img={RivaPreview}
            description="E-shop"
          />
          <Card
            name="Diveen"
            page="/diveen"
            img={DiveenPreview}
            description="Web page"
          />
        </ProjectsGridWrapper>
      </Container>
    </Wrapper>
  )
}
