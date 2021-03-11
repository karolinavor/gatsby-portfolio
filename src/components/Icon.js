import React from "react";
import styled from "styled-components/macro";

const StyledLink = styled.a`
    display: inline-block;
    margin: 1rem;
    color: var(--text);
`

export default function Icon(props) {
    return (
        <StyledLink 
            href={props.url}
            target="_blank"
            rel="noreferrer"
        >
            {props.children}
        </StyledLink>
    );
};