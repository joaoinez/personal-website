import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Github } from "styled-icons/feather/Github"
import { ExternalLink } from "styled-icons/feather/ExternalLink"
import { GooglePlay } from "styled-icons/fa-brands/GooglePlay"

import { IconA } from "../components/ui"

const Card = styled.div`
  flex: 1;
  padding: 40px;
  background-color: #eeeeee;
  width: 75vw;
  max-width: 344px;
  transition: all 0.15s ease-in-out;
  scroll-snap-align: center;

  &:hover {
    box-shadow: 0 0 8px 2px rgba(36, 36, 36, 0.2);
  }

  small {
    opacity: 0.8;
  }

  h2 {
    white-space: nowrap;
  }
`

const InfoWrapper = styled.div`
  height: 300px;
  margin-bottom: 10px;
`

const Description = styled.p`
  margin-top: 20px;
`

const IconsWrapper = styled.div`
  ${IconA} {
    margin-right: 20px;

    &:last-of-type {
      margin-right: unset;
    }
  }
`

const ProjectCard = ({
  title,
  children,
  description,
  tech,
  url,
  github,
  googlePlay,
}) => (
  <Card>
    <InfoWrapper>
      <h2>{title}</h2>
      <a
        href={url || github || "#"}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        {children}
      </a>
      <Description>{description}</Description>
    </InfoWrapper>
    <p>
      <small>{tech}</small>
    </p>
    <IconsWrapper>
      {url && (
        <IconA href={url} target="_blank" rel="noopener noreferrer nofollow">
          <ExternalLink size={20} />
        </IconA>
      )}
      {github && (
        <IconA href={github} target="_blank" rel="noopener noreferrer nofollow">
          <Github size={20} />
        </IconA>
      )}
      {googlePlay && (
        <IconA
          href={googlePlay}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <GooglePlay size={16} />
        </IconA>
      )}
    </IconsWrapper>
  </Card>
)

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  url: PropTypes.string,
  github: PropTypes.string.isRequired,
  googlePlay: PropTypes.string,
}

export default ProjectCard
