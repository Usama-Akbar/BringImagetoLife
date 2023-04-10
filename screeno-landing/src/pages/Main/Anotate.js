import React, { Component } from "react";
import Annotation from "react-image-annotation";
export default class Anotate extends Component {
  state = {
    annotations: [],
    annotation: {},
  };

  onChange = (annotation) => {
    this.setState({ annotation });
  };

  onSubmit = (annotation) => {
    const { geometry, data } = annotation;

    this.setState({
      annotation: {},
      annotations: this.state.annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random(),
        },
      }),
    });
  };

  render() {
    return (
      <div>
        {this.props.image === "" ? null : (
          <Annotation
            src={this.props.image}
            alt="Image"
            annotations={this.state.annotations}
            type={this.state.type}
            value={this.state.annotation}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            allowTouch
          />
        )}
      </div>
    );
  }
}
