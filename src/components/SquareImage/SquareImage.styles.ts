import styled from 'styled-components'

interface ContainerProps {
  size: string
  src: string
}

const Container = styled.div<ContainerProps>`
  ${({ size }) => `width: ${size}; `}
  padding-top: 100%;
  position: relative;

  :after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: center / cover no-repeat url('${({ src }) => src ?? ''}');
  }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.05);
`

export default { Container, Background }
