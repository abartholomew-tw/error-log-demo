import React from 'react';

export default class MainComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { throwErr: false, error: null };
    }
  
    handleTPLError = () => {
      // Example to simulate an error
      this.setState({ throwErr: true });
    }
  
    handleLogicError = () => {
      try {
        // Simulate an error
        throw new Error('EVENT_ERROR_EXAMPLE');
      } catch (error) {
        console.error(error);
        // Trickle the error up to the error boundary
        this.setState({ error, throwErr: true});
      }
    }
  
    handleInfoCall = () => {
      // Example to simulate an error
      console.info("INFO_LOG_INITIATED", { data: "some data" });
    }
  
    handleWarnCall = () => {
      // Example to simulate an error
      console.warn("WARNING_LOG_INITIATED", { data: "some data" });
    }
  
    handleSoftError = () => {
      // Example to simulate an error log
      console.error("SOFT_ERROR_INITIATED", { data: "some data" });
    }
  
  
    render() {
      if (this.state.throwErr) {
        if(this.state.error) {
          throw this.state.error;
        }
        throw new Error('STATE_CHANGE_ERROR_EXAMPLE');
      }
      return (
        <div>
          <h1>Test Actions</h1>
          <br /><button onClick={this.handleInfoCall}>Info Log</button> - Logs an info error to the console
          <br /><button onClick={this.handleWarnCall}>Warn Log</button> - Logs a warning error to the console
          <br /><button onClick={this.handleSoftError}>Soft Error</button> - Logs a soft error to the console (no error boundary catch)
          <br /><button onClick={this.handleTPLError}>Throw Template Error</button> - Throws an error in the renderer to test error boundary catch using a state change
          <br /><button onClick={this.handleLogicError}>Throw Event Error</button> - Throws an error in the click event, and catches it to demonstrate error handling in the event structure
        </div>
      );
    }
  }