import React from "react";
import { styled } from "styled-components";
import { PersonalInfo } from "../data";
import { Column, Row } from "../Styles/StyledComponents";


const SelfSummaryContainer = styled(Column)`
`;

const TopRow = styled(Row)`
  justify-content: space-between;
`
const Title = styled.div`
  font-size: 3em;
  font-family: "PhoenixGaming", sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Description = styled.p`
  font-size: 2rem;
  max-width: 60vw;
  font-family: "PixelGame", sans-serif;
  margin-left: 10px;
  color: silver;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1rem;
    line-height: 1rem;
  }
`;

const SelfSummary: React.FC = () => {
  return (
    <SelfSummaryContainer>
      <TopRow>
        <Row>
          
          <Title>{PersonalInfo.name}</Title>
        </Row>

      </TopRow>
      <h1 style={{fontSize: "1.5rem", color: "#00ced1", marginBottom: 0}}>{PersonalInfo.role}</h1>
      <Description>{PersonalInfo.introduction}</Description>
    </SelfSummaryContainer>
  );
};

export default SelfSummary;
