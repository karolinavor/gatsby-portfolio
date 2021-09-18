import styled from "styled-components/macro"

const Container = styled.div`
  max-width: 900px;
  padding: 0 1rem;
  margin: 0 auto;
  height: 100%;
`

const FlexContainer = styled(Container)`
  display: flex;

  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Wrapper = styled.div`
  padding: 4rem 0;
`

export { Container, FlexContainer, Wrapper }
