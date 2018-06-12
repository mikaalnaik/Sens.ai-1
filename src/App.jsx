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
import TransitionGroup from 'react-addons-transition-group';
import scrollToComponent from 'react-scroll-to-component';
import FadeIn from 'react-fade-in';

import './App.css';

let testData = require('./testdata.js')

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchSubmit: false,
      shouldShow: true,
      fadeOut: "visible",
      shouldAutoScrollToResults: true,
      pastStatistics: testData
    }

  }

  fetchPosts = async (query) => {
    const response = await(await fetch(`/results/${query}`)).json()
    this.setState({statistics: response[0], pastStatistics: {} }) // most recent result is last in array
  }

  searchSubmission = async (query) => {
    this.setState({fadeOut: "hide"})
    setTimeout( async () => {
      this.setState({searchSubmit: true, currentQuery: query, statistics: false});
      let posts = await this.fetchPosts(query);
    }, 700);

  }

  resetSearchState = () => {
    this.setState({searchSubmit: false})
  }

  visibility = () => {
    this.setState({fadeOut: "visible"})
  }

  componentDidUpdate() {
    if (this.state.shouldAutoScrollToResults) {
      scrollToComponent(this.results, { offset: 30, align: 'middle', duration: 10, ease:'inCirc'});
    }
  }

  shouldNotScroll = () => {
    this.setState({shouldAutoScrollToResults: false})
  }

  shouldScroll = () => {
    this.setState({shouldAutoScrollToResults: true})
  }

  render() {
    if(!this.state.statistics && !this.state.searchSubmit){
      return (
        <div>
            <NavBar/>
            <div className={this.state.fadeOut}>
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
        </div>
          )
    } else if (!this.state.statistics && this.state.searchSubmit) {
      return (

        <div>
          <NavBar/>
          <Loading shouldScroll={this.shouldScroll} />
        </div>

      )
    } else if (this.state.statistics.reddit.overallHowManyWere.positive == NaN || this.state.statistics.twitter.overallHowManyWere.positive == NaN) {
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
    console.log(this.state.fadeOut)
    return (
      <div>
        <NavBar/>
        <div className={this.state.fadeOut}>
          <FadeIn delay={0} transitionDuration={3000}>
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
              ref={(c) => this.results = c}
              visibility={this.visibility}
              shouldNotScroll={this.shouldNotScroll}
              searched={this.state.searchSubmit}
              chartData ={this.state.statistics}
              pastChartData={this.state.pastStatistics}
              resetSearchState={this.state.resetSearchState}
            />

            <Reddit chartData={this.state.statistics}
              pastChartData={this.state.pastStatistics}
            />

            <Twitter chartData={this.state.statistics}
                      pastChartData={this.state.pastStatistics}
            />
          </FadeIn>
          <Footer/>
        </div>
      </div>
    );
    }
  }
}

export default App;
