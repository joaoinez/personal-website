import React, { useRef } from "react"
import styled, { css, keyframes } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { ArrowDown } from "styled-icons/feather/ArrowDown"
import { Download } from "styled-icons/feather/Download"
import { Linkedin } from "styled-icons/feather/Linkedin"
import { Github } from "styled-icons/feather/Github"
import { Mail } from "styled-icons/feather/Mail"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, article, ButtonA, H, IconA } from "../components/ui"
import ProjectCard from "../components/project-card"

const skewSlide = keyframes`
  from {
    transform: translateX(-65vw);
  }
  to {
    transform: translateX(0);
  }
`

const Skew = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
  z-index: -1;
  top: 0;
  clip-path: polygon(0 0, 35% 0, 65% 100%, 0 100%);
  animation-name: ${skewSlide};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
`

const Title = styled.h1`
  font-size: 5rem;
  max-width: 400px;
  color: black;
`

const Main = styled.article`
  ${article};
  padding: 0 40px;
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const mainTextSlide = keyframes`
from {
  transform: translateX(-500px);
}
to {
  transform: translateX(0);
  opacity: 1;
}
`

const buttonReveal = keyframes`
  from {
    transform: translateY(10px);
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const buttonAnim = css`
  opacity: 0;
  animation-name: ${buttonReveal};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-delay: 0.8s;
  animation-fill-mode: forwards;
`

const MainTextWrapper = styled.div`
  flex: 1;
  min-width: 200px;
  opacity: 0;
  animation-name: ${mainTextSlide};
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  animation-delay: 0.25s;
  animation-fill-mode: forwards;

  ${IconA} {
    svg {
      ${buttonAnim};
    }

    margin-right: 20px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`

const P = styled.p`
  max-width: 400px;
`

const MainButtonWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  ${ButtonA} {
    margin: 10px 0;
    ${buttonAnim};

    &:first-of-type {
      animation-delay: 1.3s;
    }

    &:last-of-type {
      animation-delay: 1.55s;
    }
  }
`

const DualSection = styled(Section)`
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  padding: 60px 40px;
`

const darkArticle = css`
  ${article};
  flex: 1;
  color: #eeeeee;
  max-width: 500px;
  padding: 20px 0;
  min-width: 250px;

  h4 {
    color: white;
  }
`

const About = styled.article`
  ${darkArticle};

  p {
    max-width: 600px;
  }
`

const Skills = styled.article`
  ${darkArticle};
`

const Projects = styled.article`
  ${article};
  padding-bottom: 0;
`

const ProjectsShowcase = styled.div`
  flex: 1;
  width: 100%;
  margin: 0 0 40px 0;
  padding: 40px 0;
  display: grid;
  grid-gap: 35px;
  grid-template-columns: repeat(5, min-content);
  overflow-x: scroll;
  scroll-snap-type: x proximity;
`

const EmptyCard = styled.div`
  width: 1px;
`

const IndexPage = () => {
  const projectsRef = useRef()
  const data = useStaticQuery(graphql`
    query {
      constroiWood: file(relativePath: { eq: "constroi-wood.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      personalWebsite: file(relativePath: { eq: "personal-website.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apollify: file(relativePath: { eq: "apollify.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cv: allFile(filter: { extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)

  const scrollToProjects = e => {
    e.preventDefault()
    projectsRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Section minHeight="100vh">
        <Skew />
        <Main>
          <MainTextWrapper>
            <Title>Hi, I'm João Inez</Title>
            <P>
              I'm a web developer who loves all things Javascript, especially
              the functional side.
            </P>
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
              rel="noopener noreferrer nofollow"
            >
              <Github size={20} />
            </IconA>
            <IconA href="mailto:joaoinez.info@gmail.com">
              <Mail size={20} />
            </IconA>
          </MainTextWrapper>
          <MainButtonWrapper>
            <ButtonA
              target="_blank"
              rel="noopener noreferrer nofollow"
              href={data.cv.edges[0].node.publicURL}
            >
              Resume <Download size={20} />
            </ButtonA>
            <ButtonA href="#projects" onClick={scrollToProjects}>
              Projects <ArrowDown size={20} />
            </ButtonA>
          </MainButtonWrapper>
        </Main>
      </Section>
      <DualSection color="#242424">
        <Skills>
          <h4>My favourite technologies</h4>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>Python</li>
            <li>Vue</li>
          </ul>
        </Skills>
        <About>
          <h4>About me</h4>
          <p>
            Not a lot of things fascinate more than the world of software
            development. Programming seems like a tool box with infinite
            possiblities, where the only limiting factor is your imagination,
            and maybe processing power.
          </p>
        </About>
      </DualSection>
      <Section>
        <Projects>
          <H>Projects</H>
        </Projects>
        <ProjectsShowcase ref={projectsRef} id="projects">
          <EmptyCard />
          <ProjectCard
            title="ConstroiWood"
            description="Webiste for the construction company ConstroiWood"
            tech="Next, Netlify, NetlifyCMS"
            url="https://constroiwood.netlify.com/"
            github="https://github.com/JoaoInez/constroi-wood"
          >
            <Img fluid={data.constroiWood.childImageSharp.fluid} />
          </ProjectCard>
          <ProjectCard
            title="Personal Website"
            description="My personal website"
            tech="Gatsby, Github Pages"
            github="https://github.com/JoaoInez/personal-website"
          >
            <Img fluid={data.personalWebsite.childImageSharp.fluid} />
          </ProjectCard>
          <ProjectCard
            title="Apollify"
            description="Creates spotify playlists based on the user's selected artists"
            tech="Nuxt, Heroku"
            url="https://www.apollify.com/"
            github="https://github.com/JoaoInez/apollify"
            googlePlay="https://play.google.com/store/apps/details?id=com.apollify.twa"
          >
            <Img fluid={data.apollify.childImageSharp.fluid} />
          </ProjectCard>
          <EmptyCard />
        </ProjectsShowcase>
      </Section>
    </Layout>
  )
}

export default IndexPage
