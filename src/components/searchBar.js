import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            query: ""
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        let query = document.getElementById("search-bar").value.split(" ").join("+");
        document.getElementById("search-bar").value = "";
        this.setState({ query: query });
        this.props.fetchVideos(query);
    }

    

    render() {
        return (
            <form
                className="search-bar"
                type="submit"
                onSubmit={ this.handleFormSubmit }
            >
                <input
                    id="search-bar"
                    className="search-bar__input"
                    type="text"
                    placeholder="Search"
                />
                <input
                    className="search-bar__button"
                    type="submit"
                    onSubmit={ this.handleFormSubmit }
                />
            </form>
        );
    }
}

SearchBar = connect(null, actions)(SearchBar);

export default SearchBar;