import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught in error boundary: ", error, info);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <h2>
          There was an error with this listing.{" "}
          <Link to="/"> Click here to go back to home page</Link>
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
