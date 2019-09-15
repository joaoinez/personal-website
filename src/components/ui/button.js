import styled, { css } from "styled-components"

const button = css`
  border: 2px solid #242424;
  background-color: transparent;
  padding: 10px 40px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  margin: 0 10px;

  &:hover {
    background-color: #242424;
    color: white;
  }
`

const Button = styled.button`
  ${button}
`

export { button, Button }
