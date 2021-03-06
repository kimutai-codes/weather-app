import React from "react";
import styled from "styled-components";
import "./app.css";
import Forecast from "./components/forecast";
const Footer = styled.footer`
  background-color: grey;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
`;

const App = () => {
  return (
    <div>
      <main>
        <h1>WEATHER APP</h1>
        <Forecast />
      </main>
      <Footer>
        Page created by <a href="##"> @kimutai</a>
      </Footer>
    </div>
  );
};

export default App;
