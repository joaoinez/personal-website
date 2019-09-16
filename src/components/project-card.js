import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Github } from "styled-icons/feather/Github"
import { ExternalLink } from "styled-icons/feather/ExternalLink"

import { IconA } from "../components/ui"

const Card = styled.div`
  flex: 1;
  padding: 40px;
  background-color: #eeeeee;
  width: 75vw;
  max-width: 344px;
  transition: all 0.15s ease-in-out;

  small {
    opacity: 0.8;
  }

  &:hover {
    box-shadow: 0 0 8px 2px rgba(36, 36, 36, 0.2);
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
    &:first-of-type {
      margin-right: 20px;
    }
  }
`

const ProjectCard = ({ title, children, description, tech, url, github }) => (
  <Card>
    <InfoWrapper>
      <h2>{title}</h2>
      {children}
      <Description>{description}</Description>
    </InfoWrapper>
    <p>
      <small>{tech}</small>
    </p>
    <IconsWrapper>
      {url && (
        <IconA href={url} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={20} />
        </IconA>
      )}
      {github && (
        <IconA href={github} target="_blank" rel="noopener noreferrer">
          <Github size={20} />
        </IconA>
      )}
    </IconsWrapper>
  </Card>
)

export default ProjectCard
