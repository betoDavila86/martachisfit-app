import { Line, defaults } from 'react-chartjs-2';
import './styles/Chart.sass';

defaults.global.tooltips.enabled = true

export default function Chart({ weightHistory }) {

    let dates = []
    let weights = []

    weightHistory.forEach(({ modifiedAt, weight }) => {
        dates.push(modifiedAt)
        weights.push(weight)
    })

    return <div className="chart">
        <Line
            data={{
                labels: dates,
                datasets: [
                    {
                        label: 'peso (Kg)',
                        data: weights,
                        backgroundColor: 'rgba(192, 192, 192, 0.4)',
                        borderColor: 'rgba(176, 224, 230, 1)',
                    }
                ],

            }}
            height={160}
            width={250}
            options={{
                defaultFontSize: '18',
                maintainAspectRatio: true,
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: false,
                            }
                        }
                    ]
                },
                legend: {
                    labels: {
                        fontSize: 15
                    }
                }
            }}
        />
    </div>
}