import {
    GET_VIDEOS
} from '../actions/types';

const INITIAL_STATE = {
    initialVideos: [],
    relatedVideos: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_VIDEOS:
            const videos = action.payload;
            return {
                ...state,
                ...videos
            };
            break;
        default:
            return state;
    }
}