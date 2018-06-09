import React, {Component} from 'react';
import NavBar from  './navbar.js'
import Search from './search.jsx'
import Loading from './load.jsx'
import OverallSentiment from './OverallSentiments'
import Jumbotron from './Jumbotron'
import Twitter from './Twitter'
import Reddit from './Reddit'
import Footer from './Footer'
import {Grid, Row, Col} from 'react-flexbox-grid';
import data from './hardcodedData'

import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchSubmit: false
    }
  }

  fetchPosts = async (query) => {
    const response = await(await fetch(`/results/${query}`)).json()
    this.setState({statistics: response, pastResults: {} }) // most recent result is last in array
  }

  searchSubmission = async (query) => {
    this.setState({searchSubmit: true, currentQuery: query, statistics: false})
    // let posts = await this.fetchPosts(query)
    this.setState({statistics:data.data, pastStatistics: data.pastData})
    // console.log('Past Data:', data.pastData);
  }

  resetSearchState = () => {
    this.setState({searchSubmit: false})
  }

  render() {
    if(!this.state.statistics && !this.state.searchSubmit){
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
    } else if (!this.state.statistics && this.state.searchSubmit) {

      return (
        <Loading />
      )

    } else if (!this.state.statistics.reddit.overallHowManyWere.positive || !this.state.statistics.twitter.overallHowManyWere.positive) {
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
        Please resubmit your query.
      </div>
    );
  } else if (this.state.statistics) {
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
          pastChartData={this.state.pastStatistics}

        />
        <Reddit chartData={this.state.statistics}
          pastChartData={this.state.pastStatistics}
        />
        <Twitter chartData={this.state.statistics}
                  pastChartData={this.state.pastStatistics}
        />
        <Footer/>
      </div>
    );
    }
  }
}

export default App;
