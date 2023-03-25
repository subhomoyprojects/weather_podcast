import React from "react";
import axios from "axios";
import { useState } from "react";
import Home from "./Home";
export default function Project() {
  const [city, setcity] = useState();
  const [data, setdata] = useState({
    description: "",
    icon: "",
    temp: 0,
    wind_speed: 0,
    wind_deg: 0,
    humidity: 0,
    country: "",
    pressure: 0,
  });
  const valuechange = (e) => {
    setcity(e.target.value);
  };
  const handelclick = (e) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=73dc731ba55dd7b5076e0c73e65df03a`
      )
      .then((res) => {
        console.log(res.data);
        setdata({
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
          temp: res.data.main.temp,
          pressure: res.data.main.pressure,
          wind_speed: res.data.wind.speed,
          wind_deg: res.data.wind.deg,
          humidity: res.data.main.humidity,
          country: res.data.sys.country,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Home
        valuechange={valuechange}
        handelclick={handelclick}
        city_name={city}
        country={data.country}
        temp={data.temp}
        icon={data.icon}
        description={data.description}
        humidity={data.humidity}
        wind_speed={data.wind_speed}
        wind_deg={data.wind_deg}
        pressure={data.pressure}
      />
    </>
  );
}
