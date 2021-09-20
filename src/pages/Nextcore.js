import React from "react"
import Layout from "../components/Layout"
import { Container, Wrapper } from "../components/Container"
import { Heading } from "../components/Heading"
import { ExternalLink } from "../components/Link"
import Paragraph from "../components/Paragraph"
import Hashtag from "../components/Hashtag"
import NextcoreFull from "../images/Nextcore-full.jpg"
import Image from "../components/Image"

export default function Nextcore() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>Nextcore</Heading>
          <Hashtag>#Frontend</Hashtag>
          <Hashtag>#HTML</Hashtag>
          <Hashtag>#CSS</Hashtag>
          <Hashtag>#SASS</Hashtag>
          <Hashtag>#JavaScript</Hashtag>
          <Paragraph>Mou prací bylo vymyslet jednoduchý design webových stránek a následně jej nakódovat.</Paragraph>
          <ExternalLink className="margin-bottom" href="https://www.nextcore.cz/">
            Go To Website
          </ExternalLink>
          <Image src={NextcoreFull} alt="Project screenshot" />
        </Wrapper>
      </Container>
    </Layout>
  )
}
