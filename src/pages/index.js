import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { ArrowRight } from "styled-icons/feather/ArrowRight"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, article, LinkButton, H } from "../components/ui"

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

const DualSection = styled(Section)`
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
`

const About = styled.article`
  ${article};
  flex: 1;
  color: white;
  max-width: 500px;

  p {
    max-width: 600px;
    margin-bottom: 40px;
  }

  ${LinkButton} {
    border-color: white;
    color: white;

    &:hover {
      background-color: white;
      color: #242424;
    }
  }
`

const Skills = styled.article`
  ${article};
  flex: 1;
  color: white;
  max-width: 500px;

  ul {
    list-style: none;
    margin-left: 0;
  }

  ${LinkButton} {
    border-color: white;
    color: white;

    &:hover {
      background-color: white;
      color: #242424;
    }
  }
`

const Projects = styled.article`
  ${article};
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
      <DualSection color="#242424">
        <About>
          <p>
            Not a lot of things fascinate more than the world of software
            development. Programming seems like a tool box with infinite
            possiblities, where the only limiting factor is your imagination,
            and maybe processing power.
          </p>
          <LinkButton to="/about">
            More about me <ArrowRight size={20} />
          </LinkButton>
        </About>
        <Skills>
          <h4>Favourite technologies:</h4>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>Python</li>
          </ul>
          <LinkButton to="/skills">
            See my skills <ArrowRight size={20} />
          </LinkButton>
        </Skills>
      </DualSection>
      <Section>
        <Projects>
          <H>Projects</H>
        </Projects>
      </Section>
    </Layout>
  )
}

export default IndexPage
