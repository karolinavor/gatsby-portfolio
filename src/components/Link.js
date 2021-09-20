import styled from "styled-components/macro"
import { Link } from "gatsby"

const ExternalLink = styled.a`
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  color: var(--link);
  padding-bottom: 0.1rem;
  border-bottom: 1.8px solid var(--link);
  cursor: pointer;

  &:hover {
    color: var(--hover);
    border-bottom: 1.8px solid var(--hover);
  }
`

const ExternalIcon = styled.a`
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  color: var(--link);
  height: 100%;
  padding: 1rem 1rem 0 1rem;
  cursor: pointer;

  @media screen and (min-width: 900px) {
    padding: 0 0 0 1.5rem;
  }

  &:hover {
    color: var(--hover);
  }
`

const InternalLink = styled(Link)`
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  color: var(--link);
  padding-bottom: 0.1rem;
  border-bottom: 1.8px solid var(--link);
  cursor: pointer;

  &:hover {
    color: var(--hover);
    border-bottom: 1.8px solid var(--hover);
  }
`

const InternalIcon = styled.div`
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  color: var(--link);
  height: 100%;
  padding: 1rem 1rem 0 1rem;
  cursor: pointer;

  @media screen and (min-width: 900px) {
    padding: 0 0 0 1.5rem;
  }

  &:hover {
    color: var(--hover);
  }
`

export { ExternalLink, InternalLink, ExternalIcon, InternalIcon }
