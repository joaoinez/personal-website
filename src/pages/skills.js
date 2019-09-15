import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Section, article, H } from "../components/ui"
import SkillGraph from "../components/skill-graph"

const TechnicalSkills = styled.article`
  ${article};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  margin-top: 40px;
  width: 100%;
`

const SkillText = styled.div`
  grid-row: span ${({ span = 1 }) => span};
  justify-self: center;

  h3 {
    top: 80px;
    position: sticky;
  }
`

const Divider = styled.hr`
  margin-top: 20px;
  margin-bottom: 40px;
  height: 1px;
  background-color: #242424;
  grid-column: span 2;
`

const Skills = () => (
  <Layout>
    <SEO title="Skills" />
    <Section>
      <TechnicalSkills>
        <H>Technical Skills</H>
        <SkillsGrid>
          <SkillText span={7}>
            <h3>Programming Languages</h3>
          </SkillText>
          <SkillGraph skill="HTML" level={4} />
          <SkillGraph skill="CSS, SCSS" level={4} />
          <SkillGraph skill="Javascript (ES5+)" level={4} />
          <SkillGraph skill="Python" level={3} />
          <SkillGraph skill="C#" level={3} />
          <SkillGraph skill="Java" level={2} />
          <SkillGraph skill="SQL" level={3} />
          <Divider />
          <SkillText span={9}>
            <h3>Tools and Technologies</h3>
          </SkillText>
          <SkillGraph skill="React (Next, Gatsby)" level={4} />
          <SkillGraph skill="Angular" level={3} />
          <SkillGraph skill="Vue" level={2} />
          <SkillGraph skill="NodeJs" level={4} />
          <SkillGraph skill="Express" level={4} />
          <SkillGraph skill="Flask" level={3} />
          <SkillGraph skill="Ruby on Rails" level={2} />
          <SkillGraph skill="GraphQL" level={4} />
          <SkillGraph skill="React Native" level={3} />
          <Divider />
          <SkillText span={9}>
            <h3>Misc.</h3>
          </SkillText>
          <SkillGraph skill="Git" level={4} />
          <SkillGraph skill="UNIX command line" level={3} />
          <SkillGraph skill="Netlify" level={4} />
          <SkillGraph skill="Github" level={4} />
          <SkillGraph skill="Unity" level={3} />
          <SkillGraph skill="Unreal Engine" level={3} />
          <SkillGraph skill="Unit Testing" level={4} />
          <SkillGraph skill="Photoshop" level={2} />
          <SkillGraph skill="Sketch" level={2} />
        </SkillsGrid>
      </TechnicalSkills>
    </Section>
  </Layout>
)

export default Skills
