import React from "react";
import styled from "styled-components/macro";
import Subheading from "../../components/Subheading";
import Paragraph from "../../components/Paragraph";
import Button from "../Button";

const CardWrapper = styled.div`
    max-width: 100%;
    max-height: 100%;
`;

export default function ProjectCard(props) {
    return (
        <CardWrapper>
            <img src={props.img} alt="Project Preview" width="100%" height="300px"/>
            <Subheading>{props.name}</Subheading>
            <Paragraph>{props.description}</Paragraph>
            <Button to={props.page} text="View Project"/>
        </CardWrapper>
    );
};