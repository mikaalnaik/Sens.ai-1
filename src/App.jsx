import React, {Component} from 'react';
import NavBar from './navbar.js'
import Search from './search.jsx'
import OverallSentiment from './OverallSentiments'
import Jumbotron from './Jumbotron'
import Twitter from './Twitter'
import Reddit from './Reddit'
import Footer from './Footer'
import './App.css';

let data = {
  all: {
    overallHowManyWere: {
      positive: 23,
      negative: NaN
    },
    specificHowManyWere: {
      dissapointed: 0,
      angry: 0,
      cautious: 33.33,
      doubtful: 33.33,
      happy: 33.33
    },
  },
  twitter: {
    overallHowManyWere: {
      positive: 50,
      negative: 50
    },
    specificHowManyWere: {
      dissapointed: 0,
      angry: 0,
      cautious: 33.33,
      doubtful: 33.33,
      happy: 33.33
    },
  },
  reddit: {
    overallHowManyWere: {
      positive: 73,
      negative: 23
    },
    specificHowManyWere: {
      dissapointed: 0,
      angry: 0,
      cautious: 33.33,
      doubtful: 33.33,
      happy: 33.33
    }
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchSubmit: false,
      statistics: data
    }
  }

  fetchPosts = async (query) => {
    const response = await(await fetch(`/results/${query}`)).json()
    console.log(response)
    this.setState({statistics: response})

  }

  searchSubmission = async (query) => {
    this.setState({searchSubmit: true, currentQuery: query})
    console.log(query);
    console.log(this.state);
    // let posts = await this.fetchPosts(query)
  }

  render() {
    if (!this.state.searchSubmit) {
      return (<div>
        <NavBar/>
        <Jumbotron/>
        <div>
          <Search query={this.searchSubmission}/>
        </div>
      </div>)
    } else if (!this.state.statistics.all.overallHowManyWere.positive) {
      return (<div>
        <NavBar/>
        <div>
          <Jumbotron/>
        </div>
        <div>
          <Search query={this.searchSubmission}/>
        </div>

        <div className='validity'>
          Please enter valid query.
        </div>
      </div>);
    } else {
      return (<div>
        <NavBar/>
        <div>
          <Jumbotron/>
        </div>
        <div>
          <Search query={this.searchSubmission}/>
        </div>

        <OverallSentiment searched={this.state.searchSubmit} chartData={this.state.statistics}/>
        <Reddit chartData={this.state.statistics}/>
        <Twitter chartData={this.state.statistics}/>
        <Footer/>
      </div>);
    }
  }
}

export default App;
