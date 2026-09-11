import React from "react";
import { styled } from "styled-components";
import Game from "../Components/Game";
import { games, PersonalInfo, skills, contactEmail } from "../data";
import { Column } from "../Styles/StyledComponents";

const GamesContainer = styled(Column)`
  gap: 100px;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 40px;
  }
`;

const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: silver;
  opacity: 0.2;
`;

const MainPage: React.FC = () => (
  <GamesContainer>
    {games.map((game, index) => (
      <React.Fragment key={index}>
        <Game game={game} />
        {index !== games.length - 1 && <Seperator />}
      </React.Fragment>
    ))}
    <Seperator />
    <section aria-labelledby="skills-title"><h2 id="skills-title">Skills</h2><p>{skills.join(" · ")}</p></section>
    <section aria-labelledby="contact-title"><h2 id="contact-title">Contact</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px", fontSize: "1.2rem" }}>
        <a href={PersonalInfo.links.itchIO} target="_blank" rel="noreferrer">itch.io</a>
        {PersonalInfo.links.linkedIn ? <a href={PersonalInfo.links.linkedIn}>LinkedIn</a> : <span>LinkedIn — coming soon</span>}
        {contactEmail ? <a href={`mailto:${contactEmail}`}>{contactEmail}</a> : <span>Contact — coming soon</span>}
      </div>
    </section>
  </GamesContainer>
);


export default MainPage;
