import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''}
        this.onInputChange = this.onInputChange.bind(this); // approach 2
        this.onFormSubmit = this.onFormSubmit.bind(this); // approach 2
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
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
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchWeather }, dispatch); //dispatch make sure the action flow to middleware and the action is inside redux
}
// binding actonCreator to dispatch and mapping it to props - gives access to funch this.props.featchWeather
export default connect(null, mapDispatchToProps)(SearchBar); // null first argument - for state
