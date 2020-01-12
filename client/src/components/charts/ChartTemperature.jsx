import React from "react"
import ReactApexChart from "react-apexcharts"

class ChartTemperature extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Temperatura',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#30353a', 'transparent'], // takes an array which will be repeated on column
            opacity: 0.5
          },
        },
        xaxis: {
          categories: [''],
        },
        chart: {
          foreColor: '#fff'
        }
      }

    }
  }

  render() {
    return (<ReactApexChart options={this.state.options} series={this.props.series} type="line" height={250} width={500} />)
  }
}

export default ChartTemperature