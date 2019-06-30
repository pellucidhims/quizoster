import React, { Component } from "react";

import Question from "../questionComponent";
import QuestionOptions from "../questionOptionsComponent";

export default class ContentBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-box-main-div">
        <Question question={this.props.question} />
        <QuestionOptions questionOptions={this.props.questionOptions} />
      </div>
    );
  }
}
