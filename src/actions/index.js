import {
    GET_VIDEOS
} from './types';

import axios from 'axios';

export function fetchVideos() {
    return function(dispatch) {
        axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=javascript+react&type=video&videoDefinition=high&maxResults=1&key=AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g")
            .then(response => {
                dispatch({
                    type: GET_VIDEOS,
                    payload: response.data.items
                });
            });
    }
}

// `https://www.googleapis.com/youtube/v3/search?part=snippet&order=${SEARCH_BY}&q=${QUERY_BY}&type=${video}&videoDefinition=high&maxResults=${NUM_RESULTS}&key=AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g`

// API KEY => AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g