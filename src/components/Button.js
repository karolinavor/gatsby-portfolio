import React from "react";
import { Link } from "gatsby";
import styled from "styled-components/macro";

const InternalLink = styled(Link)`
    text-decoration: none;
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    color: var(--text);

    &:hover {
        color: var(--hover);
    }
`;

export default function Button(props) {
    return (
        <InternalLink to={props.to}>{props.text}</InternalLink>
    );
};