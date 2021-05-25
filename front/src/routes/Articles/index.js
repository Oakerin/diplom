import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

function Articles() {
    let rows = [
        {
            name: 'Численность населения2) (на конец года), млн. человек',
            data: [142.8, 142.7, 142.8, 142.9, 143.0]
        },
        {
            name: 'в том числе в возрасте:',
            data: ['','','','','']
        },
        {
            name: 'моложе трудоспособного - всего',
            data: [22.9, 22.9, 22.9, 23.2, 23.5]
        },
        {
            name: 'мужчины',
            data: [11.7, 11.7, 11.8, 11.9, 12.0]
        },
        {
            name: 'женщины',
            data: [11.2, 11.2, 11.3, 11.3, 11.5]
        },
    ];

    return (
        <Box>
            <Typography variant="h5" gutterBottom>Основные социально-экономические показатели</Typography>
            <Box>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>2007</TableCell>
                            <TableCell>2008</TableCell>
                            <TableCell>2009</TableCell>
                            <TableCell>2010</TableCell>
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
            </Box>
        </Box>
    );
}

export default Articles;
