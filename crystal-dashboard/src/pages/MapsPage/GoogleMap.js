import Map from "./Map";

import React, { Component } from "react";
import axios from 'axios';
export default class GoogleMap extends Component {

  state = {
    data: []
  }


  componentDidMount() {

    const data = [];
    axios.get("http://localhost:3001/api/cars-all").then(
      response => {
        response.data.forEach(car => {
          data.push(car);
        });
        this.setState({ data: data });
        console.log(this.state)
      },
      error => {
        console.error(error);
      }
    );
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="header">
              <h4>Google Map</h4>
            </div>
            <div className="content">
              <div
                style={{
                  width: "100%",
                  height: "500px",
                  boxSizing: "border-box"
                }}
              >
                <Map
                  location={{ latitude: 44.3230764, longitude: 23.7366244 }}
                  carList={this.state.data}
                  containerElement={
                    <div style={{ width: "100%", height: "100%" }} />
                  }
                  mapElement={
                    <div style={{ height: `100%`, height: "100%" }} />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
