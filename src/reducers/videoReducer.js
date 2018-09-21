import {
    GET_VIDEOS
} from '../actions/types';

const INITIAL_STATE = {
    videos: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_VIDEOS:
            const videos = action.payload
            return {
                ...state,
                videos
            };
        default:
            return state;
    }
}