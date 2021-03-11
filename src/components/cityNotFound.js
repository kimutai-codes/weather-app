import styled from "styled-components";

const Span = styled.div`
  margin: 0 auto;
  background-color: rgba(24, 26, 27, 0.2);
  padding: 30px;
  width: 50%;
  border-radius: 5px;
  p {
    font-size: 1.5em;
  }
`;
const CityNotFound = () => {
  return (
    <Span>
      <p>Please enter a valid city name</p>
    </Span>
  );
};

export default CityNotFound;
