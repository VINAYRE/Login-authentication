import React, { Component } from "react";

class Bloger extends Component {
  imageOne = "http://via.placeholder.com/250";

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <img src={this.imageOne} />
              </div>
              <div className="card-body">
                <p>
                  React is a free and open-source front-end JavaScript library
                  for building user interfaces or UI components. It is
                  maintained by Facebook and a community of individual
                  developers and companies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <img src={this.imageOne} />
              </div>
              <div className="card-body">
                <p>
                  React is a free and open-source front-end JavaScript library
                  for building user interfaces or UI components. It is
                  maintained by Facebook and a community of individual
                  developers and companies.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <img src={this.imageOne} />
              </div>
              <div className="card-body">
                <p>
                  React is a free and open-source front-end JavaScript library
                  for building user interfaces or UI components. It is
                  maintained by Facebook and a community of individual
                  developers and companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bloger;