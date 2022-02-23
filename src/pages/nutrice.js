import React from "react"
import Layout from "../components/Layout"
import { Container, Wrapper } from "../components/Container"
import { Heading } from "../components/Heading"
import { ExternalLink } from "../components/Link"
import Paragraph from "../components/Paragraph"
import Hashtag from "../components/Hashtag"
import Image from "../components/Image"
import NutriceFull from "../images/Nutrice-full.jpg"

export default function Nutrice() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>Nutrice</Heading>
          <Hashtag>#Frontend</Hashtag>
          <Hashtag>#HTML</Hashtag>
          <Hashtag>#CSS</Hashtag>
          <Hashtag>#JavaScript</Hashtag>
          <Paragraph>
            Zadáním projektu bylo nakódování stránky podle grafického návrhu na
            Shoptet e-shop.
          </Paragraph>
          <ExternalLink
            className="margin-bottom"
            href="https://www.bbraunshop.cz/nutrice/"
          >
            Go To Website
          </ExternalLink>
          <Image src={NutriceFull} alt="Project screenshot" />
        </Wrapper>
      </Container>
    </Layout>
  )
}
