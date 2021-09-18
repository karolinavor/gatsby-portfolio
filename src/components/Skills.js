import React from "react"
import styled from "styled-components/macro"
import { Subheading } from "./Heading"
import Paragraph from "./Paragraph"
import { InternalIcon } from "./Link"
import { Container } from "./Container"

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaSass,
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
  justify-content: space-evenly;
` 

export default function Skills() {
  return (
    <SkillsWrapper>
      <Container>
        <Flex>
          <InternalIcon>
            <FaHtml5 size="48" />
          </InternalIcon>
          <InternalIcon>
            <FaCss3Alt size="48" />
          </InternalIcon>
          <InternalIcon>
            <FaSass size="48" />
          </InternalIcon>
          <InternalIcon>
            <FaJsSquare size="48" />
          </InternalIcon>
          <InternalIcon>
            <FaReact size="48" />
          </InternalIcon>
          <InternalIcon>
            <GrGatsbyjs size="48" />
          </InternalIcon>
        </Flex>
      </Container>
    </SkillsWrapper>
  )
}
