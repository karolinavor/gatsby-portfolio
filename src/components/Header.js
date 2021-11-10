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

  @media screen and (max-width: 599.9px) {
    width: 75%;
    margin-bottom: 1rem;
    text-align: center;
  }

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
  cursor: pointer;

  &:hover {
    color: var(--hover);
  }
`

export default function Header() {
  return (
    <HeaderWrapper>
      <FlexContainer>
        <Logo to="/">Karolina Vorlickova</Logo>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <ThemeToggleIconWrapper>
              {theme === "light" ? (
                <FaLightbulb
                  size="24"
                  onClick={() => toggleTheme("dark")}
                />
              ) : (
                <FaRegLightbulb
                  size="24"
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
