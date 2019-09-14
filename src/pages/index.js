import React from "react"
import { Link } from "gatsby"
import styled, { css } from "styled-components"
import { ArrowRight } from "styled-icons/feather/ArrowRight"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "../components/image"

const Section = styled.section`
  min-height: ${({ minHeight = "initial" }) => minHeight};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color = "none" }) => color};
`

const Skew = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  z-index: -1;
  top: 0;
  clip-path: polygon(0 0, 35% 0, 65% 100%, 0 100%);
`

const Title = styled.h1`
  font-size: 5rem;
  max-width: 400px;
`

const article = css`
  width: 1000px;
  max-width: 1000px;
  padding: 80px 20px;
`

const MainContent = styled.article`
  ${article};
  padding: 80px 20px 20px 20px;
  display: flex;
  flex-wrap: wrap;
`

const MainTextWrapper = styled.div`
  flex: 2;
`

const P = styled.p`
  max-width: 400px;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

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

const LinkS = styled(Link)`
  ${button};
  text-decoration: none;
  color: #242424;
`

const H = styled.h1`
  font-size: 3rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section minHeight="100vh">
      <Skew />
      <MainContent>
        <MainTextWrapper>
          <Img />
          <Title>Hi, I'm João Inez</Title>
          <P>
            I'm a web developer who loves all things Javascript, especially the
            functional side.
          </P>
        </MainTextWrapper>
        <ButtonWrapper>
          <LinkS to="/portfolio">
            Portfolio <ArrowRight size={20} />
          </LinkS>
        </ButtonWrapper>
      </MainContent>
    </Section>
  </Layout>
)

export default IndexPage
