import React from "react"
import styled from "styled-components/macro"
import Icon from "../components/Icon"
import Link from "../components/Link"
import { FlexContainer } from "./Containers"
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
        <Link href="mailto:vorlickovakarolina@gmail.com">
          vorlickovakarolina@gmail.com
        </Link>
        <SocialsWrapper>
          <Icon url="https://github.com/karolinavor">
            <Github size="32" cursor="pointer" />
          </Icon>
          <Icon url="https://www.linkedin.com/in/karolinavor/">
            <Linkedin size="32" cursor="pointer" />
          </Icon>
        </SocialsWrapper>
      </FlexContainer>
    </FooterWrapper>
  )
}
