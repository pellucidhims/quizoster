import React, { Component } from "react";

import { profileMenuOptions } from "../../constants/profileMenuOptions";

import "./appBar.css";

export default class Appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfileMenu: false
    };
  }

  toggleProfileMenu = () => {
    this.setState({
      showProfileMenu: !this.state.showProfileMenu
    });
  };

  renderProfileMenu = () => {
    return (
      <div className="profile-menu-main-div">
        {profileMenuOptions.map(menuItem => {
          return (
            <div key={menuItem.id}>
              <a href={menuItem.link}>{menuItem.title}</a>
              <hr style={{ margin: "0px", padding: "0px" }} />
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="appbar-main-div">
          <div className="appbar-heading-div">
            <h1>QuizOster</h1>
          </div>
          <div />
          <div />
          <div />
          <div />
          <div className="profile-main-div" onClick={this.toggleProfileMenu}>
            <span role="img" aria-label="profile">
              &#128100;
            </span>
            <div style={{ marginTop: "5px" }}>
              {this.state.showProfileMenu && this.renderProfileMenu()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
