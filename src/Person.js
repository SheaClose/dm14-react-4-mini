import React, { Component } from "react";

export default class Person extends Component {
  render() {
    return <h1>{this.props.match.params.name} is the coolest!!</h1>;
  }
}
