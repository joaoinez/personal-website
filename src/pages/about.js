import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, article, H } from "../components/ui"

const AboutMe = styled.article`
  ${article};
`

const About = () => (
  <Layout>
    <SEO title="About" />
    <Section>
      <AboutMe>
        <H>About me</H>
      </AboutMe>
    </Section>
  </Layout>
)

export default About
