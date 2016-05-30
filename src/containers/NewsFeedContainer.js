import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsFeed from '../components/NewsFeed';
import newsFeedDs from '../datasources/newsFeedDs';

class NewsFeedContainer extends Component {
    componentDidMount() {
        newsFeedDs.getMessages();
    }

    render() {
        return <NewsFeed messages={this.props.messages} isNewsFeedReady={this.props.isNewsFeedReady}/>;
    }
}

function mapStateToProps(state) {
    const props = {
        messages: state.newsFeedState.messages,
        isNewsFeedReady: state.newsFeedState.isReady
    };
    return props;
}

export default connect(mapStateToProps)(NewsFeedContainer);
