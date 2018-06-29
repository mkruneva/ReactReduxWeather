import React, { Component } from 'react';

import SearchBar from '../containers/search_bar'
import WeatherLst from '../containers/weather_list'

export default class App extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <WeatherLst />
      </div>
     
    );
  }
}
