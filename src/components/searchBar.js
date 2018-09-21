import React, { Component } from 'react';

class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            searchValue: ""
        }
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        let searchValue = document.getElementById("search-bar").value.split(" ").join("+");
        document.getElementById("search-bar").value = "";
        this.setState({ searchValue: searchValue });
    }

    render() {
        console.log(this.state.searchValue)
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

export default SearchBar;