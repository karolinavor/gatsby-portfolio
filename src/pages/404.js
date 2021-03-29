import React from "react"
import styled from "styled-components/macro"
import Layout from "../components/Layout"
import Heading from "../components/Heading"

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10rem 0;
`

export default function NotFound404() {
  return (
    <Layout>
      <NotFoundWrapper>
        <Heading>404</Heading>
        <p>Page not found</p>
      </NotFoundWrapper>
    </Layout>
  )
}
