import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error, info) {
    // Update state to indicate that an error has occurred
    this.setState({ hasError: true });
    // You can also log the error or send it to an error tracking service
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      // Render an alternative UI when an error occurs
      return <h1>Something went wrong.</h1>;
    }
    // Render the normal component tree
    return this.props.children;
  }
}

export default ErrorBoundary;
