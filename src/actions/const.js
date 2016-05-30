import keyMirror from 'keymirror';

const actionTypes = {
    NEWS_FEED: keyMirror({
        GET_MESSAGES_SUCCESS: null,
        GET_MESSAGES_FAIL: null,
        GET_COMMENTS_SUCCESS: null,
        GET_COMMENTS_FAIL: null,
        TOGGLE_COMMENTS_HIDE_SHOW: null,
        SHOW_COMMENT_INPUT: null,
        SHOW_FULL_MESSAGE_BODY: null
    }),
    GENERAL: keyMirror({
        TOGGLE_API_ERROR_DEMO: null
    }),
    ACTION_SOURCE: keyMirror({
        USER_ACTION: null,
        API_ACTION: null
    })
}

export default actionTypes;


