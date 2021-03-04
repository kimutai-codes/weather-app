//using the state hook
import react, { useState } from "react";
import styled from "styled-components";

const Forecast = () => {
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
  const Search = styled.form`
    // display: flex;
  `;
  //react state hook
  const [city, setCity] = useState("");

  const handleChange = (e) => {
    //the reason I get frustrated is because I code without understanding and I'm too proud and lazy to search
    e.preventDefault();
    let name = e.target.name;
    let value = e.target.value;
    setCity("e.target.value");
    console.log(value);
  };
  //I need to learn about forms and then how apis work
  //also need to refresh on destructuring and the spread operator

  return (
    <div>
      {/* use onChange for the most part and use onSubmit onlwhen actually submitting the form */}
      <Search>
        <Input
          type="text"
          name="search"
          placeholder="search city"
          onChange={(e) => handleChange(e)}
        ></Input>
        <br />
        <Button type="submit">Get Forecast</Button>
      </Search>
    </div>
  );
};

export default Forecast;
