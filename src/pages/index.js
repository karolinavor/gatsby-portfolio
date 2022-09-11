import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import styled from "styled-components/macro"
import { Container, Wrapper } from "../components/Container"
import { Subheading } from "../components/Heading"
import Card from "../components/Card"

const ProjectsGridWrapper = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default function Home({
  data: {
    allMarkdownRemark: { edges },
  },
}) {  

  return (
    <Layout>
      <Wrapper>
        <Container>
          <Subheading>Projects</Subheading>
          <ProjectsGridWrapper>
            {edges.map((item, index) => {
              return <Card
                name={item.node.frontmatter.title}
                page={item.node.frontmatter.slug}
                img={item.node.frontmatter.previewImage.childImageSharp.fluid}
                description="Landing page"
                key={index}
              />
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