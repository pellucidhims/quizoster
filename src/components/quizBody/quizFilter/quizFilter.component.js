import React, { Component } from "react";

import DropDownSelect from "../../../fieldComponents/dropDown/dropDownSelect.component";
import { quizCategories } from "../../../constants/quizCategories";

export default class QuizFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  handleSelect = e => {
    this.setState({
      selectedOption: e
    });
  };

  render() {
    return (
      <div className="filter-main-div">
        <DropDownSelect
          data={quizCategories}
          onCategorySelect={this.handleSelect}
          selected={this.state.selectedOption}
        />
      </div>
    );
  }
}
