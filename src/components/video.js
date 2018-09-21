import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import YouTube from 'react-youtube';

class Video extends Component {
    componentDidMount() {
        this.props.fetchVideo();
    }

    __onReady = (event) => {
        event.target.pauseVideo();
    }

    renderVideos = (opts) => {
        let videos = this.props.videos.map((video, index) => {
            return <YouTube videoId={video.contentDetails.videoId} opts={opts} onReady={this._onReady} key={index} />
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
                <YouTube
                    videoId="2g811Eo7K8U"
                    opts={opts}
                    onReady={this._onReady}
                />
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