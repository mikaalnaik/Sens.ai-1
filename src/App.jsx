import React, {Component} from 'react';
import NavBar from  './navbar.js'
import Search from './search.jsx'
import PieExample from './OverallSentiments'

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchSubmit : false,
    }
  }

  fetchPosts = async (query) => {
    const response = await (await fetch(`/results/${query}`)).json()
    return response;
  }

  searchSubmission = async (query) => {
    this.setState( { searchSubmit : true, currentQuery: query } )
    let posts = await this.fetchPosts(query)
  }

  render() {
    return (
      <div>
        <div> <NavBar/> </div>
        <div> <Search query={this.searchSubmission}/> </div>
        <div className="pie">
          <PieExample searched={this.state.searchSubmit}/>
        </div>
      </div>
    );
  }
}

export default App;
