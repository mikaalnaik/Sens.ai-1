import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

const dataBar = {
  labels: ['Reddit', 'Twitter', 'Facebook'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: '#a1a1a1',
      borderColor: '#3e3e3e',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
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
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: '#3e3e3e',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
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
      '#3e3e3e',
  		'#a1a1a1'
		],
		hoverBackgroundColor: [
		'#78909C',
		'#B0BEC5'
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
          <h4>Overall Emotional Sentiment for {this.props.querySearched}</h4>
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
