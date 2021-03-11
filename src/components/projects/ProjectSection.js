import React from "react";
import styled from "styled-components/macro";
import Subheading from "../../components/Subheading";
import Paragraph from "../../components/Paragraph";
import ProjectCard from "./ProjectCard";
import NextcoreImg from "../../images/Nextcore.png";

const ProjectSectionWrapper = styled.div`
`;

const ProjectsWrapper = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
`;

export default function ProjectSection() {
    return (
        <ProjectSectionWrapper>
        <Subheading>My projects</Subheading>
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at leo at erat varius consectetur sed at neque. Phasellus venenatis justo eget iaculis aliquam.</Paragraph>
        <ProjectsWrapper>
            <ProjectCard 
                name="Nextcore" 
                page="/nextcore" 
                img={NextcoreImg}
                description="I worked on this website's front end. It's built with HTML, CSS and JavaScript. Phasellus venenatis justo eget iaculis aliquam."
            />
            <ProjectCard 
                name="React Blog" 
                page="/react-blog" 
                img={NextcoreImg}
                description="Full stack web application built with React, Node.js and MongoDB. Phasellus venenatis justo eget iaculis aliquam."
            />
        </ProjectsWrapper>
        </ProjectSectionWrapper>
    );
}