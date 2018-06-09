import React, {Component} from 'react';
import {
  Pie,
  Line,
  Bar,
  Polar,
  Doughnut,
  Radar
} from 'react-chartjs-2';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import Arrow from'./arrow2.png';

configureAnchors({scrollDuration: 1000})


class OverallSentiment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let chartSet = this.props.chartData.all.overallHowManyWere
    let chartSpecific = this.props.chartData.all.specificHowManyWere

    let pastChart = this.props.pastChartData
    console.log(this.props.pastChartData);
    // console.log(pastChart);

    const dataBar = (canvas) => {
      const ctx = canvas.getContext("2d")
      var gradientStroke = ctx.createRadialGradient(0, 0, 0, 0, 0, 300);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');
      var gradientStroke2 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      return {
        labels: [
          'Reddit', 'Twitter'
        ],
        datasets: [
          {
            label: pastChart.createdAt,
            backgroundColor: [
              gradientStroke, gradientStroke2
            ],
            borderColor: '#3e3e3e',
            borderWidth: 0,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 0]
          }
        ]
      }
    };

    const dataPie = (canvas) => {

      const ctx = canvas.getContext("2d")
      var gradientStroke = ctx.createRadialGradient(0, 0, 0, 0, 0, 300);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');
      var gradientStroke2 = ctx.createRadialGradient(0, 0, 0, 0, 0, 450);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      return {
        labels: [
          'Positive Response', 'Negative Response'
        ],
        datasets: [
          {
            data: [
              chartSet.positive, chartSet.negative
            ],
            backgroundColor: [
              gradientStroke, gradientStroke2
            ],
            borderWidth: 0,
            hoverBackgroundColor: ['#78909C', '#B0BEC5']
          }
        ]
      }
    };

    const dataLine = (canvas) => {


            const ctx = canvas.getContext("2d")
            var gradientStroke = ctx.createRadialGradient(0, 0,0,0, 0, 300);
            gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
            gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');
            var gradientStroke2 = ctx.createRadialGradient(0, 0,0,0, 0, 450);
            gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
            gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      return {
        labels: [
           '6 Days Ago', '5 Days Ago', '4 Days Ago', '3 Days Ago', '2 Days Ago', 'Yesterday', 'Today'
        ],
        datasets: [
          {
            label: 'Angry',
            borderColor: '',
            pointBackgroundColor: 'white',
            borderWidth: 2,
            gridlines: {
              lineWidth: 0
            },
            pointBorderColor: 'white',
            backgroundColor: gradientStroke2,
            data: [40, 19, 10,29,32,21,30]
          }, {
            label: 'Twitter',
            lineWidth: 25,
            borderColor: '',
            pointBackgroundColor: 'white',
            pointBorderColor: 'white',
            borderWidth: 2,
            gridlines: {
              display: false
            },
            backgroundColor: gradientStroke,
            data: [60, 15, 32,34,74,23,12]
          }
        ]
      }
    };

    const dataRadar = (canvas) => {

      const ctx = canvas.getContext("2d")
      var gradientStroke = ctx.createRadialGradient(0, 0,0,0, 0, 300);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');

      var gradientStroke2 = ctx.createRadialGradient(0, 0,0,0, 0, 450);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      let gradientStroke3 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke3.addColorStop(0.5, 'rgb(138, 239, 91, 0.25)');
      gradientStroke3.addColorStop(1, 'rgb(35, 98, 137, 1)');

      let gradientStroke4 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      let gradientStroke5 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      return {
        datasets: [
          {
            data: [
              chartSpecific.dissapointed, chartSpecific.angry, chartSpecific.cautious, chartSpecific.doubtful, chartSpecific.happy
            ],
            backgroundColor: [
              gradientStroke, gradientStroke2, gradientStroke3, gradientStroke2, gradientStroke
            ],
            borderWidth: 0,
            label: 'My dataset' // for legend
          }
        ],
        labels: ['Disapointed', 'Angry', 'Cautious', 'Doubtful', 'Happy']
      };
    };

    return (<div className="Card">

      <Grid fluid>
      {/*THIS IS THE BUTTON THAT TRIGGERS THE SCROLL*/}
        <p className="emotionP">
          <a href="#emotion">
            <img className="arrow" src={Arrow} height="20"/>
          </a>
        </p>
      {/*THIS IS THE BUTTON THAT TRIGGERS THE SCROLL*/}
        <ScrollableAnchor id={'emotion'}>
          <div className='cardHeader'>
            Overall Emotional Sentiment {this.props.querySearched}
          </div>
        </ScrollableAnchor>

        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="singleChart">
              <Doughnut data={dataPie} options={{
                  legend: {
                    position: 'bottom'
                  },title: {
                    display: true,
                    text: 'Negative - Positive Responses',
                    fontColor: '#8e99a7'
                  },
                }}/>
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="singleChart">
              <Line data={dataLine} options={{
                  legend: {
                    position: 'bottom'
                  },
                  scales: {
                    xAxes: [
                      {
                        gridLines: {
                          color: "rgba(0, 0, 0, 0)"
                        }
                      }
                    ],
                    yAxes: [
                      {
                        gridLines: {
                          color: "rgba(0, 0, 0, 0)"
                        }
                      }
                    ]
                  }
                }}/>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="singleChart">
              <Bar data={dataBar} options={{
                  legend: {
                    position: 'bottom'
                  },title: {
                    display: true,
                    text: 'Something Else',
                    fontColor: '#8e99a7'
                  },
                  scales: {
                    xAxes: [
                      {
                        gridLines: {
                          color: "rgba(0, 0, 0, 0)"
                        }
                      }
                    ],
                    yAxes: [
                      {
                        gridLines: {
                          color: "rgba(0, 0, 0, 0)"
                        }
                      }
                    ]
                  }
                }}/>
            </div>
          </Col>

          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="singleChart">
              <Polar data={dataRadar} options={{
                  legend: {
                    position: 'bottom'
                  },
                  title: {
                    display: true,
                    text: 'Specific Emotional Responses',
                    fontColor: '#8e99a7'
                  },
                  scale: {
                    display: false
                  },
                  scales: {
                    xAxes: [
                      {
                        gridLines: {
                          color: "rgba(0, 0, 0, 0)"
                        }
                      }
                    ],
                    yAxes: [
                      {
                        gridLines: {
                          color: "rgba(0, 0, 0, 0)"
                        }
                      }
                    ]
                  }
                }}/>
            </div>
          </Col>
        </Row>
      </Grid>
    </div>);
  }
}

export default OverallSentiment
