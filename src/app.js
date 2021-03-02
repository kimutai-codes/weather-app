import React from "react";
import styled from "styled-components";
import "./app.css";
import Tabirri from "./tabiri/tabiri";

const App = () => {
  const mguu = styled.footer`
    background-color: grey;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 40px;
  `;
  return (
    <div>
      {/* <input placeholder="Enter your city"></input> */}
      {/* <button style={{ textAlign: "center" }}>Get Forecast</button> */}
      <main>
        <Tabirri />
      </main>
      <footer>
        Page created by <a href="##"> @kimutai</a>
      </footer>
    </div>
  );
};

export default App;
