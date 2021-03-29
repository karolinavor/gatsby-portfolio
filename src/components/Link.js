import styled from "styled-components/macro"
import { Link } from "gatsby"

const ExternalLink = styled.a`
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  color: var(--link);
  padding-bottom: 0.1rem;
  border-bottom: 1.8px solid var(--link);
`

const ExternalIcon = styled.a`
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  color: var(--link);
  height: 100%;
  margin-left: 1.5rem;
`

const InternalLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  color: var(--link);
  padding-bottom: 0.1rem;
  border-bottom: 1.8px solid var(--link);
`

export { ExternalLink, InternalLink, ExternalIcon }
