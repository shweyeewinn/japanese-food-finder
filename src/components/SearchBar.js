import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'restaurants',
    }
    console.log('Central State', props);
  }
  onInputChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
    console.log(this.state.searchTerm);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.searchTermChange(this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>Restaurants Search</label>
            <input type="text" value={this.state.searchTerm} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;