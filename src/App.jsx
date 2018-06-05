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

  componentDidMount(){

    this.callApi()
      .then(res => {
        this.setState({ response: res.express })
        console.log(res);
      })
      .catch(err => console.log(err) );
    }

    callApi = async () => {
      const response = await fetch('/api/hello');
      // const body = await response.json();

      // if (response.status !== 200) throw Error(body.message);
      // console.log('yo')

      // return body;
    }


  searchSubmission = query => {
    this.setState({searchSubmit : true})
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
