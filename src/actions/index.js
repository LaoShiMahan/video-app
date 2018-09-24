import {
    GET_VIDEOS
} from './types';

import axios from 'axios';

export function fetchVideos(query) {
    return function(dispatch) {
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${query}&type=video&videoDefinition=high&maxResults=5&key=AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g`)
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