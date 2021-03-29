import React from "react"
import styled from "styled-components/macro"
import { InternalLink } from "./Link"
import { FlexContainer } from "./Container"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { BrightnessHighFill, MoonFill } from "react-bootstrap-icons"

const HeaderWrapper = styled.header`
  background-color: var(--bg-secondary);
  padding: 4rem 0;
`

const ThemeToggleIconWrapper = styled.div`
  height: 24px;
  color: var(--link);
`

export default function Header() {
  return (
    <HeaderWrapper>
      <FlexContainer>
        <InternalLink to="/">Karolina Vorlickova</InternalLink>
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
