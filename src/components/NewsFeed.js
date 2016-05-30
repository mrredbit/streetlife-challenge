import React from 'react';
import MessageContainer from '../containers/MessageContainer';
import EmptyMessageContainer from '../containers/EmptyMessageContainer';

class NewsFeed extends React.Component {
    render() {
        return (
            <div id='news-feed' className='container col sm-12-12 md-fix'>
                {
                    this.props.messages && this.props.messages.map(function (message, index) {
                        return <MessageContainer key={message.id} message={message} index={index}/>
                    })
                }
                <EmptyMessageContainer/>

                {
                    /* Add two more EmptyMessageContainer to fill up the space of initial state, when messages are loaded, only show one EmptyMessageContainer at the bottom for infinite scrolling use */
                    !this.props.isNewsFeedReady && (
                        <div>
                            <EmptyMessageContainer/>
                            <EmptyMessageContainer/>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default NewsFeed;
