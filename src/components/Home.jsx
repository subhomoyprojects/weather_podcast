import React from "react";
import "./Home.css";

function Home(props) {
  const url = `https://openweathermap.org/img/wn/${props.icon}@4x.png`;
  return (
    <>
      <section className="home-wrapper">
        <div className="container">
          <div className="top-part">
            <div className="top-left-part">
              <h1>
                <i class="fa-sharp fa-thin fa-location-dot"></i>
                {props.city_name} <span>({props.country})</span>
              </h1>
            </div>
            <div className="top-right-part">
              <h3>
                {/* <i class="fa-solid fa-cloud-sun-rain"></i> */}
                <span className="img-wrap">
                  <img src={url} alt="" />
                </span>
                <span>{props.temp}</span>
                <sup>°</sup>C
              </h3>
              <h4>{props.description}</h4>
            </div>
          </div>
          <div className="location-choose">
            <div className="select-location">
              <h2>Select a Location</h2>
              {/* <select>
                <option value="">Choose a Location</option>
                <option value="austin">Austin</option>
              </select> */}
              <div className="input-holder">
                <input
                  type="text"
                  placeholder="Put City Name"
                  onChange={props.valuechange}
                />
                <button onClick={props.handelclick} type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="bottom-part">
            <div className="item">
              <h4>
                <strong>Humidity</strong>
                <span>{props.humidity}%</span>
              </h4>
            </div>
            <div className="item">
              <h4>
                <strong>Wind Speed</strong>
                <span>{props.wind_speed} km/h</span>
              </h4>
            </div>
            <div className="item">
              <h4>
                <strong>Wind Deg</strong>
                <span>
                  {props.wind_deg}
                  <sup>°</sup>
                </span>
              </h4>
            </div>
            <div className="item">
              <h4>
                <strong>Pressure</strong>
                <span>{props.pressure} HPA</span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
