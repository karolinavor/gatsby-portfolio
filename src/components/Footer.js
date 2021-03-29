import React from "react"
import styled from "styled-components/macro"
import { ExternalLink, ExternalIcon } from "./Link"
import { FlexContainer } from "./Container"
import { Github, Linkedin } from "react-bootstrap-icons"

const FooterWrapper = styled.footer`
  background-color: var(--bg-secondary);
  padding: 4rem 0;
`

const SocialsWrapper = styled.div`
  height: 32px;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <FlexContainer>
        <ExternalLink href="mailto:vorlickovakarolina@gmail.com">
          vorlickovakarolina@gmail.com
        </ExternalLink>
        <SocialsWrapper>
          <ExternalIcon
            href="https://github.com/karolinavor"
            target="_blank"
            rel="noreferrer"
          >
            <Github size="32" cursor="pointer" />
          </ExternalIcon>
          <ExternalIcon
            href="https://www.linkedin.com/in/karolinavor/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size="32" cursor="pointer" />
          </ExternalIcon>
        </SocialsWrapper>
      </FlexContainer>
    </FooterWrapper>
  )
}
