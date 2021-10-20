import React from "react"
import Layout from "../components/Layout"
import { Container, Wrapper } from "../components/Container"
import { Heading } from "../components/Heading"
import { ExternalLink } from "../components/Link"
import Paragraph from "../components/Paragraph"
import Hashtag from "../components/Hashtag"
import Image from "../components/Image"
import ProntodermFull from "../images/Prontoderm-full.jpg"

export default function Diveen() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>Prontoderm</Heading>
          <Hashtag>#Frontend</Hashtag>
          <Hashtag>#HTML</Hashtag>
          <Hashtag>#CSS</Hashtag>
          <Hashtag>#JavaScript</Hashtag>
          <Paragraph>Zadání projektu bylo nakódování landing page podle grafického návrhu na Shoptet web.</Paragraph>
          <ExternalLink className="margin-bottom" href="https://www.bbraunshop.cz/prontoderm/">
            Go To Website
          </ExternalLink>
          <Image src={ProntodermFull} alt="Project screenshot" />
        </Wrapper>
      </Container>
    </Layout>
  )
}
