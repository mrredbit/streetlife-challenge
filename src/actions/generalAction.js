import actionTypes from '../actions/const';

const generalAction = {
    toggleApiErrorDemo: function (data) {
        return {
            source: actionTypes.ACTION_SOURCE.USER_ACTION,
            type: actionTypes.GENERAL.TOGGLE_API_ERROR_DEMO,
            data: data
        };
    }
};

export default generalAction;
