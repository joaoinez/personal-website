import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, article, H } from "../components/ui"

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
