import React, { Component } from "react";

import "./questionOptions.css";

export default class QuestionOptions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul className="question-options-list-main-div">
          {this.props.questionOptions.map((option, idx) => {
            return <li key={idx}>{option.value}</li>;
          })}
        </ul>
      </div>
    );
  }
}
