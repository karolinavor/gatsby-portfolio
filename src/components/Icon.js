import React from "react"
import styled from "styled-components/macro"

const ExternalLink = styled.a`
  display: inline-block;
  color: var(--link);
  height: 32px;
  margin-left: 1.5rem;
`

export default function Icon(props) {
  return (
    <ExternalLink href={props.url} target="_blank" rel="noreferrer">
      {props.children}
    </ExternalLink>
  )
}
