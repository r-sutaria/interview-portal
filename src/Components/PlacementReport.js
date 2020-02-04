import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

export default class PlacementReport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: {
                responsive: true,
                legend: {
                    labels: {
                        fontStyle: 'none',
                        fontColor: 'black',
                        maintainAspectRatio: true
                    }
                }
            }
        }
    }

    renderChart = data => {
        return {
            labels: ['Amazon', 'Samsung', 'Microsoft', 'Media.net', 'Deutsche Bank', 'Morgan Stanley'],
            datasets: [{
                label: '# of Students Placed',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        };
    };

    render() {
        const { chartData } = this.props;
        return (
            <div
                className="container"
            >
                <Pie
                    type={'pie'}
                    data={this.renderChart(chartData)}
                    options={this.state.options}
                    width={200}
                    height={50}
                />
            </div>
        );
    }
}
