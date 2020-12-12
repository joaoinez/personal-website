import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Github } from "styled-icons/feather/Github"
import { ExternalLink } from "styled-icons/feather/ExternalLink"
import { GooglePlay } from "styled-icons/fa-brands/GooglePlay"

import { IconA, anchor } from "../components/ui"

const Card = styled.div`
  flex-basis: var(--card-width);
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: var(--card-width);
  transition: all 0.15s ease-in-out;
  scroll-snap-align: center;
  margin: 0 var(--card-gap-half);
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.03), 0 7px 5px rgba(0, 0, 0, 0.05),
    0 13px 10px rgba(0, 0, 0, 0.06), 0 22px 18px rgba(0, 0, 0, 0.07),
    0 42px 33px rgba(0, 0, 0, 0.09), 0 100px 80px rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  overflow: hidden;

  small {
    opacity: 0.8;
  }

  .title {
    display: flex;
    z-index: 1;
    position: relative;

    a {
      text-decoration: none;
      margin-bottom: 1.45rem;
    }

    h2 {
      ${anchor};
      white-space: nowrap;
      margin-bottom: 0;
    }
  }

  .image-wrapper {
    overflow: hidden;

    &:hover .img,
    &:focus .img {
      transform: scale(1.1);
    }

    .img {
      transition: all 0.15s ease-in-out;
    }
  }
`

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const InfoWrapper = styled.div`
  flex: 1;
  padding: 20px 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const IconWrapper = styled.div`
  background-color: #eeeeee;
  padding: 10px 20px 10px;

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
    <a
      href={url || googlePlay || github || "#"}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="image-wrapper"
    >
      {children}
    </a>
    <CardContent>
      <InfoWrapper>
        <div>
          <div className="title">
            <a
              href={url || github || "#"}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <h2>{title}</h2>
            </a>
          </div>
          <p>{description}</p>
        </div>
        <p>
          <small>{tech}</small>
        </p>
      </InfoWrapper>
      <IconWrapper>
        {url && (
          <IconA href={url} target="_blank" rel="noopener noreferrer nofollow">
            <ExternalLink size={20} />
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
        {github && (
          <IconA
            href={github}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Github size={20} />
          </IconA>
        )}
      </IconWrapper>
    </CardContent>
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
