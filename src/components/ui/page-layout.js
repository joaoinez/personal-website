import styled, { css } from "styled-components"

const Section = styled.section`
  min-height: ${({ minHeight = "inherit" }) => minHeight};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ color = "none" }) => color};
`

const article = css`
  width: 100%;
  max-width: 1000px;
  padding: 80px 40px;
`

export { Section, article }
