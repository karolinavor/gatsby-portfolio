import React from "react"
import Layout from "../components/Layout"
import { Container, Wrapper } from "../components/Container"
import { Heading } from "../components/Heading"
import { ExternalLink } from "../components/Link"
import Paragraph from "../components/Paragraph"
import Hashtag from "../components/Hashtag"
import Image from "../components/Image"
import RystonFull from "../images/Ryston-full.jpg"

export default function Ryston() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>Ryston Electronics</Heading>
          <Hashtag>#Frontend</Hashtag>
          <Hashtag>#HTML</Hashtag>
          <Hashtag>#CSS</Hashtag>
          <Hashtag>#JavaScript</Hashtag>
          <Hashtag>#Nette</Hashtag>
          <Hashtag>#Latte</Hashtag>
          <Paragraph>
            Zadáním projektu bylo nakódování webu podle grafického návrhu.
          </Paragraph>
          <ExternalLink
            className="margin-bottom"
            href="https://www.ryston.cz"
          >
            Go To Website
          </ExternalLink>
          <Image src={RystonFull} alt="Project screenshot" />
        </Wrapper>
      </Container>
    </Layout>
  )
}
