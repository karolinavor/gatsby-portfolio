import React from "react"
import Layout from "../components/Layout"
import { Container, Wrapper } from "../components/Container"
import { Heading } from "../components/Heading"
import { ExternalLink } from "../components/Link"
import Paragraph from "../components/Paragraph"
import Hashtag from "../components/Hashtag"
import Image from "../components/Image"
import RivaFull from "../images/Riva-full.jpg"

export default function NakladatelstviRiva() {
  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>Nakladatelství Riva</Heading>
          <Hashtag>#Frontend</Hashtag>
          <Hashtag>#HTML</Hashtag>
          <Hashtag>#CSS</Hashtag>
          <Hashtag>#SASS</Hashtag>
          <Hashtag>#JavaScript</Hashtag>
          <Hashtag>#Nette</Hashtag>
          <Hashtag>#Latte</Hashtag>
          <Paragraph>Kódováno podle grafické předlohy. Součástí projektu bylo napojení na 1.Web IT CMS. V projektu jsem se naučila základy Nette a Latte - práci s presentery a modely, vytváření formulářů, makra.</Paragraph>
          <ExternalLink className="margin-bottom" href="https://nakladatelstvi-riva.cz">
            Go To Website
          </ExternalLink>
          <Image src={RivaFull} alt="Project screenshot" />
        </Wrapper>
      </Container>
    </Layout>
  )
}
