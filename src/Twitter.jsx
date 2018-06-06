import React, {Component} from 'react';
import {Doughnut} from 'react-chartjs-2';
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';





class Twitter extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let chartSet = this.props.chartData.overallHowManyWere



    const dataBar = (canvas) => {
      const ctx = canvas.getContext("2d")
      var gradientStroke = ctx.createRadialGradient(0, 0,0,0, 0, 600);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');
      var gradientStroke2 = ctx.createRadialGradient(0, 0,0,0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');
        return {

      labels: ['Reddit', 'Twitter'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor:[ gradientStroke,gradientStroke2],
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
      var gradientStroke = ctx.createRadialGradient(0, 0,0,0, 0, 600);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');
      var gradientStroke2 = ctx.createRadialGradient(0, 0,0,0, 0, 600);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');

        return {
    	labels: [
    		'Positive Response',
    		'Negative Response'
    	],
    	datasets: [{
    		data: [chartSet.positive, chartSet.negative],
    		backgroundColor: [
          gradientStroke,
      		gradientStroke2
    		],
        borderWidth: 0,
    		hoverBackgroundColor: [
    		'#78909C',
    		'#B0BEC5'
    		]
    	}]
    }
  };


    const dataLine = (canvas) =>  {

      const ctx = canvas.getContext("2d")
      var gradientStroke = ctx.createLinearGradient(0, 0, 0, 250);
      gradientStroke.addColorStop(0.5, 'rgb(235, 51, 73, 0.25)');
      gradientStroke.addColorStop(1, 'rgb(244, 92, 67, 1)');

      var gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 450);
      gradientStroke2.addColorStop(0.5, 'rgb(60, 211, 173, 0.25)');
      gradientStroke2.addColorStop(1, 'rgb(76, 184, 196, 1)');
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
         {
           label: 'Reddit',
           borderColor: '',
           pointBackgroundColor: 'white',
           borderWidth: 2,
           gridlines: {
             lineWidth:0
           },
           pointBorderColor: 'white',
           backgroundColor: gradientStroke2,
           data: [40, 39, 10, 40, 39, 80, 40]
         },{
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
           data: [60, 55, 32, 10, 2, 12, 53]
         }
       ]
    }
  };





		if(!this.props.searched){
			return (<p></p>)
		} else {

      return (
        <div className="Card">
          <h4>Overall Emotional Sentiment for {this.props.querySearched}</h4>

          <Line data={dataPie}
          options={
            {
              legend:{
            position:'bottom'
          }
        }
      }
    />
            <div className="lineChartTEST">
              <Line data={dataLine}
                options={
                {
                  legend:{
                position:'bottom'
              },
              scales: {xAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}],
                      yAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}]}}}/>
            </div>
            <Bar data={dataBar}         options={
                    {
                      legend:{
                    position:'bottom'
                  },
                  scales: {xAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}],
                          yAxes: [{gridLines: {color: "rgba(0, 0, 0, 0)",}}]}}}/>
              </div>

          );
	  }
  }

}

export default Twitter
