import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { button } from "./button"

const anchor = css`
  text-decoration: none;
  color: #242424;

  &::after {
    content: "";
    display: block;
    width: ${({ path = "", datapath = null }) =>
      datapath === path ? "100%" : "0"};
    height: 2px;
    margin: 0 auto;
    background: black;
    transition: width 0.15s ease-in-out;
  }
  &:hover::after {
    width: 100%;
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

export { anchor, LinkButton, LinkA, A, IconA }
