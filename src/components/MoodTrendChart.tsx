import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function MoodTrendChart() {
  const data = {
    labels: ['Mar 31', 'Apr 02', 'Apr 04', 'Apr 06', 'Apr 07', 'Apr 09', 'Apr 11', 'Apr 12', 'Apr 13', 'Apr 15'],
    datasets: [
      {
        label: '0-2 hours',
        data: [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#8EE7A0',
        borderRadius: 12,
      },
      {
        label: '2-4 hours',
        data: [1, 1, 0, 1, 0, 0, 0, 1, 0, 0],
        backgroundColor: '#FFD3B2',
        borderRadius: 12,
      },
      {
        label: '4-6 hours',
        data: [2, 1, 2, 2, 1, 2, 2, 1, 2, 1],
        backgroundColor: '#8EC6FF',
        borderRadius: 12,
      },
      {
        label: '6-9 hours',
        data: [0, 2, 1, 1, 2, 1, 1, 2, 1, 3],
        backgroundColor: '#D9B5FF',
        borderRadius: 12,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          usePointStyle: true,
          padding: 15,
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Mood and sleep trends',
        font: {
          size: 18,
          weight: 'bold' as const,
        },
        color: '#2F2D86',
        padding: {
          bottom: 20,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          color: '#E8EAF6',
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  }

  return (
    <div className="card animate-fade-in">
      <Bar 
        data={data} 
        options={options}
        aria-label="Mood and sleep trends chart"
        role="img"
      />
    </div>
  )
}

export default MoodTrendChart


