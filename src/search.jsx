import React, {Component} from 'react';


class Search extends Component {
  constructor(props){
    super(props);
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault()
      this.props.query(e.target.value)
      console.log('handled key press')
    }
  }

  render() {
    return (
      <div id="wrap">
        <form >
<<<<<<< HEAD
          <input  id="search" name="search" type="text" autocomplete='off' placeholder="Find Insight" onKeyDown={this.handleKeyPress} />
          <input id="search_submit" value="Rechercher" type="submit" autocomplete='off'/>
=======
          <input  id="search" name="search" type="text" placeholder="Find Insight" onKeyDown={this.handleKeyPress} />
          <input  id="search_submit" value="Rechercher" type="submit"/>
>>>>>>> feature/scroll-test
        </form>
      </div>
    );
  }
}

export default Search;
