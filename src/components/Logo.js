import React from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import LogoImg from "../images/Logo.png";

const StyledLink = styled(Link)`
    display: block;
    height: ${p => p.size}px;
    width: ${p => p.size}px;
`;

export default function Logo(props) {
    return (
        <StyledLink to="/" size={props.size} >
            <img src={LogoImg} alt="Logo" width={props.size} height={props.size}></img>
        </StyledLink>
    );
};