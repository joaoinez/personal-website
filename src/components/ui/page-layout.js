import styled, { css } from "styled-components"

const Section = styled.section`
  min-height: ${({ minHeight = "inherit" }) => minHeight};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color = "none" }) => color};
`

const article = css`
  width: 1000px;
  max-width: 1000px;
  padding: 80px 20px;
`

export { Section, article }
