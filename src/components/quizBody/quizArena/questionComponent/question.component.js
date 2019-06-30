import React, { Component } from "react";

import "./question.css";

function createMarkup(strn) {
  return { __html: strn };
}
export default class Question extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div dangerouslySetInnerHTML={createMarkup(this.props.question)} />;
  }
}
