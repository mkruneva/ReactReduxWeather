import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ''}
    }

    onInputChange(e) {
        console.log(e.target.value);
    }

    render () {
        return (
            <form className="input-group">
                <input
                    placeholder="5 day forectast in your chosen  city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
            </form>
        )
    }
}