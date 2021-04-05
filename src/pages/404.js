import React from "react"
import styled from "styled-components/macro"
import Layout from "../components/Layout"
import { Container } from "../components/Container"
import { Heading } from "../components/Heading"

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100%;
`

export default function NotFound404() {
  return (
    <Layout>
      <Container>
        <NotFoundWrapper>
          <Heading>404</Heading>
          <p>Page not found</p>
        </NotFoundWrapper>
      </Container>
    </Layout>
  )
}
