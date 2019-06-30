import React, { Component } from "react";

import Question from "../questionComponent";
import QuestionOptions from "../questionOptionsComponent";

export default class ContentBox extends Component {
  constructor(props) {
    super(props);
  }

  handleSelectedOption = e => {
    this.props.selectedOption(e);
  };

  render() {
    console.log("this.props: ", this.props);
    return (
      <div className="content-box-main-div">
        <Question question={this.props.questionData.question} />
        <QuestionOptions
          questionOptions={this.props.questionOptions}
          onSelectOption={this.handleSelectedOption}
        />
      </div>
    );
  }
}
