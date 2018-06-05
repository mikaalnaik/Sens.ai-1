import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

const dataBar = {
  labels: ['Reddit', 'Twitter', 'Facebook'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#28ed63',
      borderColor: '#212922',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(184, 237, 40,0.4)',
      hoverBorderColor: 'rgba(184, 237, 40,1)',
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
          <h3>Overall Emotional Sentiment {this.props.querySearched}</h3>
          <div className="flex-container">
            <div className="singleChart">
              <Pie data={dataPie}/>
            </div>
            <div className="singleChart">
              <Line data={dataLine} />
            </div>
            <div className="singleChart">
  				    <Bar data={dataBar}/>
            </div>
          </div>
        </div>
      );
	  }
  }
}

export default PieExample
