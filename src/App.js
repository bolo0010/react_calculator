import React from "react";
import Screen from "./Screen";
import Keyboard from "./Keyboard";
import "./css/App.css";

class App extends React.Component {
  state = {
    isEmpty: true,
    value: "",
    newValue: "",
    flag: false,
    fun: "",
    score: ""
  };

  handleClick = e => {
    const { flag, fun, score } = this.state;

    if (score) {
      this.setState({
        score: ""
      });
    }
    if (!isNaN(Number(e.target.textContent))) {
      const textContent = Number(e.target.textContent);
      if (this.state.value.length < 15) {
        if (flag) {
          let newValue = this.state.newValue;
          if (newValue[0] === "0" && newValue[1] !== ".") {
            newValue = newValue.slice(0, 0);
          }
          newValue += textContent;
          this.setState({
            newValue,
            isEmpty: false
          });
        } else {
          let value = this.state.value;
          if (value[0] === "0" && value[1] !== ".") {
            value = value.slice(0, 0);
          }
          value += textContent;
          this.setState({
            value,
            isEmpty: false
          });
        }
      }
    } else {
      if (e.target.textContent === "CE") {
        this.setState({
          value: "",
          newValue: "",
          flag: false,
          fun: "",
          score: "",
          isEmpty: true
        });
      } else if (e.target.textContent === "<") {
        if (flag) {
          let newValue = this.state.newValue;
          if (newValue.length < 2) {
            this.setState({
              isEmpty: true
            });
          }
          if (newValue[0] === "-" && newValue.length < 3) {
            this.setState({
              isEmpty: true
            });
            newValue = newValue.slice(0, 1);
          }
          newValue = newValue.slice(0, -1);
          this.setState({
            newValue
          });
        } else {
          let value = this.state.value;
          if (value.length < 2) {
            this.setState({
              isEmpty: true
            });
          }
          if (value[0] === "-" && value.length < 3) {
            this.setState({
              isEmpty: true
            });
            value = value.slice(0, 1);
          }
          value = value.slice(0, -1);
          this.setState({
            value
          });
        }
      } else if (
        e.target.textContent === "/" ||
        e.target.textContent === "+" ||
        e.target.textContent === "-" ||
        e.target.textContent === "X"
      ) {
        if (!this.state.value || !this.state.newValue) {
          this.setState({
            isEmpty: true
          });
        }
        this.setState({
          flag: true,
          fun: e.target.textContent
        });
      } else if (e.target.textContent === "=") {
        if (score || !fun) {
          this.setState({
            isEmpty: true
          });
        }
        let newScore = "";
        let value = this.state.value;
        let newValue = this.state.newValue;
        if (this.state.fun === "/") {
          if (newValue === "0" || newValue === "") {
            alert("Nie dziel przez 0!");
            return;
          }
          newScore = value / newValue;
        } else if (fun === "+") {
          newScore = Number(value) + Number(newValue);
        } else if (fun === "-") {
          newScore = value - newValue;
        } else if (fun === "X") {
          newScore = value * newValue;
        }
        this.setState({
          value: "",
          newValue: "",
          flag: false,
          fun: "",
          score: newScore
        });
      } else if (e.target.textContent === ".") {
        if (flag) {
          let newValue = this.state.newValue;
          if (!newValue) {
            newValue += "0";
          }
          if (newValue.includes(".")) return;
          newValue += e.target.textContent;
          this.setState({
            newValue,
            isEmpty: false
          });
        } else {
          let value = this.state.value;
          if (!value) {
            value += "0";
          }
          if (value.includes(".")) return;
          value += e.target.textContent;
          this.setState({
            value,
            isEmpty: false
          });
        }
      } else if (e.target.textContent === "+/-") {
        if (flag) {
          let newValue = this.state.newValue;
          if (newValue === "0" || newValue === "") return;
          newValue = String(-newValue);
          this.setState({
            newValue
          });
        } else {
          let value = this.state.value;
          if (value === "0" || value === "") return;
          value = String(-value);
          this.setState({
            value
          });
        }
      }
    }
  };

  render() {
    return (
      <>
        <Screen
          value={this.state.value}
          newValue={this.state.newValue}
          flag={this.state.flag}
          score={this.state.score}
          isEmpty={this.state.isEmpty}
        />
        <Keyboard click={this.handleClick} />
      </>
    );
  }
}

export default App;
