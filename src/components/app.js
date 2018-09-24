import React, { Component } from 'react';
import Videos from './videos';
import Navbar from './navbar';
import RelatedVideos from './relatedVideos';


export default class App extends Component {
    render() {
        return (
        <div className='app'>
            <h1>Video App</h1>
            <Navbar/>
            <Videos />
            <RelatedVideos />
        </div>
        );
    }
}