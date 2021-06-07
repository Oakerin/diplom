import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function Charts() {
    const [val, setVal] = useState([]);

    useEffect( () => {
        async function getData() {
            const response = await axios.get('/api/users');
            setVal(response.data.data);
        }

        getData();
    }, []);

    return (
        <Box>
            <Typography variant="h5" style={{ marginBottom: 32 }}>Отчётные показатели экономики России</Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
                {val.map((v, i) => {
                    const labels = v.x.slice(13);
                    const data = {
                        labels: v.data ? v.data.labels : labels,
                        datasets: [{
                            label: v.title,
                            data: v.y.slice(13),
                            fill: false,
                            borderColor: v.borderColor,
                            tension: 0.1
                        }],
                        ...(v.data ? { datasets: v.data.datasets.map(val => ({ 
                            fill: false,
                            tension: 0.1,
                            ...val 
                        })) } : {})
                    };

                    return (
                        <Box marginBottom="64px">
                            {v.groupName != null && (
                                <Typography variant="h5" gutterBottom>{v.groupName}</Typography>
                            )}
                            <Typography variant="caption" gutterBottom>{v.title}</Typography>
                            <div key={v.title} style={{width: 900 }}>
                                <Line
                                    data={data}
                                    options={{
                                        scales: {
                                            x: {
                                                title: {color: '#6495ED', display: true, text: v.xTitle}
                                            },
                                            y: {
                                                title: {color: '#6495ED', display: true, text: v.yTitle}
                                            }
                                        },
                                        interaction: {
                                            mode: 'index',
                                            intersect: false
                                        },
                                    }}
                                    width={400}
                                    height={150}
                                />
                            </div>
                            
                            <TableContainer component={Paper} style={{ maxHeight: '400px', overflow: 'auto' }}>
                                <Table size="small">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Год</TableCell>
                                        {data.datasets.map(v => (
                                            <TableCell key={v.label}>{v.label}</TableCell>
                                        ))}
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {data.labels.map((label, i) => (
                                            <TableRow key={label}>
                                                <TableCell>{label}</TableCell>
                                                {data.datasets.map(d => (
                                                    <TableCell key={d.data[i]}>{d.data[i]}</TableCell>
                                                ))}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    )
                })}
            </Box>
        </Box>
    );
}

export default Charts;
