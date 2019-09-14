import React from "react"
import styled, { css } from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Section = styled.section`
  min-height: ${({ minHeight = "initial" }) => minHeight};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color = "none" }) => color};
`

const H = styled.h1`
  font-size: 3rem;
`

const article = css`
  width: 1000px;
  max-width: 1000px;
  padding: 80px 20px;
`

const Projects = styled.article`
  ${article};
`

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Section>
      <Projects>
        <H>Personal Projects</H>
      </Projects>
    </Section>
  </Layout>
)

export default Portfolio
