import actionTypes from '../actions/const';
import update from 'react-addons-update';

const initialNewsFeedState = {};

const newsFeedReducer = function (newsFeedState = initialNewsFeedState, action = null) {

    switch (action.type) {
        case actionTypes.NEWS_FEED.GET_MESSAGES_SUCCESS:
            return Object.assign({}, newsFeedState, {
                isReady: true,
                messages: action.data.messages
            });
        case actionTypes.NEWS_FEED.GET_COMMENTS_SUCCESS:
            if (newsFeedState.messages && action.data && action.data.messageId && action.data.earlierComments) {
                var messageIndex = newsFeedState.messages.findIndex(function (message) {
                    return message.id === action.data.messageId;
                });
                if (messageIndex !== -1) {
                    return update(newsFeedState, {
                        messages: {
                            [messageIndex]: {
                                comments: {
                                    $unshift: action.data.earlierComments.reverse()
                                },
                                isShowGetCommentError: {
                                    $set: false
                                }
                            }
                        }
                    });
                }
            }
            break;
        case actionTypes.NEWS_FEED.GET_COMMENTS_FAIL:
           debugger;
            if (newsFeedState.messages && action.data && action.data.messageId) {
                var messageIndex = newsFeedState.messages.findIndex(function (message) {
                    return message.id === action.data.messageId;
                });
                if (messageIndex !== -1) {
                    return update(newsFeedState, {
                        messages: {
                            [messageIndex]: {
                                isShowGetCommentError: {
                                    $set: true
                                }
                            }
                        }
                    });
                }
            }
            break;
        case actionTypes.NEWS_FEED.TOGGLE_COMMENTS_HIDE_SHOW:
            if (action.data.messageId) {
                var messageIndex = newsFeedState.messages.findIndex(function (message) {
                    return message.id === action.data.messageId;
                });
                if (messageIndex !== -1) {
                    var shouldShowComments = newsFeedState.messages[messageIndex].isShowComment === false;
                    return update(newsFeedState, {
                        messages: {
                            [messageIndex]: {
                                isShowComment: {
                                    $set: shouldShowComments
                                }
                            }
                        }
                    });
                }
            }
            break;
        case actionTypes.NEWS_FEED.SHOW_COMMENT_INPUT:
            if (action.data.messageId) {
                var messageIndex = newsFeedState.messages.findIndex(function (message) {
                    return message.id === action.data.messageId;
                });
                if (messageIndex !== -1) {
                    return update(newsFeedState, {
                        messages: {
                            [messageIndex]: {
                                isShowCommentInput: {
                                    $set: true //
                                },
                                isShowComment: {
                                    $set: true // always show comments when user click "write comment"
                                }
                            }
                        }
                    });
                }
            }
            break;
        case actionTypes.NEWS_FEED.SHOW_FULL_MESSAGE_BODY:
            if (action.data.messageId) {
                var messageIndex = newsFeedState.messages.findIndex(function (message) {
                    return message.id === action.data.messageId;
                });
                if (messageIndex !== -1) {
                    return update(newsFeedState, {
                        messages: {
                            [messageIndex]: {
                                isShowFullBody: {
                                    $set: true
                                }
                            }
                        }
                    });
                }
            }
            break;
    }

    return newsFeedState;
};

export default newsFeedReducer;
