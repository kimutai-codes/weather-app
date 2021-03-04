import React, { useState } from "react";
import styled from "styled-components";
import Conditions from "../conditions/conditions";

const Tabirri = () => {
  let [responseObj, setResponseObj] = useState({});
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("metric");
  const uriEncodedCity = encodeURIComponent(city);
  function getForecast(e) {
    e.preventDefault();
    //fetch function goes here
    fetch(
      // "https://community-open-weather-map.p.rapidapi.com/weather?q=Seattle",
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "d642fcabb6msh3060b7220023c08p1bb896jsna2628225b2bc",
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        },
      }
    )
      //.then((response) => {
      //console.log(response);
      //})
      .then((respponse) => respponse.json())
      .then((response) => {
        setResponseObj(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  const Bts = styled.div`
    padding: 5px;
  `;
  const Subm = styled.button`
    padding: 4px;
    // border: 1px solid red;
    background: darkcyan;
    color: white;
    font-weight: bold;
    border-style: none;
    border-radius: 5px;
  `;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Find current Weather conditions</h1>
      {/* <div>{JSON.stringify(responseObj)}</div> */}
      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Bts>
          <label>
            <input
              type="radio"
              name="units"
              checked={unit === "metric"}
              value="metric"
              onChange={(e) => setUnit(e.target.value)}
            />
            Fahrenheit
          </label>

          <label>
            <input
              type="radio"
              name="units"
              checked={unit === "metric"}
              value="metric"
              onChange={(e) => setUnit(e.target.value)}
            />
            Celcius
          </label>
        </Bts>

        <Subm type="submit">Get Forecast</Subm>
      </form>
      <Conditions responseObj={responseObj} />
    </div>
  );
};

export default Tabirri;
