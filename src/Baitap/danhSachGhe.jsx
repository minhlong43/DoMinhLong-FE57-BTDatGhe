import React, { Component } from "react";
import GheItem from "./gheItem";

class DanhSachGhe extends Component {
  renderDanhSachGhe() {
    const DSGhe = this.props.data.map((item) => {
      return (
        <div className="col-3 mb-2" key={item.id}>
          <GheItem data={item} />
        </div>
      );
    });

    return DSGhe;
  }
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderDanhSachGhe()}</div>
      </div>
    );
  }
}

export default DanhSachGhe;
