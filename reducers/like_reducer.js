import _ from 'lodash';
import {LIKE_JOB,CLEAR_LIKED_JOBS} from '../actions/types';

export default function(state=[],action) {
    switch(action.type) {
        case CLEAR_LIKED_JOBS:
            return [];
        case LIKE_JOB:
            // console.log('---- test_4 ----');
            // console.log(action.payload);
            return _.uniqBy([action.payload,...state],'jobKey');
        default:
            return state;
    }
}