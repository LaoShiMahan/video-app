import React, { Component } from 'react';
import { connect } from 'react-redux';
import YouTube from 'react-youtube';

class RelatedVideos extends Component {
    renderRelatedVideos = (opts) => {
        let relatedVideos = this.props.relatedVideos.map((relatedVideo, index) => {
            return (
                <div className="relatedVideo" key={ index }>
                    <span className="relatedVideo__title">{ relatedVideo.snippet.title }</span>
                    <span className="relatedVideo__description">{ relatedVideo.snippet.description }</span>
                    <YouTube videoId={ relatedVideo.id.videoId } opts={ opts } onReady={ this._onReady } />
                </div>
            )
        })
        return relatedVideos;
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
            <div>
                { this.renderRelatedVideos(opts) }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    let { relatedVideos } = state.videos;
    return { relatedVideos };
}

RelatedVideos = connect(mapStateToProps)(RelatedVideos);

export default RelatedVideos;