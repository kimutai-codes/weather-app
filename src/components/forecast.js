//using the state hook
import react, { useState } from "react";
import styled from "styled-components";
import Display from "./display";
import Main from "./main";
import Dashboard from "./dashboard";
import CityNotFound from "./cityNotFound";

const Span = styled.div`
  // display: grid;
  // grid-template-columns: auto auto;
  width: 50%;
  margin: 0 auto;
`;

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
  // const URL ="api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
  //react state hook
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  //I need to learn about forms and then how apis work
  //also need to refresh on destructuring and the spread operator
  //  //the reason I get frustrated is because I code without understanding and I'm too proud and lazy to search

  const handleChange = (e) => {
    setCity(e.target.value);
    //why is city != e.target.value?
  };

  //const handleSubmit = (e) => {
  //  e.preventDefault();
  //  console.log(" submit:", city);
  //  fetch(
  //    //if https is not used, it returns Uncaught (in promise) SyntaxError: Unexpected token < in JSON at position 0
  //    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`
  //  )
  //    // .then((res) => res.json())
  //    .then((res) => {
  //      //log the response error to the console
  //      if (!res.ok) {
  //        const message = `${res.status}`;
  //        throw new Error(message);
  //      }
  //      return res.json();
  //    })
  //    .then((data) => console.log(data))
  //    .catch((error) => console.log(error));
  //  // setWeather(data);
  //};
  //
  //why does the following work and not the other one
  //I think it's because in the code bellow, we declare variables asum'
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`
    );
    const data = await res.json();
    // console.log(data);
    // setWeather({
    //   data: data,
    // });
    setWeather(data);
    return data;
  }
  console.log(weather);
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* use onChange for the most part and use onSubmit onlwhen actually submitting the form */}
        <Input
          placeholder="search city"
          required
          name="search"
          value={city}
          onChange={handleChange}
        />
        <br />
        <Button type="submit">Get Forecast</Button>
      </form>
      {/* {weather.name !== undefined ? <Display weth={weather} /> : null} */}
      {weather.name !== undefined && city !== "" ? (
        <Span>
          <Display weth={weather} />
          <Main weth={weather} />
          <Dashboard weth={weather} />
        </Span>
      ) : (
        <CityNotFound />
      )}
    </div>
  );
};

export default Forecast;
