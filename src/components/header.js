import React from "react"
import styled from "styled-components"
import { Linkedin } from "styled-icons/fa-brands/Linkedin"
import { Github } from "styled-icons/fa-brands/Github"
import { globalHistory } from "@reach/router"

import { LinkA, A, IconA } from "./ui"

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

  a {
    color: black; /* Might remove later */
  }
`

const Header = () => {
  const path = globalHistory.location.pathname

  return (
    <HeaderS>
      <Container>
        <Ul>
          <Li>
            <LinkA to="/" datapath="/" path={path}>
              Home
            </LinkA>
          </Li>
          <Li>
            <LinkA to="/portfolio" datapath="/portfolio" path={path}>
              Portfolio
            </LinkA>
          </Li>
          <Li>
            <LinkA to="/skills" datapath="/skills" path={path}>
              Skills
            </LinkA>
          </Li>
          <Li>
            <LinkA to="/about" datapath="/about" path={path}>
              About
            </LinkA>
          </Li>
          <Li>
            <A href="#">Blog</A>
          </Li>
          <Li>
            <IconA
              href="https://www.linkedin.com/in/joao-inez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </IconA>
          </Li>
          <Li>
            <IconA
              href="https://github.com/JoaoInez"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </IconA>
          </Li>
        </Ul>
      </Container>
    </HeaderS>
  )
}

export default Header
