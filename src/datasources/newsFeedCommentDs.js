import store from '../stores';
import request from '../util/request';
import newsFeedAction from '../actions/newsFeedAction';

var newsFeedCommentDs = {

    getNewsFeedComments: function (messageId, oldestCommentId) {
        /**
         * To mock api pagination
         * Fetch 5 comment at a time
         */
        var getEarlierComment = function (comments, oldestCommentId) {
            var fetchSize = 5,
                commentIndex = comments.findIndex(function (comment) {
                    return comment.id === oldestCommentId;
                });
            commentIndex = (commentIndex !== -1) ? commentIndex : comments.length - 1; // Use last index if none of comment id match
            return comments.slice((commentIndex - fetchSize) > 0 ? commentIndex - fetchSize : 0, commentIndex);
        }

        /**
         * store.getState().generalState.isApiErrorDemo is used to demo handling of an error response
         */
        request.get(store.getState().generalState.isApiErrorDemo ? '/streetlife-coding-challenge/error.json' : '/streetlife-coding-challenge/comments.json')
            .then(function (response) {
                if (response.data && response.data.comments) {
                    var earlierComments = getEarlierComment(response.data.comments, oldestCommentId);
                    store.dispatch(newsFeedAction.getCommentsSuccess({
                        earlierComments: earlierComments,
                        messageId: messageId
                    }));
                }
            })
            .catch(function () {
                store.dispatch(newsFeedAction.getCommentsFail({
                    messageId: messageId
                }));
            });
    }
};

export default newsFeedCommentDs;
