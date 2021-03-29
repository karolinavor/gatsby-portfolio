import React from "react"
import styled from "styled-components/macro"
import Logo from "../components/Logo"
import { FlexContainer } from "./Containers"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { BrightnessHighFill, MoonFill } from "react-bootstrap-icons"

const HeaderWrapper = styled.header`
  padding: 3rem 0;
`

const ThemeToggleIconWrapper = styled.div`
  height: 24px;
  color: var(--link);
`

export default function Header() {
  return (
    <HeaderWrapper>
      <FlexContainer>
        <Logo size="48" />
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <ThemeToggleIconWrapper>
              {theme === "light" ? (
                <BrightnessHighFill
                  size="24"
                  cursor="pointer"
                  onClick={() => toggleTheme("dark")}
                />
              ) : (
                <MoonFill
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
