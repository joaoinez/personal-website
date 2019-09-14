import { Link } from "gatsby"
import React from "react"
import styled, { css } from "styled-components"
import { Linkedin } from "styled-icons/fa-brands/Linkedin"
import { Github } from "styled-icons/fa-brands/Github"
import { globalHistory } from "@reach/router"

const HeaderS = styled.header`
  background: transparent;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`

const Container = styled.nav`
  padding: 1.45rem 0;
`

const Ul = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 0;
  padding: 0;
`

const Li = styled.li`
  list-style-type: none;
  margin-right: 50px;
`

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

const A = styled.a`
  ${anchor};
`

const LinkS = styled(Link)`
  ${anchor};
`

const IconLink = styled.a`
  text-decoration: none;
  color: #242424;
  transition: opacity 0.15s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
`

const Header = () => {
  const path = globalHistory.location.pathname

  return (
    <HeaderS>
      <Container>
        <Ul>
          <Li>
            <LinkS to="/" datapath="/" path={path}>
              Home
            </LinkS>
          </Li>
          <Li>
            <LinkS to="/portfolio" datapath="/portfolio" path={path}>
              Portfolio
            </LinkS>
          </Li>
          <Li>
            <LinkS to="/skills" datapath="/skills" path={path}>
              Skills
            </LinkS>
          </Li>
          <Li>
            <LinkS to="/about" datapath="/about" path={path}>
              About
            </LinkS>
          </Li>
          <Li>
            <A href="#">Blog</A>
          </Li>
          <Li>
            <IconLink href="https://www.linkedin.com/in/joao-inez">
              <Linkedin size={20} />
            </IconLink>
          </Li>
          <Li>
            <IconLink href="https://github.com/JoaoInez">
              <Github size={20} />
            </IconLink>
          </Li>
        </Ul>
      </Container>
    </HeaderS>
  )
}

export default Header
