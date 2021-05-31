import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    const [val, setVal] = useState({ years: [], data: [] });

    useEffect( () => {
        async function getData() {
            const response = await axios.get('/api/articles');
            setVal(response.data.data);
        }

        getData();
    }, []);

    const postData = () => {
        axios.post('/api/articles');
    };

    console.log(val);

    return (
        <Box>
            <Typography variant="h5" gutterBottom>Основные социально-экономические показатели</Typography>
            <TableContainer style={{border: '1px solid rgba(224, 224, 224, 1)'}}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Год</TableCell>
                            {val.years.map(year => (
                                <TableCell key={year} align="right">{year}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {val.data.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                {row.data.map((val, i) => (
                                    <TableCell key={i} component="th" scope="row" align="right">
                                        {
                                            val != null 
                                                ? val.result != null
                                                    ? val.result.toFixed(2)
                                                    : val.toFixed(2)
                                                : val
                                        }
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
                    {val.data.map(row => (
                        <TextField key={row.name} margin="normal" label={row.name} />
                    ))}
                    <Box textAlign="right">
                        <Button variant="contained" color="primary" onClick={postData}>Сохранить</Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}

export default Articles;
