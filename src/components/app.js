import React, { Component } from 'react';

import SearchBar from '../containers/search_bar'

export default class App extends Component {
  render() {
    return (
      <div>
         <SearchBar />
         <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button> 
         </span>
      </div>
     
    );
  }
}
