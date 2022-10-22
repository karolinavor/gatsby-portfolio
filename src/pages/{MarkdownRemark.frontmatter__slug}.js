import React from "react"
import styled from "styled-components/macro"
import Layout from "../components/Layout"
import { Container, Wrapper } from "../components/Container"
import { graphql } from "gatsby"
import { Heading } from "../components/Heading"
import { ExternalLink } from "../components/Link"
import Hashtag from "../components/Hashtag"
import Img from "../components/Img"

const Text = styled.div`
  p {
    margin: 1rem 0;
  }
`

export default function ProjectTemplate({data,}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Container>
        <Wrapper>
          <Heading>{frontmatter.title}</Heading>
          <Hashtag>#{frontmatter.type}</Hashtag>
          {frontmatter.tags.map((tag, index) => {
            return <Hashtag key={index}>#{tag}</Hashtag>
          })}
          <Text dangerouslySetInnerHTML={{ __html: html }} />
          <ExternalLink
            className="margin-bottom"
            href={frontmatter.link}
            target="_blank"
          >
            Go To Website
          </ExternalLink>
          <Img fluid={frontmatter.fullImage.childImageSharp.fluid} alt="Project screenshot" width="400" height="300" />
        </Wrapper>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        slug
        tags
        title
        type
        link
        fullImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`