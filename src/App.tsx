import React from "react";
import { HashRouter as Router } from "react-router-dom";
import { styled } from "styled-components";
import MainPage from "./Pages/MainPage";

import SelfSummary from "./Components/SelfSummary";

import { Column } from "./Styles/StyledComponents";

const AppContainer = styled(Column)`
  min-height: 90vh;
  padding: 60px;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 0;
    padding: 30px 10px;
  }
`;

const App: React.FC = () => {
  window.addEventListener("scroll", function () {
    document.body.style.backgroundPosition = `${window.scrollY * 0.05}px ${window.scrollY * 0.8}px`;
  });

  return (
    <Router>
      <AppContainer>
        <SelfSummary />

        <MainPage />
      </AppContainer>
    </Router>
  );
};

export default App;
