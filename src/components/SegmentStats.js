import React from 'react';
import {Bar} from "react-chartjs-2";

const options = {
    indexAxis: 'y',
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
        bar: {
            borderWidth: 2,
        },
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'right',
        },
        title: {
            display: true,
            text: 'Segment Stats',
        },
    },
};

const SegmentStats = ({segment}) => {
    const data = {
        labels: ['Platinum', 'Gold', 'Silver', 'Bronze', 'Bad'],
        datasets: [
            {
                label: 'No of customers per segment',
                data: [4, 8, 3, 5, 6],
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    return (
        <div className="doughnut">
            <Bar data={data} options={options}/>
        </div>
    );
};

export default SegmentStats;
