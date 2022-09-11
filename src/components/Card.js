import React from "react"
import styled from "styled-components/macro"
import { Title } from "./Heading"
import { InternalLink, InternalLinkImage } from "./Link"
import Image from "gatsby-image"

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem 0;
`

const Paragraph = styled.p`
  margin: 1rem 0;
`

const RoundPreview = styled(Image)`
  border-radius: 1rem;
`

export default function Card(props) {
  return (
    <CardWrapper>
      <InternalLinkImage href={props.page}>
        <RoundPreview fluid={props.img} alt="Project Preview" width="100%" />
      </InternalLinkImage>
      <Title>{props.name}</Title>
      <Paragraph>{props.description}</Paragraph>
      <InternalLink href={props.page}>View Project</InternalLink>
    </CardWrapper>
  )
}
