import React from "react"
import styled from "styled-components/macro"
import { Heading } from "./Heading"
import Paragraph from "./Paragraph"
import { Container, Wrapper } from "./Container"

export default function AboutMe() {
  return (
    <Wrapper>
      <Container>
        <Heading>Web developer and Computer Science student</Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nulla turpis
          magna, cursus sit amet, suscipit a, interdum id, felis. Duis
          condimentum augue id magna semper rutrum. Etiam dui sem, fermentum
          vitae, sagittis id, malesuada in, quam. Etiam ligula pede, sagittis
          quis, interdum ultricies, scelerisque eu. In laoreet, magna id viverra
          tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed
          libero.
        </Paragraph>
        <Paragraph>
          Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Integer
          pellentesque quam vel velit. Nullam dapibus fermentum ipsum. Et harum
          quidem rerum facilis est et expedita distinctio. Fusce consectetuer
          risus a nunc. Phasellus enim erat, vestibulum vel, aliquam a, posuere
          eu, velit. Nam quis nulla. Praesent in mauris eu tortor porttitor
          accumsan. Integer vulputate sem a nibh rutrum consequat. Praesent
          vitae arcu tempor neque lacinia pretium. Praesent in mauris eu tortor
          porttitor accumsan. Nulla est. Sed elit dui, pellentesque a, faucibus
          vel, interdum nec, diam.
        </Paragraph>
      </Container>
    </Wrapper>
  )
}
