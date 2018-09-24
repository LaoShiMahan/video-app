import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import YouTube from 'react-youtube';

class Video extends Component {
    __onReady = (event) => {
        event.target.pauseVideo();
    }

    renderVideos = (opts) => {
        let videos = this.props.videos.map((video, index) => {
            return (
                <div className="video" key={index}>
                    <span className="video__title">{ video.snippet.title }</span>
                    <span className="video__description">{ video.snippet.description }</span>
                    <YouTube videoId={ video.id.videoId } opts={ opts } onReady={ this._onReady } />
                </div>
            )
        })
        return videos;
    }

    render() {   

        const opts = { // Contains default video options
            height: "195",
            width: "320",
            playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 0
            }
        };

        return (
            <div className="videos">
                {
                    this.renderVideos(opts)
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let { videos } = state.videos
    return { videos };
}

Video = connect(mapStateToProps, actions)(Video);

export default Video;