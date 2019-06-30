import React, { Component } from "react";

import "./question.css";

export default class Question extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="question-main-div">{`${this.props.question}`}</div>;
  }
}
