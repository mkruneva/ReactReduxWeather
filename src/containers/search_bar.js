import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''}
        this.onInputChange = this.onInputChange.bind(this); // approach 2
    }

    onInputChange(e) {
        this.setState({ term: e.target.value });
    }

    render () {
        return (
            <form className="input-group">
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