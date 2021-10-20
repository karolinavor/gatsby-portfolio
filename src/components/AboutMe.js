import React from "react"
import styled from "styled-components/macro"
import { Heading } from "./Heading"
import Paragraph from "./Paragraph"
import { Container, Wrapper } from "./Container"

export default function AboutMe() {
  return (
    <Wrapper>
      <Container>
        <Heading>
          Junior web developer and Computer Science student based in Brno, Czech
          Republic.
        </Heading>
        <Paragraph>
          // TODO
        </Paragraph>
      </Container>
    </Wrapper>
  )
}
