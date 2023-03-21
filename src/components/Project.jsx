import React from "react";
import axios from "axios";
import { useState } from "react";
export default function Project() {
  const [city, setcity] = useState("");
  const [data, setdata] = useState({
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    country: "",
  });
  const handelclick = (e) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=73dc731ba55dd7b5076e0c73e65df03a`
      )
      .then((res) => {
        console.log(res.data);
        setdata({
          description: res.data.weather[0].description,
          temp: res.data.main.temp,
          temp_max: res.data.main.temp_max,
          temp_min: res.data.main.temp_min,
          humidity: res.data.main.humidity,
          country: res.data.sys.country,
        });
      });
  };

  return (
    <>
      ENTER city NAME :
      <input
        type="text"
        name="name"
        value={city}
        onChange={(e) => {
          setcity(e.target.value);
        }}
      />
      <button type="submit" onClick={handelclick}>
        search
      </button>
      <div>
        <h2>
          city<br></br>
          {city}
        </h2>
        <h2>Temparature</h2>
        {data.temp}
        <br></br>
        <h2>MaximumTemparature</h2>
        {data.temp_max}
        <br></br>
        <h2>Minimum Temparature</h2>
        {data.temp_min}
        <h2>Humudity</h2>
        {data.humidity}
        <br></br>
        <h2>Weather Description</h2>
        {data.description}
        <br></br>
        <h2>Country Name</h2>
        {data.country}
      </div>
    </>
  );
}
