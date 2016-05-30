import request from '../util/request';
import store from '../stores';
import newsFeedAction from '../actions/newsFeedAction';
import config from 'config';

var newsFeedDs = {
    getMessages: function () {
        // One second delay here to demonstrate the state when network is slow
        setTimeout(function () {
            request.get('/streetlife-coding-challenge/newsfeed.json')
                .then(function (response) {
                    store.dispatch(newsFeedAction.getMessagesSuccess(response.data));
                })
                .catch(function () {
                    // @TODO Not implemented, store.dispatch(newsFeedAction.getMessagesFailed(response.data)); should be called and render a "Load more button at the end for retry instead of a empty message box"
                });
        }, config.LOAD_MESSAGE_DELAY);
    }
};

export default newsFeedDs;
