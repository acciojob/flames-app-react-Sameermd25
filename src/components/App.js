import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      answer: ""
    };
  }

  calculate = () => {
    const { name1, name2 } = this.state;

    if (name1 === "" || name2 === "") {
      this.setState({ answer: "Please Enter valid input" });
      return;
    }

    const map = {
      0: "Siblings",
      1: "Friends",
      2: "Love",
      3: "Affection",
      4: "Marriage",
      5: "Enemy"
    };

    let a1 = name1.split("");
    let a2 = name2.split("");

    for (let i = 0; i < a1.length; i++) {
      const idx = a2.indexOf(a1[i]);
      if (idx !== -1) {
        a1[i] = "";
        a2[idx] = "";
      }
    }

    const count =
      a1.filter(c => c !== "").length +
      a2.filter(c => c !== "").length;

    this.setState({ answer: map[count % 6] });
  };

  clear = () => {
    this.setState({ name1: "", name2: "", answer: "" });
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
          onClick={this.calculate}
        >
          Calculate Relationship
        </button>

        <button
          name="clear"
          data-testid="clear"
          onClick={this.clear}
        >
          Clear
        </button>

        <h3 data-testid="answer">{this.state.answer}</h3>
      </div>
    );
  }
}

export default App;
