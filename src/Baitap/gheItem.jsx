import React, { Component } from "react";

class GheItem extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-secondary ghe">
          {this.props.data.SoGhe}
        </button>
      </div>
    );
  }
}

export default GheItem;
