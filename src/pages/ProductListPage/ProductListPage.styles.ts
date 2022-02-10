import styled from 'styled-components'

const Container = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 3.75rem 1.5rem 0 1.5rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, 282px);
  gap: 48px;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(3, 282px);
  }

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 282px);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 282px);
  }
`

export default { Container }
