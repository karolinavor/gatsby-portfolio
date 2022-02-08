import React from "react"
import Layout from "../components/Layout"
import { Container, Wrapper } from "../components/Container"
import { Heading } from "../components/Heading"
import { ExternalLink } from "../components/Link"
import Paragraph from "../components/Paragraph"
import Hashtag from "../components/Hashtag"
import Image from "../components/Image"
import ProntosanFull from "../images/Prontosan-full.jpg"

export default function Prontosan() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>Prontosan</Heading>
          <Hashtag>#Frontend</Hashtag>
          <Hashtag>#HTML</Hashtag>
          <Hashtag>#CSS</Hashtag>
          <Hashtag>#JavaScript</Hashtag>
          <Paragraph>Zadáním projektu bylo nakódování stránky podle grafického návrhu na Shoptet e-shop.</Paragraph>
          <ExternalLink className="margin-bottom" href="https://www.bbraunshop.cz/prontosan/">
            Go To Website
          </ExternalLink>
          <Image src={ProntosanFull} alt="Project screenshot" />
        </Wrapper>
      </Container>
    </Layout>
  )
}
