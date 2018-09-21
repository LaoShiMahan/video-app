import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ReactVideos extends Component {
    componentDidMount() {
        this.props.fetchReactVideos();
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return state
}

ReactVideos = connect(mapStateToProps, actions)(ReactVideos);

export default ReactVideos;