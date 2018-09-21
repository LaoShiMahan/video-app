import {
    GET_VIDEO
} from '../actions/types';

const INITIAL_STATE = {
    videos: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_VIDEO:
            const videos = action.payload
            return {
                ...state,
                videos
            };
        default:
            return state;
    }
}