import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Scenarios from './Scenarios';
import Charts from './Charts';
import Paper from '@material-ui/core/Paper';

function Body() {
    return (
        <Paper style={{width: '100%', padding: 16}}>
            <Switch>
                <Route path="/1">
                    <div>1</div>
                </Route>
                <Route path="/charts">
                    <Charts/>
                </Route>
                <Route path="/scenarios/:scenarioId">
                    <Scenarios/>
                </Route>
                <Route path="/">
                    <Redirect to="/scenarios/list" />
                </Route>
            </Switch>
        </Paper>
    );
}

export default Body;
