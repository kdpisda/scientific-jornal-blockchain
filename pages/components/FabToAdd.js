import React from "react";

export default class Fab extends React.Component {
  navigateToAdd() {
    window.location.replace("/add");
  }

  render() {
    return (
      <button
        className="fab fab_main_btn btn-primary"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Add a new resource"
        onClick={this.navigateToAdd}
      >
        <i className="fas fa-plus" />
      </button>
    );
  }
}
