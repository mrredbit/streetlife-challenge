import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';
import newsFeedDs from '../datasources/newsFeedDs';
import newsFeedCommentDs from '../datasources/newsFeedCommentDs';
import newsFeedAction from '../actions/newsFeedAction';
import store from '../stores';

class MessageContainer extends Component {
    toggleCommentsHideShow(messageId) {
        store.dispatch(newsFeedAction.toggleCommentsHideShow({
            messageId: messageId
        }));
    }

    showCommentInput(messageId) {
        store.dispatch(newsFeedAction.showCommentInput({
            messageId: messageId
        }));
    }
    showFullMessageBody(messageId) {
        store.dispatch(newsFeedAction.showFullMessageBody({
            messageId: messageId
        }));
    }
    render() {
        return <Message message={this.props.message} viewEarlierComments={newsFeedCommentDs.getNewsFeedComments}
                        toggleCommentsHideShow={this.toggleCommentsHideShow}
                        showCommentInput={this.showCommentInput}
                        showFullMessageBody= {this.showFullMessageBody}/>
    }
}

function mapStateToProps(state, ownProps) {
    const props = {
        message: ownProps.message
    };
    return props;
}


export default connect(mapStateToProps)(MessageContainer);

