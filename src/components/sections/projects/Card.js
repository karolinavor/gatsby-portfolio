import React from "react"
import styled from "styled-components/macro"
import Subheading from "../../Subheading"
import Paragraph from "../../Paragraph"
import { InternalLink } from "../../Link"

const CardWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
`

export default function ProjectCard(props) {
  return (
    <CardWrapper>
      <img src={props.img} alt="Project Preview" width="100%" height="300px" />
      <Subheading>{props.name}</Subheading>
      <Paragraph>{props.description}</Paragraph>
      <InternalLink href={props.page}>View Project</InternalLink>
    </CardWrapper>
  )
}
