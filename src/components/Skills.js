import React from "react"
import styled from "styled-components/macro"
import { Subheading } from "./Heading"
import Paragraph from "./Paragraph"
import { ExternalIcon } from "./Link"
import { Container } from "./Container"

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaSass,
  FaFigma,
  FaBootstrap
} from "react-icons/fa";

import {
  GrGatsbyjs
} from "react-icons/gr";

const SkillsWrapper = styled.div`
  padding: 4rem 0;
  background-color: var(--bg-secondary);
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ExternalSkillIcon = styled(ExternalIcon)`
  padding: 0;
  text-align: center;
`

export default function Skills() {
  return (
    <SkillsWrapper>
      <Container>
        <Flex>
          <ExternalSkillIcon
            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
            target="_blank"
            rel="noreferrer"
            className="margin-bottom"
          >
            <FaHtml5 size="48" />
          </ExternalSkillIcon>
          <ExternalSkillIcon
            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
            target="_blank"
            rel="noreferrer"
            className="margin-bottom"
          >
            <FaCss3Alt size="48" />
          </ExternalSkillIcon>
          <ExternalSkillIcon
            href="https://sass-lang.com"
            target="_blank"
            rel="noreferrer"
            className="margin-bottom"
          >
            <FaSass size="48" />
          </ExternalSkillIcon>
          <ExternalSkillIcon
            href="https://getbootstrap.com"
            target="_blank"
            rel="noreferrer"
            className="margin-bottom"
          >
            <FaBootstrap size="48" />
          </ExternalSkillIcon>
        </Flex>
        <Flex>
          <ExternalSkillIcon
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
            className="margin-top"
          >
            <FaJsSquare size="48" />
          </ExternalSkillIcon>
          <ExternalSkillIcon
            href="https://reactjs.org"
            target="_blank"
            rel="noreferrer"
            className="margin-top"
          >
            <FaReact size="48" />
          </ExternalSkillIcon>
          <ExternalSkillIcon
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="noreferrer"
            className="margin-top"
          >
            <GrGatsbyjs size="48" />
          </ExternalSkillIcon>
          <ExternalSkillIcon
            href="https://www.figma.com"
            target="_blank"
            rel="noreferrer"
            className="margin-top"
          >
            <FaFigma size="48" />
          </ExternalSkillIcon>
        </Flex>
      </Container>
    </SkillsWrapper>
  )
}
