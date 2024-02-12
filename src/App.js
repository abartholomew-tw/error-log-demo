import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MainComponent from './MainComponent';

// App component that uses ErrorBoundary
function App() {
  return (
    <ErrorBoundary>
      <MainComponent />
    </ErrorBoundary>
  );
}

export default App;