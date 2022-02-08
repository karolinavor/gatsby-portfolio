import React from "react"
import styled from "styled-components/macro"
import { Container, Wrapper } from "./Container"
import { Subheading } from "./Heading"
import Paragraph from "./Paragraph"
import Card from "./Card"
import NextcorePreview from "../images/Nextcore-preview.jpg"
import RivaPreview from "../images/Riva-preview.jpg"
import DiveenPreview from "../images/Diveen-preview.jpg"
import ProntodermPreview from "../images/Prontoderm-preview.jpg"
import NutricePreview from "../images/Nutrice-preview.jpg"
import iisignPreview from "../images/Iisign-preview.jpg"
import ProntosanPreview from "../images/Prontosan-preview.jpg"
import ForestPreview from "../images/Forest-preview.jpg"

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
        <ProjectsGridWrapper>
          <Card
            name="Solid Forest"
            page="/solid-forest"
            img={ForestPreview}
            description="Website"
          />
          <Card
            name="Prontosan"
            page="/prontosan"
            img={ProntosanPreview}
            description="Landing page"
          />
          <Card
            name="Prontoderm"
            page="/prontoderm"
            img={ProntodermPreview}
            description="Landing page"
          />
          <Card
            name="Nakladatelství Riva"
            page="/nakladatelstvi-riva"
            img={RivaPreview}
            description="E-shop"
          />
          <Card
            name="Nutrice"
            page="/nutrice"
            img={NutricePreview}
            description="Landing page"
          />
          <Card
            name="Diveen"
            page="/diveen"
            img={DiveenPreview}
            description="Landing page"
          />
          <Card
            name="iisign"
            page="/iisign"
            img={iisignPreview}
            description="Website"
          />
          <Card
            name="Nextcore"
            page="/nextcore"
            img={NextcorePreview}
            description="Website"
          />
        </ProjectsGridWrapper>
      </Container>
    </Wrapper>
  )
}
