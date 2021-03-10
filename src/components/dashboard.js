// import react from "react";
import styled from "styled-components";

const Div = styled.div`
  // grid-column-start: 2;
  // grid-column-end: 3;
  // grid-row-start: 1;
  // grid-row-end: 3;
  // width: 80%;
`;
const DashboardWrapper = styled.ul`
  background-color: rgba(24, 26, 27, 0.2);
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  list-style-type: none;
  li {
    border-radius: 5px;
    margin: 2px;
    padding: 5px 10px;
  }
`;

const Dashboard = (props) => {
  const { weth } = props;
  return (
    <Div>
      <DashboardWrapper>
        <li>
          {weth.main.humidity} <p>Humidity</p>
        </li>
        <li>
          {weth.main.pressure} <p>Pressure</p>
        </li>
        <li>
          {weth.wind.speed}mph <p>Wind</p>
        </li>
        <li>
          {weth.sys.sunrise} <p>Sunrise</p>
        </li>
        <li>
          {weth.sys.sunset} <p>Sunset</p>
        </li>
        <li>
          {weth.clouds.all} % <p>Clouds</p>
        </li>
      </DashboardWrapper>
    </Div>
  );
};
export default Dashboard;
