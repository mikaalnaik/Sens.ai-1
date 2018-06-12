import React, {Component} from 'react';
import {
  Pie,
  Line,
  Bar,
  Polar,
  Doughnut,
  Radar,
  defaults
} from 'react-chartjs-2';
import {Grid, Row, Col} from 'react-flexbox-grid';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor'
import Arrow from './arrow.png';

configureAnchors({scrollDuration: 1000})
// defaults.global.animation = false;

class Twitter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let chartSet = this.props.chartData.twitter
    let chartSpecific = this.props.chartData.twitter.specificHowManyWere
    let pastChart = this.props.pastChartData

    let chartLabelGenerator = () => {
      let labels = []
      for (var i = 0; i < pastChart.length; i++) {
        labels.push(pastChart[i].createdAt)
      }
      return labels
    }

    let twitterLinePositive = () => {
      let positiveData = []
      for (var i = 0; i < pastChart.length; i++) {
          let chart = JSON.parse(pastChart[i])
        positiveData.push(chart.twitter.overallHowManyWere.positive)
      }
      return positiveData
    }

    let twitterLineNegative = () => {
      let negativeData = []
      for (var i = 0; i < pastChart.length; i++) {
          let chart = JSON.parse(pastChart[i])
        negativeData.push(chart.twitter.overallHowManyWere.negative)
      }
      return negativeData
    }

    let twitterBarDisappointed = () => {
      let dissapointedData = []
      for (var i = 0; i < pastChart.length; i++) {
          let chart = JSON.parse(pastChart[i])
        dissapointedData.push(chart.twitter.specificHowManyWere.dissapointed)
      }
      return dissapointedData
    }
    let twitterBarAngry = () => {
      let data = []
      for (var i = 0; i < pastChart.length; i++) {
          let chart = JSON.parse(pastChart[i])
        data.push(chart.twitter.specificHowManyWere.angry)
      }
      return data
    }
    let twitterBarCautious = () => {
      let data = []
      for (var i = 0; i < pastChart.length; i++) {
          let chart = JSON.parse(pastChart[i])
        data.push(chart.twitter.specificHowManyWere.cautious)
      }
      return data
    }
    let twitterBarDoubtful = () => {
      let data = []
      for (var i = 0; i < pastChart.length; i++) {
          let chart = JSON.parse(pastChart[i])
        data.push(chart.twitter.specificHowManyWere.doubtful)
      }
      return data
    }
    let twitterBarHappy = () => {
      let data = []
      for (var i = 0; i < pastChart.length; i++) {
          let chart = JSON.parse(pastChart[i])
        data.push(chart.twitter.specificHowManyWere.happy)
      }
      return data
    }


    const dataBar = (canvas) => {
      const ctx = canvas.getContext("2d")
      let gradientStroke = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');

      let gradientStroke2 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      let gradientStroke3 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke3.addColorStop(0.5, 'rgb(43, 192, 228, 0.25)');
      gradientStroke3.addColorStop(1, 'rgb(234, 236, 198, 1)');

      let gradientStroke4 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke4.addColorStop(0.5, 'rgb(255, 128, 8, 0.25)');
      gradientStroke4.addColorStop(1, 'rgb(255, 200, 55, 1)');

      let gradientStroke5 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(240, 82, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(176, 84, 96, 1)');

      return {
        labels: chartLabelGenerator(),
        datasets: [
          {
            label: 'Disapointed',
            backgroundColor: gradientStroke2,
            borderWidth: 0,
            data: twitterBarDisappointed()
          }, {
            label: 'Angry',
            backgroundColor: gradientStroke,
            borderWidth: 0,
            data: twitterBarAngry()
          }, {
            label: 'Cautious',
            backgroundColor: gradientStroke3,
            borderWidth: 0,
            data: twitterBarCautious()
          }, {
            label: 'Doubtful',
            backgroundColor: gradientStroke4,
            borderWidth: 0,
            data: twitterBarDoubtful()
          }, {
            label: 'Happy',
            backgroundColor: gradientStroke5,
            borderWidth: 0,
            data: twitterBarHappy()
          }
        ]
      }
    };

    const dataPie = (canvas) => {

      const ctx = canvas.getContext("2d")
      var gradientStroke = ctx.createRadialGradient(0, 0, 0, 0, 0, 500);
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
              chartSet.overallHowManyWere.positive, chartSet.overallHowManyWere.negative
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
      var gradientStroke = ctx.createRadialGradient(0, 0, 0, 0, 0, 300);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');
      var gradientStroke2 = ctx.createRadialGradient(0, 0, 0, 0, 0, 450);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      return {
        labels: chartLabelGenerator(),
        datasets: [
          {
            label: 'Reddit',
            borderColor: '',
            pointBackgroundColor: 'white',
            borderWidth: 2,
            gridlines: {
              lineWidth: 0
            },
            pointBorderColor: 'white',
            backgroundColor: gradientStroke2,
            data: twitterLineNegative()
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
            data: twitterLinePositive()
          }
        ]
      }
    };

    const dataRadar = (canvas) => {

      const ctx = canvas.getContext("2d")
      let gradientStroke = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');

      let gradientStroke2 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

      let gradientStroke3 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke3.addColorStop(0.5, 'rgb(43, 192, 228, 0.25)');
      gradientStroke3.addColorStop(1, 'rgb(234, 236, 198, 1)');

      let gradientStroke4 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke4.addColorStop(0.5, 'rgb(255, 128, 8, 0.25)');
      gradientStroke4.addColorStop(1, 'rgb(255, 200, 55, 1)');

      let gradientStroke5 = ctx.createRadialGradient(0, 0, 0, 0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(240, 82, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(176, 84, 96, 1)');

      return {
        datasets: [
          {
            data: [
              chartSpecific.dissapointed, chartSpecific.angry, chartSpecific.cautious, chartSpecific.doubtful, chartSpecific.happy
            ],
            backgroundColor: [
              gradientStroke, gradientStroke2, gradientStroke3, gradientStroke4, gradientStroke5
            ],
            borderWidth: 0,
            label: 'My dataset' // for legend
          }
        ],
        labels: ['Disapointed', 'Angry', 'Cautious', 'Doubtful', 'Happy']
      };
    };

if(pastChart.length > 0){
  return (<div className="Card">

    <Grid fluid="fluid">

      {/* THIS IS THE BUTTON THAT TRIGGERS THE SCROLL */}
      <p className="redditTwitter">
        <a href="#scrollTwitter">
          <img className="arrow" src={Arrow} height="40" width="80"/>
        </a>
      </p>
      {/* THIS IS THE BUTTON THAT TRIGGERS THE SCROLL */}
      <ScrollableAnchor id={'scrollTwitter'}>
        <div className='cardHeader'>
          Analysis of Twitter
        </div>
      </ScrollableAnchor>

      <Row>
        <Col xs={12} sm={12} md={12} lg={6}>
          <div className="singleChart">
            <Doughnut data={dataPie} options={{
                legend: {
                  position: 'bottom'
                }
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
  } else  {
    return (<div className="Card">

      <Grid fluid="fluid">

        {/* THIS IS THE BUTTON THAT TRIGGERS THE SCROLL */}
        <p className="redditTwitter">
          <a href="#scrollTwitter">
            <img className="arrow" src={Arrow} height="40" width="80"/>
          </a>
        </p>
        {/* THIS IS THE BUTTON THAT TRIGGERS THE SCROLL */}
        <ScrollableAnchor id={'scrollTwitter'}>
          <div className='cardHeader'>
            Analysis of Twitter
          </div>
        </ScrollableAnchor>

        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="singleChart">
              <Doughnut data={dataPie} options={{
                  legend: {
                    position: 'bottom'
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
}

export default Twitter
