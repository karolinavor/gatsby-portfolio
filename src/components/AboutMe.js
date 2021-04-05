import React from "react"
import styled from "styled-components/macro"
import { Heading } from "./Heading"
import Paragraph from "./Paragraph"
import { Container } from "./Container"

const AboutWrapper = styled.div`
  padding: 4rem 0;
`

export default function AboutMe() {
  return (
    <AboutWrapper>
      <Container>
        <Heading>
          I&apos;m junior web developer and CS student based in Brno, Czech
          Republic.
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          at leo at erat varius consectetur sed at neque. Phasellus venenatis
          justo eget iaculis aliquam. In hac habitasse platea dictumst. Morbi
          nec orci id mi eleifend varius. Praesent nec odio sed enim hendrerit
          imperdiet. Aenean elementum turpis erat, sollicitudin dapibus enim
          dignissim eget. Maecenas a placerat dolor, at volutpat eros. Integer
          malesuada dolor pellentesque gravida placerat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec enim metus, ullamcorper nec
          neque accumsan, commodo ultrices mi. Phasellus consectetur felis
          metus, at auctor massa rhoncus nec. Etiam nibh ex, ultricies sed risus
          eget, elementum dapibus dui. Duis eget faucibus urna.
        </Paragraph>
      </Container>
    </AboutWrapper>
  )
}
