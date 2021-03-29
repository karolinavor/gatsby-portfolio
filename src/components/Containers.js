import styled from "styled-components/macro"

const Container = styled.div`
  max-width: 900px;
  padding: 0 1rem;
  margin: 0 auto;
`

const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export { Container, FlexContainer }
