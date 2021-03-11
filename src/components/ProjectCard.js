import React from "react";
import styled from "styled-components/macro";
import { Link } from "gatsby";
import { Subheading } from "../components/Heading";

const CardWrapper = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
    padding: 1rem;
`;

export default function ProjectCard(props) {
    return (
        <CardWrapper>
            {/*<img src={props.img} alt="Project Preview" width="100%" />*/}
            <Subheading>{props.name}</Subheading>
            <Link to={props.page}>More information</Link>
        </CardWrapper>
    );
};