import styled, { css } from "styled-components"

const button = css`
  border: 2px solid #242424;
  background-color: transparent;
  padding: 10px 40px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: #242424;
    color: white;
  }
`

const Button = styled.button`
  ${button}
`

export { button, Button }
