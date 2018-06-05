import React, {Component} from 'react';
import {Pie, Line, Bar, Polar} from 'react-chartjs-2';
import { Grid, Row, Col } from 'react-flexbox-grid';

const dataBar = {
  labels: ['Reddit', 'Twitter', 'Facebook'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#9f488e',
      borderColor: '#9f488e',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(91, 130, 102,0.4)',
      hoverBorderColor: 'rgba(91, 130, 102,1)',
      data: [65, 59, 80]
    }
  ]
};
const dataLine = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Emotional Response over time',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(227, 23, 10,0.4)',
      borderColor: '#3e3e3e',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(227, 23, 10,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(227, 23, 10,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
const dataPie = {
	labels: [
		'Positive Response',
		'Negative Response'
	],
	datasets: [{
		data: [27,73],
		backgroundColor: [
      '#274C77',
  		'#F0803C'
		],
		hoverBackgroundColor: [
		'#6096BA',
		'#F4A271'
		]
	}]
};

const dataPolar = {
  datasets: [{
    data: [
      11,
      16,
      7,
      3,
      14
    ],
    backgroundColor: [
      '#FF6384',
      '#4BC0C0',
      '#FFCE56',
      '#E7E9ED',
      '#36A2EB'
    ],
    label: 'My dataset' // for legend
  }],
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ]
};

class PieExample extends Component {
  constructor(props){
    super(props);
  }

  render() {
		if(!this.props.searched){
			return (<p></p>)
		} else {
      return (
        <div className="Card">
          <Grid fluid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <h3>Overall Emotional Sentiment {this.props.querySearched}</h3>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="singleChart">
                  <Pie data={dataPie}/>
                </div>
              </Col>

              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="singleChart">
                  <Line data={dataLine} />
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="singleChart">
                  <Bar data={dataBar} />
                </div>
              </Col>

              <Col xs={12} sm={12} md={12} lg={6}>
                <div className="singleChart">
                  <Polar data={dataPolar} />
                </div>
              </Col>
            </Row>


          </Grid>
        </div>
      );
	  }
  }
}

export default PieExample
