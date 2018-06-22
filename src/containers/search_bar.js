import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''}
        this.onInputChange = this.onInputChange.bind(this); // approach 2
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="5 day forectast in your chosen  city"
                    className="form-control"
                    value={this.state.term}
                    // onChange={e => this.onInputChange(e)} // approach 1
                    onChange={this.onInputChange} // approach 2
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}