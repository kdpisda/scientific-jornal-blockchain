import React from "react";
import Router from "next-routes";

export default class Fab extends React.Component {
  navigateToAdd() {
    window.location.replace('/add');
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
        <i class="fas fa-plus" />
      </button>
    );
  }
}
