import React from 'react'
import ReactApexChart from 'react-apexcharts'

class ChartProximity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          height: 350,
          type: 'radialBar',
          offsetY: -10,
          foreColor: '#fff'
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: '#fff',
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: '#fff',
                formatter: function (val) {
                  return val + "cm";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: ['Distancia']
      },


    }
  }

  render() {
    return (<ReactApexChart options={this.state.options} series={this.props.series} type="radialBar" height={350} />)
  }
}

export default ChartProximity