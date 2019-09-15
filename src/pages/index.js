import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { ArrowRight } from "styled-icons/feather/ArrowRight"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, article, LinkButton } from "../components/ui"

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

const Main = styled.article`
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

const MainButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "my-photo.jpg" }) {
        childImageSharp {
          fixed(width: 512, height: 512) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Section minHeight="100vh">
        <Skew />
        <Main>
          <MainTextWrapper>
            <Img
              fixed={data.placeholderImage.childImageSharp.fixed}
              style={{
                borderRadius: `50%`,
                maxWidth: `250px`,
                maxHeight: `250px`,
              }}
            />
            <Title>Hi, I'm João Inez</Title>
            <P>
              I'm a web developer who loves all things Javascript, especially
              the functional side.
            </P>
          </MainTextWrapper>
          <MainButtonWrapper>
            <LinkButton to="/portfolio">
              Portfolio <ArrowRight size={20} />
            </LinkButton>
          </MainButtonWrapper>
        </Main>
      </Section>
    </Layout>
  )
}

export default IndexPage
