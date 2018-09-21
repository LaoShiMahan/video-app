import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import YouTube from 'react-youtube';

class Video extends Component {
    componentDidMount() {
        this.props.fetchVideos();
    }

    __onReady = (event) => {
        event.target.pauseVideo();
    }

    renderVideos = (opts) => {
        let videos = this.props.videos.map((video, index) => {
            console.log(video)
            return (
                <div className="video" key={index}>
                    <span>{ video.snippet.title }</span>
                    <span>{ video.snippet.description }</span>
                    <YouTube videoId={ video.id.videoId } opts={ opts } onReady={ this._onReady } />
                </div>
            )
        })
        return videos;
    }

    render() {   

        const opts = {
            height: "390",
            width: "640",
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
    let { videos } = state.videos
    return { videos };
}

Video = connect(mapStateToProps, actions)(Video);

export default Video;