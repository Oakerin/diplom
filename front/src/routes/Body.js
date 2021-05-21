import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import Scenarios from './Scenarios';
import Charts from './Charts';
import Paper from '@material-ui/core/Paper';

function Body() {
    const location = useLocation();
    console.log(location);

    return (
        <Paper style={{width: '100%', padding: 16}}>
            <Switch>
                <Route path="/1">
                    <div>1</div>
                </Route>
                <Route path="/charts">
                    <Charts/>
                </Route>
                <Route path="/scenarios">
                    <Scenarios/>
                </Route>
                <Route path="/">
                    <div>3</div>
                </Route>
            </Switch>
        </Paper>
    );
}

export default Body;
