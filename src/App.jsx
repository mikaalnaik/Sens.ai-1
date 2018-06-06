import React, {Component} from 'react';
import NavBar from  './navbar.js'
import Search from './search.jsx'
import PieExample from './OverallSentiments'
import Jumbotron from './Jumbotron'

import './App.css';

var data = {
  overallHowManyWere: {
    positive: 66,
	negative: 33 },
  specificHowManyWere:
   { dissapointed: 0,
     angry: 0,
     cautious: 33.33,
     doubtful: 33.33,
     happy: 33.33 }
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchSubmit : false,
      watsonData : data
    }
  }

  searchSubmission = query => {
    this.setState({searchSubmit : true})
  }

  render() {

    return (
      <div>
        <div> <NavBar/> </div>
        <div> <Jumbotron/> </div>
        <div> <Search query={this.searchSubmission}/> </div>
        <div className="pie">
          <PieExample
            searched={this.state.searchSubmit}
            chartData ={this.state.watsonData}
          />
        </div>
      </div>

    );
  }
}

export default App;
