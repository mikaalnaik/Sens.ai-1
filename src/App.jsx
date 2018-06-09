import React, {Component} from 'react';
import NavBar from  './navbar.js'
import Search from './search.jsx'
import OverallSentiment from './OverallSentiments'
import Jumbotron from './Jumbotron'
import Twitter from './Twitter'
import Reddit from './Reddit'
import Footer from './Footer'
import {Grid, Row, Col} from 'react-flexbox-grid';
import './App.css';

let data = {
  all: {
    overallHowManyWere: {
      positive: 23,
      negative: 84
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
      searchSubmit: false
    }
  }

  fetchPosts = async (query) => {
    // const response = await(await fetch(`/results/${query}`)).json()
    // console.log(response)
    // this.setState({statistics: response, })
    // Testing on data submission logic
    setTimeout(()=> this.setState({statistics: data}), 3000)
    // this.setState({statistics: data})

  }

  searchSubmission = async (query) => {
    this.setState({searchSubmit: true, currentQuery: query, statistics: false})
    console.log(query);
    console.log(this.state);
<<<<<<< HEAD
    let posts = await this.fetchPosts(query)
=======
    let posts = this.fetchPosts()
    // let posts = await this.fetchPosts(query)
>>>>>>> datalogic
  }

  render() {
    if(!this.state.statistics){
      return (
        <div>
          <NavBar/>
          <Grid fluid>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <Jumbotron/>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12}>
                <div> <Search query={this.searchSubmission}/> </div>
              </Col>
            </Row>
          </Grid>
        </div>
          )
    } else {
    return (
      <div>
        <NavBar/>
        <Grid fluid>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <Jumbotron/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <div> <Search query={this.searchSubmission}/> </div>
            </Col>
          </Row>
        </Grid>

        <OverallSentiment
          searched={this.state.searchSubmit}
          chartData ={this.state.statistics}
        />
        <Reddit chartData={this.state.statistics} />
        <Twitter chartData={this.state.statistics}/>
        <Footer/>
      </div>
    );
    }
  }
}

export default App;
