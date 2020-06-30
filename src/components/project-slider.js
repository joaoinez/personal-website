import React, { useState, useRef } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled, { css } from "styled-components"
import { ChevronLeft } from "styled-icons/feather/ChevronLeft"
import { ChevronRight } from "styled-icons/feather/ChevronRight"
import { ArrowRight } from "styled-icons/feather/ArrowRight"

import ProjectCard from "./project-card"

const sideFade = css`
  content: "";
  position: absolute;
  height: 100%;
  width: 20vw;
  z-index: 2;
  pointer-events: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const sideArea = css`
  position: absolute;
  width: 15vw;
  z-index: 3;
  top: calc(50% - 25px);

  div {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: 480px) {
    display: none;
  }
`

const LeftArea = styled.div`
  ${sideArea};
  left: 0;

  div {
    justify-content: flex-start;

    button {
      margin-left: 20px;
    }
  }
`
const RightArea = styled.div`
  ${sideArea};
  right: 0;

  div {
    justify-content: flex-end;

    button {
      margin-right: 20px;
    }
  }
`

const ProjectsWrapper = styled.div`
  flex: 1;
  width: 100%;
  position: relative;
  display: flex;

  &::before {
    ${sideFade};
    left: 0;
    background: linear-gradient(
      90deg,
      hsla(0, 0%, 100%, 0.8),
      hsla(0, 0%, 100%, 0)
    );
    transition: opacity 0.18s ease-in-out;
    opacity: ${({ fullLeft }) => (fullLeft ? 0 : 1)};
  }

  &::after {
    ${sideFade};
    right: 0;
    background: linear-gradient(
      270deg,
      hsla(0, 0%, 100%, 0.8),
      hsla(0, 0%, 100%, 0)
    );
    transition: opacity 0.18s ease-in-out;
    opacity: ${({ fullRight }) => (fullRight ? 0 : 1)};
  }

  ${LeftArea} {
    transition: opacity 0.18s ease-in-out;
    opacity: ${({ fullLeft }) => (fullLeft ? 0 : 1)};
    pointer-events: ${({ fullLeft }) => (fullLeft ? "none" : "unset")};
  }

  ${RightArea} {
    transition: opacity 0.18s ease-in-out;
    opacity: ${({ fullRight }) => (fullRight ? 0 : 1)};
    pointer-events: ${({ fullRight }) => (fullRight ? "none" : "unset")};
  }
`

const Button = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #242424;
  width: 50px;
  height: 50px;
  color: white;
  cursor: pointer;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.18s ease-in-out;

  &:hover {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.8);
  }

  &:focus {
    outline: none;
  }
`

const ProjectsShowcase = styled.div`
  width: 100%;
  padding: 40px calc(2 * var(--card-gap)) 80px;
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  &::before,
  &::after {
    content: "";
    flex: 0 0 var(--card-gap);
  }
`

const AllRepositories = styled.div`
  flex: 1;
  min-width: var(--card-width);
  margin: 0 var(--card-gap-half);
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover {
      div {
        background-color: #242424;
        color: #fff;
      }
    }

    div {
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 2px solid #242424;
      border-radius: 50%;
      margin-bottom: 20px;
      transition: all 0.15s ease-in-out;
    }
  }
`

const ProjectSlider = () => {
  const [fullLeft, setFullLeft] = useState(true)
  const [fullRight, setFullRight] = useState(false)

  const sliderRef = useRef(null)

  const data = useStaticQuery(graphql`
    fragment projectImage on File {
      childImageSharp {
        fluid(maxWidth: 344, maxHeight: 220) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    query {
      constroiWood: file(relativePath: { eq: "constroi-wood.png" }) {
        ...projectImage
      }
      personalWebsite: file(relativePath: { eq: "personal-website.png" }) {
        ...projectImage
      }
      apollify: file(relativePath: { eq: "apollify.png" }) {
        ...projectImage
      }
      harpocrates: file(relativePath: { eq: "harpocrates-cli.png" }) {
        ...projectImage
      }
    }
  `)

  const scroll = (backward = false) => () => {
    sliderRef.current.scrollBy({
      top: 0,
      left: (sliderRef.current.offsetWidth / 4) * (backward ? -1 : 1),
      behavior: "smooth",
    })
  }

  const onScroll = () => {
    const scrollLeft = sliderRef.current.scrollLeft
    const width = sliderRef.current.scrollWidth - sliderRef.current.offsetWidth
    const scrollPosition = scrollLeft / width
    const RIGHT_MAX = 0.03
    const LEFT_MAX = 0.97

    if (scrollPosition > RIGHT_MAX && scrollPosition < LEFT_MAX) {
      if (fullLeft) setFullLeft(false)
      if (fullRight) setFullRight(false)
    } else if (scrollPosition <= LEFT_MAX) setFullLeft(true)
    else if (scrollPosition >= RIGHT_MAX) setFullRight(true)
  }

  return (
    <ProjectsWrapper fullRight={fullRight} fullLeft={fullLeft}>
      <LeftArea>
        <div>
          <Button onClick={scroll(true)}>
            <ChevronLeft size={26} />
          </Button>
        </div>
      </LeftArea>
      <ProjectsShowcase ref={sliderRef} onScroll={onScroll}>
        <ProjectCard
          title="ConstroiWood"
          description="Website for the construction company ConstroiWood"
          tech="Next, Netlify, NetlifyCMS"
          url="https://constroiwood.netlify.com/"
          github="https://github.com/JoaoInez/constroi-wood"
        >
          <Img
            fluid={data.constroiWood.childImageSharp.fluid}
            className="img"
          />
        </ProjectCard>
        <ProjectCard
          title="Personal Website"
          description="My personal website"
          tech="Gatsby, Github Pages"
          github="https://github.com/JoaoInez/personal-website"
        >
          <Img
            fluid={data.personalWebsite.childImageSharp.fluid}
            className="img"
          />
        </ProjectCard>
        <ProjectCard
          title="Apollify"
          description="Creates spotify playlists based on the user's selected artists"
          tech="Nuxt, Now.sh"
          url="https://www.apollify.com/"
          github="https://github.com/JoaoInez/apollify"
          googlePlay="https://play.google.com/store/apps/details?id=com.apollify.twa"
        >
          <Img fluid={data.apollify.childImageSharp.fluid} className="img" />
        </ProjectCard>
        <ProjectCard
          title="harpocrates-cli"
          description="Command-line interface to manage secrets and passwords"
          tech="Node.js, Commander"
          url="https://www.npmjs.com/package/harpocrates-cli"
          github="https://github.com/JoaoInez/harpocrates-cli"
        >
          <Img fluid={data.harpocrates.childImageSharp.fluid} className="img" />
        </ProjectCard>
        <AllRepositories>
          <a
            href="https://github.com/JoaoInez?tab=repositories"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <div>
              <ArrowRight size={60} />
            </div>
            <p>See all repositories</p>
          </a>
        </AllRepositories>
      </ProjectsShowcase>
      <RightArea>
        <div>
          <Button onClick={scroll()}>
            <ChevronRight size={26} />
          </Button>
        </div>
      </RightArea>
    </ProjectsWrapper>
  )
}

export default ProjectSlider
