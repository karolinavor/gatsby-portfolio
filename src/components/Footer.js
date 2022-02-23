import React from "react"
import styled from "styled-components/macro"
import { ExternalLink, ExternalIcon } from "./Link"
import { FlexContainer } from "./Container"

import { FaGithub, FaLinkedinIn } from "react-icons/fa"

const FooterWrapper = styled.footer`
  background-color: var(--bg-secondary);
  padding: 4rem 0;
`

const SocialsWrapper = styled.div`
  height: 100%;

  @media screen and (min-width: 900px) {
    height: 32px;
  }
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FlexContainer>
        <ExternalLink href="mailto:me@karolinavorlickova.cz">
          me@karolinavorlickova.cz
        </ExternalLink>
        <SocialsWrapper>
          <ExternalIcon
            href="https://github.com/karolinavor"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size="32" />
          </ExternalIcon>
          <ExternalIcon
            href="https://www.linkedin.com/in/karolinavor/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn size="32" />
          </ExternalIcon>
        </SocialsWrapper>
      </FlexContainer>
    </FooterWrapper>
  )
}
