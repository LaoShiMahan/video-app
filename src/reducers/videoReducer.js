import {
    GET_VIDEO,
    GET_REACT_VIDEOS
} from '../actions/types';

const INITIAL_STATE = {
    videos: [],
    reactVideos: []
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case GET_VIDEO:
            const videos = action.payload
            return {
                ...state,
                videos
            };
        case GET_REACT_VIDEOS:
            const reactVideos = action.payload
            return {
                ...state,
                reactVideos
            };
        default:
            return state;
    }
}