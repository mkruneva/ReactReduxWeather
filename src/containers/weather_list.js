import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';
// import connect, define mapStatetoPros, pull data from props taken from state to container

class WeatherLst extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(one => one.main.temp);
        const humidities = cityData.list.map(one => one.main.humidity);
        const pressures = cityData.list.map(one => one.main.pressure);

        return (
            <tr key={name}>
                <td>{name}</td>
                <td>
                    <Sparklines height={120} height={180} data={temps}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
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