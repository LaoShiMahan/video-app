import React, { Component } from 'react';
import SearchBar from './searchBar';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li className="hamburger">
                        <i className="fas fa-bars"></i>
                    </li>
                </ul>
                <SearchBar />
            </div>
        );
    }
}

export default Navbar;