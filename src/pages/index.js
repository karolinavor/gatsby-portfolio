import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styled from "styled-components/macro"
import { Container, Wrapper } from "../components/Container"
import { Subheading } from "../components/Heading"
import { Title } from "../components/Heading"
import { InternalLink, InternalLinkImage } from "../components/Link"
import Image from "gatsby-image"

const ProjectsGridWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 1rem 0;
`

const Paragraph = styled.p`
  margin: 1rem 0;
`

const RoundPreview = styled(Image)`
  border-radius: 1rem;
`

export default function Home({ data }) {  
  let edges = data.allMarkdownRemark.edges
  return (
    <Layout>
      <Wrapper>
        <Container>
          <Subheading>Projects</Subheading>
          <ProjectsGridWrapper>
            {edges.map((item, index) => {
              return (
                <div className="card" key={index}>
                  <CardWrapper>
                    <InternalLinkImage to={item.node.frontmatter.slug}>
                      <RoundPreview fluid={item.node.frontmatter.previewImage.childImageSharp.fluid} alt="Project Preview"/>
                    </InternalLinkImage>
                    <Title>{item.node.frontmatter.title}</Title>
                    <Paragraph>Landing page</Paragraph>
                    <InternalLink to={item.node.frontmatter.slug}>View Project</InternalLink>
                  </CardWrapper>
                </div>
              )
            })}
          </ProjectsGridWrapper>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___index] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            index
            slug
            title
            previewImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`