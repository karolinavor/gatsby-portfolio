import React from "react"
import styled from "styled-components/macro"
import { Helmet } from "react-helmet"
import GlobalStyle from "./GlobalStyle"
import Header from "./Header"
import Footer from "./Footer"

const PageGrid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`

export default function Layout(props) {
  return (
    <>
      <Helmet defer={false}>
        <html lang="en" />
        <title>Karolina Vorlickova | Web Developer</title>
        <meta name="author" content="Karolina Vorlickova" />
        <meta
          name="description"
          content="I'm junior web developer and CS student based in Brno, Czech Republic."
        />
        <meta
          name="keywords"
          content="web,applications,developer,html,css,javascript,react,portfolio,frontend,backend,student,computer science"
        />
        <meta
          property="og:title"
          content="Karolina Vorlickova | Web Developer"
        />
        <meta
          property="og:description"
          content="I'm junior web developer and CS student based in Brno, Czech Republic."
        />
        <meta property="og:url" content="https://karolinavorlickova.cz/" />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Karolina Vorlickova | Web Developer"
        />
        <meta
          name="twitter:description"
          content="I'm junior web developer and CS student based in Brno, Czech Republic."
        />
        <meta name="twitter:site" content="https://karolinavorlickova.cz/" />
        <meta name="twitter:image" content="" />
      </Helmet>
      <GlobalStyle />
      <PageGrid>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </PageGrid>
    </>
  )
}
