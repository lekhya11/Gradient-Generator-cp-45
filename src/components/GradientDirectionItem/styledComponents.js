import styled from 'styled-components'

export const Button = styled.button`
  height: 50px;
  width: 80px;
  border-radius: 8px;
  opacity: ${props => (props.isActive ? '1' : '0.5')};

  margin: 10px;
`
