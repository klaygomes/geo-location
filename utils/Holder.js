import styled from 'styled-components'

export default styled.div`
  margin: 0 auto;
  max-width: 80vw;
  width: 100%;
  background-color: ${({theme}) => theme.main};
  border: 1px solid silver;
  padding: 1rem;
  margin: 0 auto;
  p {
    color: ${({theme}) => theme.textColor};
  }
`
