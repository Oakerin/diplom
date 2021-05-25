import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Scenarios from './Scenarios';
import Charts from './Charts';
import Paper from '@material-ui/core/Paper';
import Articles from './Articles';
import Model from './Model';

function Body() {
    return (
        <Paper style={{width: '100%', padding: 16}}>
            <Switch>
                <Route path="/charts">
                    <Charts/>
                </Route>
                <Route path="/model">
                    <Model />
                </Route>
                <Route exact path="/scenarios/article/:id">
                    <Articles />
                </Route>
                <Route path="/scenarios/:scenarioId">
                    <Scenarios/>
                </Route>
                <Route path="/">
                    <Redirect to="/model" />
                </Route>
            </Switch>
        </Paper>
    );
}

export default Body;
