import actionTypes from '../actions/const';
import config from 'config';

const initialGeneralState = {};

const generalReducer = function (generalState = initialGeneralState, action = null) {

    switch (action.type) {
        case actionTypes.GENERAL.TOGGLE_API_ERROR_DEMO:
            return Object.assign({}, generalState, {isApiErrorDemo: !generalState.isApiErrorDemo});
    }
    return generalState;
};

export default generalReducer;
