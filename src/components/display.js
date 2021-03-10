import react from "react";
import styled from "styled-components";

const Div = styled.div``;
const Loc = styled.h1`
  // background-color: blue;
  // text-align: left;
  font-size: largest;
`;
const Time = styled.p`
  // text-align: left;
  font-size: large;
`;

const currentDate = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const date = `${days[currentDate.getDay()]}, ${[currentDate.getDate()]} ${
  months[currentDate.getMonth()]
} `;
const Display = (props) => {
  const { weth } = props;

  return (
    <Div>
      {/* jhggh */}
      {/* <span>{`The current weather in ${weth.name}, ${weth.sys.country} is ${weth.main.temp} `}</span> */}
      <Loc>
        {weth.name}, {weth.sys.country}
      </Loc>
      <Time>{date}</Time>
      {/* <Main weth={props} /> */}
    </Div>
  );
};
export default Display;
