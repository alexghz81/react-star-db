import React, {Component} from 'react';
import './error-boundry.css';
import ErrorHandler from "../error-handler/error-handler";

export default class ErrorBoundry extends Component {
  state = {
    hasError: false,
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorHandler />;
    }
    return  this.props.children;
  }
}
