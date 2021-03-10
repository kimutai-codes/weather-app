// import react from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgba(24, 26, 27, 0.2);
  border-radius: 5px;
  padding: 10px;
`;

const Temp = styled.h1`
  // text-align: right;
  // font-size: larger;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  div {
    font-weight: bold;
  }
`;

const Main = (props) => {
  const { weth } = props;

  const weatherIcon =
    "http://openweathermap.org/img/wn/" + `${weth.weather[0].icon}` + ".png";

  return (
    <Div>
      <Temp>
        {weth.main.temp} C<sup>o</sup>
      </Temp>
      <Desc>
        <img src={weatherIcon} alt="weatherIcon" />
        <div>{weth.weather[0].description}</div>
      </Desc>
    </Div>
  );
};

export default Main;
