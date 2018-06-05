import React, {Component} from 'react';


class Search extends Component {
  constructor(props){
    super(props);
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault()
      // console.log(e);
      this.props.query(e.target.value)
      console.log('handled key press')
    }
  }

  render() {
    return (
      <div id="wrap">
        <form >
          <input  id="search" name="search" type="text" placeholder="Find Insight" onKeyDown={this.handleKeyPress} />
          <input id="search_submit" value="Rechercher" type="submit"/>
        </form>
      </div>
    );
  }
}

export default Search;
