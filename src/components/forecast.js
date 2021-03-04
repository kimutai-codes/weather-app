import react from "react";
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
  const Search = styled.div`
    // display: flex;
  `;
  return (
    <div>
      <Search>
        <Input type="text" placeholder="search"></Input>
        <Button type="submit">Get Forecast</Button>
      </Search>
    </div>
  );
};

export default Forecast;
