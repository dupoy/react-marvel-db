import React, {Component} from "react";
import ErrorIndicator from "../errorIndicator";

export default class ErrorBoundry extends Component {

    state = {
        hasError: false
    };

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        });
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return this.props.children;

    }
}