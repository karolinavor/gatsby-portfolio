import React from "react";
import styled from "styled-components/macro";
import Logo from "../components/Logo";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <Logo size="48" />
            <ThemeToggler>
            {({ theme, toggleTheme }) => (
                <FontAwesomeIcon
                    icon={faMoon}
                    size="1x"
                    cursor="pointer"
                    onClick={() =>
                        theme === "dark" ? toggleTheme("light") : toggleTheme("dark")
                    }
                />
            )}
            </ThemeToggler>
        </HeaderWrapper>
    );
};