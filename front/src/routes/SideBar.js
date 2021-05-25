import React from 'react';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Link } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

const routes = [
    {
        name: 'Текстовое описание модели',
        to: function () {
            return {pathname: '/model'}
        }
    },
    {
        name: 'Отчётные показатели экономики России',
        to: function () {
            return {pathname: '/charts'}
        }
    },
    {
        name: 'Настройка модели',
        to: function () {
            return {pathname: ''}
        }
    },
    {
        name: 'Фундаментальные характеристики экономики',
        to: function () {
            return {pathname: ''}
        }
    },
    {
        name: 'Архив сценариев исходных данных опорной траектории',
        to: function () {
            return {pathname: '/scenarios/index'}
        }
    },
    {
        name: 'Архив сценариев исходных данных возмущённой траектории',
        to: function () {
            return {pathname: ''}
        }
    },
    {
        name: 'Архив опорных траекторий',
        to: function () {
            return {pathname: ''}
        }
    },
    {
        name: 'Архив возмущённых траекторий',
        to: function () {
            return {pathname: ''}
        }
    },
    {
        name: 'Контроль счёта',
        to: function () {
            return {pathname: ''}
        }
    },
    {
        name: 'Архив разности опорных и возмущённых траекторий',
        to: function () {
            return {pathname: ''}
        }
    },
    {
        name: 'Архив текстовых отчётов',
        to: function () {
            return {pathname: ''}
        }
    }
];

function SideBar() {
    return (
        <Box minWidth={300} width={300} paddingRight={8}>
            <List component="nav" dense>
                {routes.map(route => {
                    let to = route.to();
                    console.log(to);

                    return (
                        <ListItem
                            key={route.name}
                            button
                            component={Link}
                            to={to}
                            disabled={!to.pathname}
                        >
                            <ListItemText primary={route.name}/>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    );
}

export default SideBar;
