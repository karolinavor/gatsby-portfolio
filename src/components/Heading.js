import styled from "styled-components/macro"

const Heading = styled.h1`
  font-family: 'Staatliches',cursive;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;

  @media screen and (min-width: 992px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`

const Subheading = styled.h2`
  font-family: 'Staatliches',cursive;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 500;
`

const Title = styled.h2`
  font-family: 'Staatliches',cursive;
  font-size: 1.5rem;
  margin-top: .5rem;
  margin-bottom: 1rem;
  font-weight: 500;
`

export { Heading, Subheading, Title }
