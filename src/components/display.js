import react from "react";
import styled from "styled-components";

const Display = (props) => {
  const { weth } = props;

  const Loc = styled.h1`
    // background-color: blue;
  `;
  return (
    <div>
      {/* jhggh */}
      {/* <span>{`The current weather in ${weth.name}, ${weth.sys.country} is ${weth.main.temp} `}</span> */}
      <Loc>
        {weth.name}, {weth.sys.country}
      </Loc>
    </div>
  );
};
export default Display;
