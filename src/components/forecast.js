//using the state hook
import react, { useState } from "react";
import styled from "styled-components";
const Input = styled.input`
  border: none;
  padding: 6px;
  border-radius: 5px;
  font-weight: bold;
  color: black;
`;
const Button = styled.button`
  display: inline-block;
  margin: 10px;
  background-color: darkcyan;
  border: none;
  border-radius: 5px;
  padding: 5px;
`;

const Forecast = () => {
  const APIKEY = "7e23a3dc74fc86b89fba3917d84b6ebf";
  //react state hook
  const [city, setCity] = useState("");
  //I need to learn about forms and then how apis work
  //also need to refresh on destructuring and the spread operator
  //  //the reason I get frustrated is because I code without understanding and I'm too proud and lazy to search
  const handleChange = (e) => {
    setCity(e.target.value);
    console.log(" change:", city);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" submit:", city);
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* use onChange for the most part and use onSubmit onlwhen actually submitting the form */}
      <Input
        placeholder="search city"
        required
        value={city}
        onChange={handleChange}
      />
      <br />
      <Button>Get Forecast</Button>
    </form>
  );
};

export default Forecast;
