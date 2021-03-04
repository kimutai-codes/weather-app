import React from "react";
import styled from "styled-components";
import "./app.css";
import Forecast from "./components/forecast";
const App = () => {
  const Mguu = styled.footer`
    background-color: grey;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
  `;
  return (
    <div>
      <main>
        <h1>WEATHER APP</h1>
        <Forecast />
      </main>
      <Mguu>
        Page created by <a href="##"> @kimutai</a>
      </Mguu>
    </div>
  );
};

export default App;
