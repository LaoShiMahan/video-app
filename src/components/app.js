import React, { Component } from 'react';
import Video from './video';
import SearchBar from './searchBar';
import Navbar from './navbar';


export default class App extends Component {
    render() {
        return (
        <div className='app'>
            <h1>Video App</h1>
            <SearchBar />
            <Video />
            <Navbar/>
        </div>
        );
    }
}
