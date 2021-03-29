import React from "react"
import styled from "styled-components/macro"
import Subheading from "../../Subheading"
import Paragraph from "../../Paragraph"

const SkillsWrapper = styled.div``

export default function Skills() {
  return (
    <SkillsWrapper>
      <Subheading>Skills</Subheading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at
        leo at erat varius consectetur sed at neque. Phasellus venenatis justo
        eget iaculis aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pellentesque at leo at erat varius consectetur sed at neque.
        Phasellus venenatis justo eget iaculis aliquam.
      </Paragraph>
    </SkillsWrapper>
  )
}
