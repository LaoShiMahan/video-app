import {
    GET_VIDEO,
    GET_REACT_VIDEOS
} from './types';

import axios from 'axios';

export function fetchVideo() {
    return function(dispatch) {
        axios.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails%2Cstatus&playlistId=UUK8sQmJBp8GCxrOtXWBpyEA&key=AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g")
            .then(response => {
                dispatch({
                    type: GET_VIDEO,
                    payload: response.data.items
                });
            });
    }
}

export function fetchReactVideos() {
    return function(dispatch) {
        axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=javascript+react&type=video&videoDefinition=high&key=AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g")
            .then(response => {
                console.log(response.data.items)
                dispatch({
                    type: GET_REACT_VIDEOS,
                    payload: response.data.items
                });
            });
    }
}

// API KEY => AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g