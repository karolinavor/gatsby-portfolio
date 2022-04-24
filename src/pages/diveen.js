import React from "react"
import Layout from "../components/Layout"
import { Container, Wrapper } from "../components/Container"
import { Heading } from "../components/Heading"
import { ExternalLink } from "../components/Link"
import Paragraph from "../components/Paragraph"
import Hashtag from "../components/Hashtag"
import Image from "../components/Image"
import DiveenFull from "../images/Diveen-full.jpg"

export default function Diveen() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>Diveen</Heading>
          <Hashtag>#Frontend</Hashtag>
          <Hashtag>#HTML</Hashtag>
          <Hashtag>#CSS</Hashtag>
          <Hashtag>#JavaScript</Hashtag>
          <Hashtag>#Shoptet</Hashtag>
          <Paragraph>
            Zadání projektu bylo nakódování obsahu stránky www.diveen.cz na
            Shoptet e-shop.
          </Paragraph>
          <ExternalLink
            className="margin-bottom"
            href="https://www.bbraunshop.cz/stresova-inkontinence/"
          >
            Go To Website
          </ExternalLink>
          <Image src={DiveenFull} alt="Project screenshot" />
        </Wrapper>
      </Container>
    </Layout>
  )
}
