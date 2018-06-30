import React, { Component } from 'react';
import { connect }from 'react-redux';
// import connect, define mapStatetoPros, pull data from props taken from state to container

class WeatherLst extends Component {
    renderWeather(cityData) {
        return (
            <tr><td>{cityData.city.name}</td></tr>
        )
    }
    render () {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({ weather}) => {
    return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherLst);