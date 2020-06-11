import React from "react"
import styled from "styled-components"
import { Linkedin } from "styled-icons/feather/Linkedin"
import { Github } from "styled-icons/feather/Github"
import { Mail } from "styled-icons/feather/Mail"

import { IconA } from "../components/ui"

const FooterS = styled.footer`
  background-color: #242424;
`

const FooterContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 30px 20px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
  }

  ${IconA} {
    color: white;
    margin-right: 20px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  a {
    color: white;
    text-decoration: none;
    transition: opacity 0.15s ease-in-out;

    &:hover {
      opacity: 0.75;
    }
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

const Divider = styled.p`
  padding: 0 20px;

  @media only screen and (max-width: 600px) {
    color: transparent;
    width: 50%;
    border-top: 1px solid white;
    height: 1px;
    padding: 0 0 10px;
  }
`

const InfoWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  align-items: center;
`

const Footer = () => (
  <FooterS>
    <FooterContainer>
      <p>© 2020 João Inez</p>
      <Divider>|</Divider>
      <InfoWrapper>
        <IconA
          href="https://www.linkedin.com/in/joao-inez"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Linkedin size={20} />
        </IconA>
        <IconA
          href="https://github.com/JoaoInez"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <Github size={20} />
        </IconA>
        <a href="mailto:joaoinez.info@gmail.com">
          <Mail size={20} /> joaoinez.info@gmail.com
        </a>
      </InfoWrapper>
    </FooterContainer>
  </FooterS>
)

export default Footer
