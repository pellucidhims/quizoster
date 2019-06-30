import React, { Component } from "react";

import "./dropDownSelect.css";

export default class DropDownSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: "",
      selectedValue: ""
    };
  }

  componentDidMount() {
    this.setState({
      selectedValue: this.props.selected,
      selectOptions: this.props.data
    });
  }

  componentWillReceiveProps() {
    this.setState({
      selectedValue: this.props.selected,
      selectOptions: this.props.data
    });
  }

  handleOnChange = e => {
    this.props.onCategorySelect(e.target.value);
  };

  renderSelectOptions = () => {
    return this.state.selectOptions.map(option => {
      return (
        <option key={option.value} value={option.value}>
          {option.title}
        </option>
      );
    });
  };

  render() {
    if (this.state.selectOptions) {
      return (
        <div className="select-field-main-div">
          <select onChange={this.handleOnChange}>
            {this.renderSelectOptions()}
          </select>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Loading Filter...</h2>
        </div>
      );
    }
  }
}
