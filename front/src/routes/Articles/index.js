import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Articles() {
    let rows = [
        {
            name: 'Численность населения2) (на конец года), млн. человек',
            data: [143.0]
        },
        {
            name: 'в том числе в возрасте:',
            data: ['']
        },
        {
            name: 'моложе трудоспособного - всего',
            data: [23.5]
        },
        {
            name: 'мужчины',
            data: [12.0]
        },
        {
            name: 'женщины',
            data: [11.5]
        }
    ];

    return (
        <Box>
            <Typography variant="h5" gutterBottom>Основные социально-экономические показатели</Typography>
            <TableContainer style={{border: '1px solid rgba(224, 224, 224, 1)'}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>2011</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                {row.data.map((val, i) => (
                                    <TableCell key={i} component="th" scope="row">
                                        {val}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <form>
                <Box display="flex" flexDirection="column" marginTop="32px">
                    <Typography variant="h5">Добавление социально-экономических показателей</Typography>
                    <TextField margin="normal" label="Год"/>
                    <TextField margin="normal" label="Численность населения"/>
                    <TextField margin="normal" label="моложе трудоспособного - всего"/>
                    <TextField margin="normal" label="мужчины"/>
                    <TextField margin="normal" label="женщины"/>
                    <Box textAlign="right">
                        <Button variant="contained" color="primary">Сохранить</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}

export default Articles;
