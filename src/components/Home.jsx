import React from "react";
import "./Home.css";

function Home(props) {
  return (
    <>
      <section className="home-wrapper">
        <div className="container">
          <div className="top-part">
            <div className="top-left-part">
              <h1>
                <i class="fa-sharp fa-thin fa-location-dot"></i>
                Kolkata <span>(IN)</span>
              </h1>
            </div>
            <div className="top-right-part">
              <h3>
                <i class="fa-solid fa-cloud-sun-rain"></i>
                <span>20</span>
                <sup>°</sup>C
              </h3>
              <h4>Clear Sky</h4>
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
                <input type="text" placeholder="Put City Name" />
                <button type="button">Search</button>
              </div>
            </div>
          </div>
          <div className="bottom-part">
            <div className="item">
              <h4>
                <strong>Humidity</strong>
                <span>95%</span>
              </h4>
            </div>
            <div className="item">
              <h4>
                <strong>Wind Speed</strong>
                <span>3.6</span>
              </h4>
            </div>
            <div className="item">
              <h4>
                <strong>Wind Deg</strong>
                <span>
                  310<sup>°</sup>
                </span>
              </h4>
            </div>
            <div className="item">
              <h4>
                <strong>Temp</strong>
                <span>
                  95<sup>°</sup>C
                </span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
