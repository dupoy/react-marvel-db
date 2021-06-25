import React from "react";
import {Route, Switch} from "react-router-dom";
import ErrorIndicator from "../errorIndicator";
import {ComicsPage} from "../pages";
import Header from "../header";
import HomePage from "../pages/homePage";


const App = () => {
    return (
        <React.Fragment>
            <Header/>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={HomePage}/>
                    <Route path="/comics/:id?" exact component={ComicsPage}/>
                    <Route component={ErrorIndicator}/>
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default App;

