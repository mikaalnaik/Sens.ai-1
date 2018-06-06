import React, {Component} from 'react';
import NavBar from  './navbar.js'
import Search from './search.jsx'
import PieExample from './OverallSentiments'
import Jumbotron from './Jumbotron'

import './App.css';

let data = {
  overallHowManyWere: {
    positive: 25,
	negative: 75 },
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
      searchSubmit: false,
      statistics: data
    }
  }

  fetchPosts = async (query) => {
    const response = await (await fetch(`/results/${query}`)).json()
    console.log(response)
    this.setState( { statistics: response }, () => {
      console.log("State: ", this.state.statistics) } )

  }

  searchSubmission = async (query) => {
    this.setState( { searchSubmit : true, currentQuery: query } )
    let posts = await this.fetchPosts(query)
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
            chartData ={this.state.statistics}
          />
        </div>
      </div>
    );
  }
}

export default App;
