import React from "react";
import { Subheading } from "../components/Heading";
import ProjectCard from "../components/ProjectCard";
//import NextcoreImg from "../images/Nextcore.png";

export default function ProjectSection() {
    return (
        <>
        <Subheading>My projects</Subheading>
        <ProjectCard name="Nextcore" page="/nextcore" img />
        <ProjectCard name="React Blog" page="/react-blog" img />
        </>
    );
}