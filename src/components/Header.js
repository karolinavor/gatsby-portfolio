import React from "react"
import styled from "styled-components/macro"
import { Link } from "gatsby"
import { FlexContainer } from "./Container"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import {
  FaRegLightbulb,
  FaLightbulb
} from "react-icons/fa";

const Logo = styled(Link)`
  font-family: 'Staatliches', cursive;
  font-size: 50px;
  display: inline-block;
  color: var(--link);
  padding-bottom: 0.1rem;

  &:hover {
    color: var(--hover);
  }
`

const HeaderWrapper = styled.header`
  background-color: var(--bg-secondary);
  padding: 4rem 0;
`

const ThemeToggleIconWrapper = styled.div`
  height: 24px;
  color: var(--link);

  &:hover {
    color: var(--hover);
  }
`

export default function Header() {
  return (
    <HeaderWrapper>
      <FlexContainer>
        <Logo to="/">Karolinavor</Logo>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <ThemeToggleIconWrapper>
              {theme === "light" ? (
                <FaLightbulb
                  size="24"
                  cursor="pointer"
                  onClick={() => toggleTheme("dark")}
                />
              ) : (
                <FaRegLightbulb
                  size="24"
                  cursor="pointer"
                  onClick={() => toggleTheme("light")}
                />
              )}
            </ThemeToggleIconWrapper>
          )}
        </ThemeToggler>
      </FlexContainer>
    </HeaderWrapper>
  )
}
