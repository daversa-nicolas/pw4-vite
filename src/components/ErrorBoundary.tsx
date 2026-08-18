import React from 'react';

class ErrorBoundary extends React.Component {



    // USING TO PARCELLISED AN ERROR TO SINGLE COMPONENT
    static getDerivedStateFromError(error: Error) {
        return {error};
    }


    render() {
        return (
            <div>
                <h1>Something went wrong.</h1>
            </div>
        );
    }
}

export default ErrorBoundary;