import {
    GET_VIDEO
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

// https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.playlistItems.list?part=snippet,contentDetails,status&playlistId=UUK8sQmJBp8GCxrOtXWBpyEA
// API KEY => AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g