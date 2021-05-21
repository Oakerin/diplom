import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function Charts() {
    const [val, setVal] = useState([]);

    useEffect( () => {
        async function getData() {
            const response = await axios.get('/api/users');
            setVal(response.data.data);
        }

        getData();
    }, []);

    console.log(val);

    return (
        <Box>
            <Typography variant="h5" gutterBottom>Отчётные показатели экономики России</Typography>
            <Box display="flex" flexDirection="column" alignItems="center">
                {val.map((v) => {
                    const labels = v.x.slice(6);
                    const data = {
                        labels: labels,
                        datasets: [{
                            label: v.title,
                            data: v.y.slice(6),
                            fill: false,
                            borderColor: v.borderColor,
                            tension: 0.1
                        }]
                    };

                    return (
                        <div key={v.title} style={{width: 900, height: 400}}>
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
                                    }
                                }}
                                width={400}
                                height={150}
                            />
                        </div>
                    )
                })
                }
            </Box>
        </Box>
    );
}

export default Charts;
