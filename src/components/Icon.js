import React from "react";
import styled from "styled-components/macro";

const ExternalLink = styled.a`
    display: inline-block;
    margin: 1rem;
    color: var(--link);

    &:hover {
        color: var(--hover);
    }
`

export default function Icon(props) {
    return (
        <ExternalLink
            href={props.url}
            target="_blank"
            rel="noreferrer"
        >
            {props.children}
        </ExternalLink>
    );
};