import {
    GET_VIDEOS
} from './types';

import axios from 'axios';

export function fetchVideos(query) {
    return async function(dispatch) {
        
        const initialVideos = await fetchInitialVideos(query);
        const relatedVideos = await fetchRelatedVideos(initialVideos[0].id.videoId);

        dispatch({
            type: GET_VIDEOS,
            payload: { 
                initialVideos,
                relatedVideos
            }
        });
    }
}

async function fetchInitialVideos(query) {
    let videos;
    await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=${query}&type=video&videoDefinition=high&maxResults=1&key=AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g`)
        .then(response => {
            videos = response.data.items
        });
    return videos
}

async function fetchRelatedVideos(_id) {
    let relatedVideos;
    await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&type=video&videoDefinition=high&maxResults=5&relatedToVideoId=${_id}&key=AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g`)
            .then(response => {
                relatedVideos = response.data.items
            });
        return relatedVideos;
}

// `https://www.googleapis.com/youtube/v3/search?part=snippet&order=${SEARCH_BY}&q=${QUERY_BY}&type=${video}&videoDefinition=high&maxResults=${NUM_RESULTS}&key=AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g`

// API KEY => AIzaSyCK5_-pnmgJEudaLhHl0EDvyvi-JAQ7E-g