import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import YouTube from 'react-youtube';

class Video extends Component {
    componentDidMount() {
        this.props.fetchReactVideos();
    }

    __onReady = (event) => {
        event.target.pauseVideo();
    }

    renderVideos = (opts) => {
        let videos = this.props.reactVideos.map((video, index) => {
            return <YouTube videoId={video.id.videoId} opts={opts} onReady={this._onReady} key={index} />
        })
        return videos;
    }

    render() {   

        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0
            }
        };

        return (
            <div>
                {
                    this.renderVideos(opts)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let { reactVideos } = state.reactVideos
    return { reactVideos };
}

Video = connect(mapStateToProps, actions)(Video);

export default Video;