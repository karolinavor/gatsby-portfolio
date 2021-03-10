import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
    color: black;
    display: inline-block;
`

export default function Icon(props) {
    return (
        <StyledLink 
            href={props.url}
            target="_blank"
            rel="noreferrer"
        >{props.children}</StyledLink>
    );
};