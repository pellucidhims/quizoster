import React, { Component } from "react";

import DropDownSelect from "../../../fieldComponents/dropDown/dropDownSelect.component";
import { quizCategories } from "../../../constants/quizCategories";

export default class QuizFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: undefined
    };
  }

  componentDidMount() {
    this.setState({
      selectedOption: this.props.value
    });
  }

  componentWillReceiveProps() {
    this.setState({
      selectedOption: this.props.value
    });
  }

  handleSelect = e => {
    this.props.onSelectCategory(e);
  };

  render() {
    if (this.state.selectedOption) {
      return (
        <div className="filter-main-div">
          <DropDownSelect
            data={quizCategories}
            onCategorySelect={this.handleSelect}
            selected={this.state.selectedOption}
          />
        </div>
      );
    } else {
      return <div>Loading category filter...</div>;
    }
  }
}
