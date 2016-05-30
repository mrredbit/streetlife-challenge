import React from 'react';
import moment from 'moment';

class Comment extends React.Component {
    render() {
        return (
            <section className='comment'>
                <img className='avatar'
                     src={this.props.comment.author && this.props.comment.author.avatar}/>

                <div className='right-container'>
                    <div
                        className='display-name'>{this.props.comment.author && this.props.comment.author['display_name']}</div>
                    <div
                        className='updated-at'>{this.props.comment['updated_at'] && moment(this.props.comment['updated_at']).fromNow()}</div>
                    <article className='body' dangerouslySetInnerHTML={{__html: this.props.comment.body}}/>
                </div>
            </section>
        );
    }
}

export default Comment;
