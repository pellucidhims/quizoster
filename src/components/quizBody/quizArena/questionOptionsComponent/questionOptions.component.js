import React, { Component } from "react";

import "./questionOptions.css";

export default class QuestionOptions extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect = idx => e => {
    console.log("Selected Option: ", this.props.questionOptions[idx]);
    this.props.onSelectOption(this.props.questionOptions[idx]);
  };

  render() {
    console.log("Inside questionOptions: this.props ", this.props);
    return (
      <div style={{ marginTop: "5%" }}>
        <ul className="question-options-list-main-div">
          {this.props.questionOptions.map((option, idx) => {
            return (
              <div key={idx}>
                <li onClick={this.handleSelect(idx)}>{option}</li>
                {idx < this.props.questionOptions.length - 1 ? <hr /> : ""}
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}
