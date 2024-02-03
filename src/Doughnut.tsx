import { Doughnut } from 'react-chartjs-2'

import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js'

Chart.register(
  ArcElement,
  Tooltip,
  Legend
)

const DoughnutChart = () => {
  const data = {
    labels: ['Red', 'Blue'],
    datasets: [
      {
        label: 'Shop 1',
        data: [3,6],
        backgroundColor: ['red', 'blue'],
        borderColor: ['black', 'black'],
        cutout: '90%'
      }
    ],
  }

  const options = {
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false
      }
    }
  }

  const doughnutLabel = {
    id: 'doughnutLabel',
    afterDatasetsDraw(chart: Chart<'doughnut'>) {
      const { ctx } = chart
      const centerX = chart.getDatasetMeta(0).data[0].x
      const centerY = chart.getDatasetMeta(0).data[0].y
      ctx.save()
      ctx.font = 'bold 90px sans-serif'
      ctx.fillStyle = 'black'
      ctx.textAlign = 'center'
      //ctx.baseAlign = 'middle'
      ctx.fillText('Test', centerX, centerY)
    }
    
  }

  return (
    <div>
      <Doughnut
        data={data}
        options={options}
        plugins={[doughnutLabel]}
      />
    </div>
  )
}

export default DoughnutChart