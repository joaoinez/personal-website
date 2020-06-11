import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { button } from "./button"

const anchor = css`
  text-decoration: none;
  color: #242424;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 100%;
    height: 4px;
    max-width: 0;
    margin: 0 auto;
    background: #888;
    transition: all 0.15s ease-in-out;
    z-index: -1;
  }
  &:hover::after {
    max-width: 100%;
  }
`

const LinkButton = styled(Link)`
  ${button};
  text-decoration: none;
  color: #242424;
`

const LinkA = styled(Link)`
  ${anchor};
`

const A = styled.a`
  ${anchor};
`

const IconA = styled.a`
  text-decoration: none;
  color: #242424;
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
`

const ButtonA = styled.a`
  ${button};
  text-decoration: none;
  color: #242424;
`

export { anchor, LinkButton, LinkA, A, IconA, ButtonA }
