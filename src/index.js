import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import ErrorBoundry from "./components/errorBoundry";
import {MarvelProvider} from "./components/contexts/marvelContext";
import MarvelService from "./services/marvelService";
import store from "./redux/store";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app/app";


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <MarvelProvider value={new MarvelService()}>
                <Router>
                    <App/>
                </Router>
            </MarvelProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
