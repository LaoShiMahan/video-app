import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

class Videos extends Component {
    __onReady = (event) => {
        event.target.pauseVideo();
    }

    renderVideos = (opts) => {
        let videos = this.props.initialVideos.map((video, index) => {
            return (
                <div className="video" key={ index }>
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
    let { initialVideos } = state.videos
    return { initialVideos };
}

Videos = connect(mapStateToProps)(Videos);

export default Videos;