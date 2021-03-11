import React from "react";
import styled from "styled-components/macro";
import Logo from "../components/Logo";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 3rem 0 4rem 0;
`;

const ThemeToggleIconWrapper = styled.div`
    width: 16px;
    height: 16px;
    color: var(--link);

    &:hover {
        color: var(--hover);
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <Logo size="48" />
            <ThemeToggler>
            {({ theme, toggleTheme }) => (
                <ThemeToggleIconWrapper>
                    <FontAwesomeIcon
                        icon={faMoon}
                        cursor="pointer"
                        onClick={() =>
                            theme === "dark" ? toggleTheme("light") : toggleTheme("dark")
                        }
                    />
                </ThemeToggleIconWrapper>
            )}
            </ThemeToggler>
        </HeaderWrapper>
    );
};