import React from "react";
import axios from "axios"; // Used to get request from a certain API

import "./App.css";
class App extends React.Component {
  /* State is like a global object that contains all the most
   important thing when it comes to the specific component */

  state = { advice: "" };
  // Every component goes through a lifecycle
  componentDidMount() {
    // Lifecycle method

    this.fetchAdvice(); //Call the function
  }

  fetchAdvice = () => {
    // A method means that it belongs to  a class

    axios
      .get("https://api.adviceslip.com/advice")
      .then((data) => {
        const { advice } = data.data.slip;
        this.setState({ advice }); // If it has the same name eg, advice. get rid of second one
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice} </h1>

          <button className="button" onClick={this.fetchAdvice}>
            <span>Give me advice!</span>
          </button>
        </div>
      </div>
    );
  }
}
export default App;
