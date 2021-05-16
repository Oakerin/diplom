import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function App() {
    const [val, setVal] = useState([]);

    useEffect(async () => {
        const response = await axios.get('/api/users');
        setVal(response.data.data);
    }, []);

    console.log(val);

    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
        </div>
    );
}

export default App;
