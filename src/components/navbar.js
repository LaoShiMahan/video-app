import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <ul>
                    <li className="hamburger">
                        <i class="fas fa-bars"></i>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Navbar;