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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useParams } from "react-router-dom";

function Articles() {
    let { id } = useParams();
    const [form, setForm] = useState({ year: '' });
    const [val, setVal] = useState({ years: [], data: [] });
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        async function getData(id) {
            const response = await axios.get('/api/articles', { params: { id }});
            
            console.log(response);
            setForm({ ...form, ...response.data.data.data.reduce((acc, val, i) => ({ ...acc, [''+i]: '' }), {}) });

            console.log(response.data.data);
            setVal(response.data.data);

            console.log({ ...form, ...response.data.data.data.reduce((acc, val, i) => ({ ...acc, [''+i]: '' }), {}) });
        }

        getData(id);
    }, [id]);

    const postData = async () => {
        setLoading(true);

        console.log(form);

        let formData = Object.keys(form).reduce((acc, key) => {
            if (form[key] && form[key].result != null) {
                return { ...acc };
            }

            return { ...acc, [key]: form[key] ? +form[key] : null };
        }, {})

        formData = { ...formData, id };

        console.log(formData);

        await axios.post('/api/articles', formData);
        setLoading(false);
        const response = await axios.get('/api/articles', { params: { id }});
        setVal(response.data.data);
    };

    const handleFieldChange = (e) => {
        const value = e.target.value;
        console.log(e.target.name, value);

        if (e.target.name === 'year') {
            const index = val.years.findIndex((v) => v === value);
            
            console.log(val.data.reduce((acc, val, i) => ({ ...acc, [''+i]: val.data[index] || '' }), {}));

            console.log(val.data);
            setForm({ ...form, year: value, ...val.data.reduce((acc, val, i) => ({ 
                ...acc, 
                [''+i]: val.data[index] || '' 
            }), {})  });
        } else {
            setForm({ ...form, [e.target.name]: value });
        }

        console.log({ ...form, [e.target.name]: value })
    };

    console.log('val', val);
    console.log('form', form);


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
                                                    ? val.result.error == null 
                                                      ? val.result.toFixed ? val.result.toFixed(2) : val.result
                                                      : null
                                                    : val.toFixed ? val.toFixed(2) : val
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
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">Год</InputLabel>
                        <Select
                            name="year"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={form.year}
                            onChange={handleFieldChange}
                        >
                            <MenuItem value="">--</MenuItem>
                            {[...val.years].map(year => (
                                <MenuItem key={year} value={year}>{year}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    {form.year && val.data.map((row, i) => {
                        if (form[''+i].result != null) {
                            return null;
                        }

                        return(
                            <TextField 
                                type="number"
                                value={form[''+i].result != null ? form[''+i].result : form[''+i]} 
                                name={''+i} 
                                key={row.name} 
                                margin="normal" 
                                label={row.name} 
                                onChange={handleFieldChange} 
                            />
                        )}
                    )}

                    <Box textAlign="right" marginTop="16px">
                        <Button 
                            disabled={loading} 
                            variant="contained" 
                            color="primary" 
                            onClick={postData}

                        >
                            Сохранить {loading && <CircularProgress style={{marginLeft: 8 }} size="24px" />}
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}

export default Articles;
