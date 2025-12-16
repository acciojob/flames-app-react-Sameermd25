import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      flameResult: ""
    };
  }

  flamesLogic = (n1, n2) => {
    if (n1 === "" || n2 === "") {
      return "Please Enter valid input";
    }

    const flamesArr = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy"
    ];

    let a1 = n1.split("");
    let a2 = n2.split("");

    for (let i = 0; i < a1.length; i++) {
      const index = a2.indexOf(a1[i]);
      if (index !== -1) {
        a1[i] = "";
        a2[index] = "";
      }
    }

    const size =
      a1.filter((c) => c !== "").length +
      a2.filter((c) => c !== "").length;

    return flamesArr[size % 6];
  };

  render() {
    return (
      <div id="main">
        <input
          type="text"
          name="name1"
          data-testid="input1"
          value={this.state.name1}
          onChange={(e) => this.setState({ name1: e.target.value })}
        />

        <input
          type="text"
          name="name2"
          data-testid="input2"
          value={this.state.name2}
          onChange={(e) => this.setState({ name2: e.target.value })}
        />

        <button
          name="calculate_relationship"
          data-testid="calculate_relationship"
          onClick={() =>
            this.setState({
              flameResult: this.flamesLogic(
                this.state.name1,
                this.state.name2
              )
            })
          }
        >
          calculate_relationship
        </button>

        <button
          name="clear"
          data-testid="clear"
          onClick={() =>
            this.setState({ name1: "", name2: "", flameResult: "" })
          }
        >
          clear
        </button>

        <h3 data-testid="answer">{this.state.flameResult}</h3>
      </div>
    );
  }
}

export default App;
