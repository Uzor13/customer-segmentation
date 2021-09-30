import React from 'react';
import {Bar} from 'react-chartjs-2';


const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
    plugins: {
        legend: {
            display: true,
            labels: {
                color: 'rgb(255, 99, 132)'
            }
        },
        title: {
            display: true,
            text: 'RFM Single Bar Chart',
            fontSize: '2rem'
        },
    },
    responsive: true,
    maintainAspectRatio: false,
};



const RfmStats = ({recency, frequency, monetary}) => {

    const data = {
        labels: ['Recency', 'Frequency', 'Monetary'],
        datasets: [
            {
                label: 'RFM Score',
                data: [recency, frequency, monetary],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className='chart'>
            <Bar data={data} options={options}/>
        </div>

    );
};

export default RfmStats;
