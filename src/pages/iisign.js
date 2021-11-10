import React from "react"
import Layout from "../components/Layout"
import { Container, Wrapper } from "../components/Container"
import { Heading } from "../components/Heading"
import { ExternalLink } from "../components/Link"
import Paragraph from "../components/Paragraph"
import Hashtag from "../components/Hashtag"
import Image from "../components/Image"
import iisignFull from "../images/iisign-full.jpg"

export default function Diveen() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>iisign</Heading>
          <Hashtag>#Frontend</Hashtag>
          <Hashtag>#HTML</Hashtag>
          <Hashtag>#CSS</Hashtag>
          <Hashtag>#SASS</Hashtag>
          <Hashtag>#JavaScript</Hashtag>
          <Paragraph>Kódování webu podle grafického návrhu. Plně responzivní design, animace a parallax.</Paragraph>
          <ExternalLink className="margin-bottom" href="https://www.iisign.cz">
            Go To Website
          </ExternalLink>
          <Image src={iisignFull} alt="Project screenshot" />
        </Wrapper>
      </Container>
    </Layout>
  )
}
