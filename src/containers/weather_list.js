import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
// import connect, define mapStatetoPros, pull data from props taken from state to container

class WeatherLst extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(one => one.main.temp);
        const pressures = cityData.list.map(one => one.main.pressure);
        const humidities = cityData.list.map(one => one.main.humidity);


        return (
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} colour="green"/></td>
                <td><Chart data={pressures} colour="red"/></td>
                <td><Chart data={humidities} colour="blue"/></td>
            </tr>
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