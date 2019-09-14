import React from "react"
import styled from "styled-components"

const GraphRow = styled.div`
  width: 100%;
  background-color: #eeeeee;
  display: flex;
  height: 20px;
`

const SkillLevel = styled.div`
  flex-basis: 100%;
  flex: ${({ val }) => val / 5};
  background-color: #242424;
`
const Empty = styled.div`
  flex-basis: 100%;
  flex: ${({ val }) => (5 - val) / 5};
`

const GraphContainer = styled.div`
  margin-bottom: 20px;

  p {
    margin: 0;
  }
`

const SkillGraph = ({ skill = "", level = 0 }) => (
  <GraphContainer>
    <p>{skill}</p>
    <GraphRow>
      <SkillLevel val={level} />
      <Empty val={level} />
    </GraphRow>
  </GraphContainer>
)

export default SkillGraph
