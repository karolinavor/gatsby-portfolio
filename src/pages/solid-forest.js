import React from "react"
import Layout from "../components/Layout"
import { Container, Wrapper } from "../components/Container"
import { Heading } from "../components/Heading"
import { ExternalLink } from "../components/Link"
import Paragraph from "../components/Paragraph"
import Hashtag from "../components/Hashtag"
import Image from "../components/Image"
import ForestFull from "../images/Forest-full.jpg"

export default function Iisign() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>Solid Forest</Heading>
          <Hashtag>#Frontend</Hashtag>
          <Hashtag>#HTML</Hashtag>
          <Hashtag>#CSS</Hashtag>
          <Hashtag>#SASS</Hashtag>
          <Hashtag>#JavaScript</Hashtag>
          <Hashtag>#Nette</Hashtag>
          <Hashtag>#Latte</Hashtag>
          <Paragraph>Plně responzivní web podle návrhu s jednoduchým kontaktním formulářem a menu. Napojen na CMS.</Paragraph>
          <ExternalLink className="margin-bottom" href="https://www.solidforest.cz">
            Go To Website
          </ExternalLink>
          <Image src={ForestFull} alt="Project screenshot" />
        </Wrapper>
      </Container>
    </Layout>
  )
}
