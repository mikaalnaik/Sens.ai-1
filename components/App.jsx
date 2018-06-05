import React, {Component} from 'react';
import NavBar from  './navbar.js'
import Search from './search.jsx'
import PieExample from './RedditFeed'

import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      searchSubmit : false,
    }
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
