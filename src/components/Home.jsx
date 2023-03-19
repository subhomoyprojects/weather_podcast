import React from "react";
import "./Home.css";

function Home(props) {
  return (
    <>
      <section className="home-wrapper">
        <div className="container">
          <div className="location-choose">
            <div className="select-location">
              <h2>Select a Location</h2>
              <select>
                <option value="">Choose a Location</option>
                <option value="austin">Austin</option>
              </select>
            </div>
          </div>
          <div className="bottom-part"></div>
        </div>
      </section>
    </>
  );
}

export default Home;
