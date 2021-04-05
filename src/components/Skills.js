import React from "react"
import styled from "styled-components/macro"
import { Subheading } from "./Heading"
import Paragraph from "./Paragraph"
import { Container } from "./Container"

const SkillsWrapper = styled.div`
  padding: 4rem 0;
  background-color: var(--bg-secondary);
`

export default function Skills() {
  return (
    <SkillsWrapper>
      <Container>
        <Subheading>Skills</Subheading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          at leo at erat varius consectetur sed at neque. Phasellus venenatis
          justo eget iaculis aliquam.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque at leo at erat varius consectetur sed at
          neque. Phasellus venenatis justo eget iaculis aliquam.
        </Paragraph>
      </Container>
    </SkillsWrapper>
  )
}
