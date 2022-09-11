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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="author" content="Karolina Vorlickova" />
        <meta
          name="description"
          content="I'm web developer based in Brno, Czech Republic."
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
          content="I'm web developer based in Brno, Czech Republic."
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
          content="I'm web developer based in Brno, Czech Republic."
        />
        <meta name="twitter:site" content="https://karolinavorlickova.cz/" />
        <meta name="twitter:image" content="" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/public/safari-pinned-tab.svg"
          color="#808080"
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Staatliches&display=swap"
          rel="stylesheet"
        ></link>
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
