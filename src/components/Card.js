import React from "react"
import styled from "styled-components/macro"
import { Title } from "./Heading"
import Paragraph from "./Paragraph"
import { InternalLink } from "./Link"

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem 0;
`

const RoundPreview = styled.img`
  border-radius: 1rem;
`

export default function Card(props) {
  return (
    <CardWrapper>
      <RoundPreview src={props.img} alt="Project Preview" width="100%" />
      <Title>{props.name}</Title>
      <Paragraph>{props.description}</Paragraph>
      <InternalLink href={props.page}>View Project</InternalLink>
    </CardWrapper>
  )
}
