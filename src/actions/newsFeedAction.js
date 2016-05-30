import actionTypes from '../actions/const';

const newsFeedAction = {
    getMessagesSuccess: function (data) {
        return {
            source: actionTypes.ACTION_SOURCE.API_ACTION,
            type: actionTypes.NEWS_FEED.GET_MESSAGES_SUCCESS,
            data: data
        };
    },

    getCommentsSuccess: function (data) {
        return {
            source: actionTypes.ACTION_SOURCE.API_ACTION,
            type: actionTypes.NEWS_FEED.GET_COMMENTS_SUCCESS,
            data: data
        };
    },

    getCommentsFail: function (data) {
        return {
            source: actionTypes.ACTION_SOURCE.API_ACTION,
            type: actionTypes.NEWS_FEED.GET_COMMENTS_FAIL,
            data: data
        };
    },

    toggleCommentsHideShow: function (data) {
        return {
            source: actionTypes.ACTION_SOURCE.USER_ACTION,
            type: actionTypes.NEWS_FEED.TOGGLE_COMMENTS_HIDE_SHOW,
            data: data
        }
    },

    showCommentInput: function (data) {
        return {
            source: actionTypes.ACTION_SOURCE.USER_ACTION,
            type: actionTypes.NEWS_FEED.SHOW_COMMENT_INPUT,
            data: data
        }
    },

    showFullMessageBody: function (data) {
        return {
            source: actionTypes.ACTION_SOURCE.USER_ACTION,
            type: actionTypes.NEWS_FEED.SHOW_FULL_MESSAGE_BODY,
            data: data
        }
    }
}

export default newsFeedAction;
