import React from "react"
import Layout from "../components/Layout"
import { Container, Wrapper } from "../components/Container"
import { Heading } from "../components/Heading"
import { ExternalLink } from "../components/Link"
import Paragraph from "../components/Paragraph"
import Hashtag from "../components/Hashtag"
import Image from "../components/Image"
import SilverlineFull from "../images/Silverline-full.jpg"

export default function Silverline() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>Silverline Real Estate</Heading>
          <Hashtag>#Frontend</Hashtag>
          <Hashtag>#HTML</Hashtag>
          <Hashtag>#CSS</Hashtag>
          <Hashtag>#JavaScript</Hashtag>
          <Hashtag>#Nette</Hashtag>
          <Hashtag>#Latte</Hashtag>
          <Paragraph>
            Frontend podle grafického návrhu. Napojeno na CMS.
          </Paragraph>
          <ExternalLink
            className="margin-bottom"
            href="https://www.silverlinere.com"
          >
            Go To Website
          </ExternalLink>
          <Image src={SilverlineFull} alt="Project screenshot" />
        </Wrapper>
      </Container>
    </Layout>
  )
}
