import React, { Component } from "react";

// ErrorBoundry will only show in Production
class ErrorBoundry extends Component<any, { hasError: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    componentDidCatch(error: any, info: any) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. That is not good</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundry;