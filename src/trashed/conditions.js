import React from "react";
import styled from "styled-components";

const Conditions = (props) => {
  const Cond = styled.div`
    // background: cyan;
  `;
  return (
    <Cond className="conditions">
      {props.responseObj.cod === 200 ? (
        <div>
          <p>
            <strong>{props.responseObj.name}</strong>
          </p>
          <p>
            It is currently {Math.round(props.responseObj.main.temp)} degrees
            out with {props.responseObj.weather[0].description}.
          </p>
        </div>
      ) : null}
    </Cond>
  );
};
export default Conditions;
