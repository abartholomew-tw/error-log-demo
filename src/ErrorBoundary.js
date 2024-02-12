// ErrorBoundary component for catching and logging errors
import React from 'react';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null};
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true, error };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error("Uncaught error:", error, errorInfo);
      // Optional programmatic alerts can be added here
      alert("An error occurred. Check the console for details. This alert is defined in the Error Context.")
    }
  
    render() {
      if (this.state.hasError) {
        // Render any fallback UI, alert, etc that you want
        return (
          <div>
            <h1>Something went wrong.</h1>
            <p>Check the console for error details. This template is defined in the Error Context.</p>
            <strong>Triggering Error:</strong>
            <pre>
              {this.state.error && this.state.error.toString()}
            </pre>
          </div>
        );
      }
  
      return this.props.children; 
    }
  }