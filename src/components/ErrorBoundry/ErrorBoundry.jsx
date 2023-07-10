import React, { useState } from 'react';

function useErrorBoundary() {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState(null);
  const [errorInfo, setErrorInfo] = useState(null);

  function componentDidCatch(error, errorInfo) {
    setHasError(true);
    setError(error);
    setErrorInfo(errorInfo);
  }

  return { hasError, error, errorInfo };
}

function ErrorBoundary({ children }) {
  const { hasError, error, errorInfo } = useErrorBoundary();

  if (hasError) {
    // You can customize the error message or UI here
    return (
      <div>
        <h1>Something went wrong.</h1>
        <p>{error.toString()}</p>
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;
