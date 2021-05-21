import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Body from './routes/Body';
import SideBar from './routes/SideBar';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
    const theme = createMuiTheme();

    return (
        <ThemeProvider theme={theme}>
            <div>
                <CssBaseline/>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="body1">ДИСПЕТЧЕР МОДЕЛИ Р1-4-0</Typography>
                    </Toolbar>
                </AppBar>

                <Container maxWidth="lg" style={{ marginTop: 16 }}>
                    <Box display="flex">
                        <Router>
                            <SideBar/>
                            <Body/>
                        </Router>
                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
