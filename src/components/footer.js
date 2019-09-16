import React from "react"
import styled from "styled-components"
import { Linkedin } from "styled-icons/feather/Linkedin"
import { Github } from "styled-icons/feather/Github"

import { IconA } from "../components/ui"

const FooterS = styled.footer`
  background-color: #242424;
`

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  color: white;
  display: flex;
  justify-content: center;

  p {
    margin: 0;
  }

  ${IconA} {
    color: white;

    &:first-of-type {
      margin-right: 20px;
    }
  }
`

const Divider = styled.p`
  padding: 0 20px;
`

const Footer = () => (
  <FooterS>
    <FooterContainer>
      <p>© 2019 Joao Inez</p>
      <Divider>|</Divider>
      <IconA
        href="https://www.linkedin.com/in/joao-inez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={20} />
      </IconA>
      <IconA
        href="https://github.com/JoaoInez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={20} />
      </IconA>
    </FooterContainer>
  </FooterS>
)

export default Footer
