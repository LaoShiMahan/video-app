import React, { Component } from 'react';
import Video from './video';
import ReactVideos from './reactVideos';

export default class App extends Component {
    render() {
        return (
        <div className='app'>
            <h1>Video App</h1>
            <Video />
        </div>
        );
    }
}
