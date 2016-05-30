import React from 'react';
import moment from 'moment';
import config from 'config';
import htmlTruncate from 'trunc-html';
import CommentContainer from '../containers/CommentContainer';
import currentUserAvatar from '../styles/img/leftSection/profile-david-chiu.svg';
import Textarea from 'react-textarea-autosize';
import classnames from 'classnames';

class Message extends React.Component {
    render() {
        if (this.props.message) {
            var message = this.props.message,
                avatar = message.author && message.author.avatar,
                displayName = message.author && message.author.display_name,
                nearestArea = message.author && message.author.nearest_area && message.author.nearest_area.name,
                updatedAt = message.updated_at && moment(message.updated_at).fromNow(),
                subject = {__html: message.subject},
                isExceedShortPostMaxLength = message.body && (message.body.length > config.SHORT_POST_MAX_LENGTH),
                body = {__html: (isExceedShortPostMaxLength && !message.isShowFullBody) ? htmlTruncate(message.body, config.SHORT_POST_MAX_LENGTH).html : message.body},
                messageId = message.id,
                totalCommentCount = message.comments_count,
                tags = message.tags,
                comments = message.comments,
                isShowComment = message.isShowComment,
                isShowCommentInput = message.isShowCommentInput,
                isShowGetCommentError = message.isShowGetCommentError,
                viewEarlierComments = this.props.viewEarlierComments,
                toggleCommentsHideShow = this.props.toggleCommentsHideShow,
                showCommentInput = this.props.showCommentInput,
                showFullMessageBody = this.props.showFullMessageBody;

            return (
                <section className='message'>
                    <section className='main-post'>
                        <div className='author-info'>
                            <img className='avatar' src={avatar}/>

                            <div className='right-container'>
                                <div className='display-name'>{displayName}</div>
                                <div className='nearest-area'>{nearestArea}</div>
                                <div className='updated-at'>{updatedAt }</div>
                            </div>
                        </div>
                        <header className='subject' dangerouslySetInnerHTML={subject}/>
                        <article className='body'>
                            <span dangerouslySetInnerHTML={body}/>
                            {
                                isExceedShortPostMaxLength && !message.isShowFullBody && (
                                    <span className='read-more' onClick={showFullMessageBody.bind(this, messageId)}>Read more</span>
                                )
                            }
                        </article>
                        {
                            tags && (
                                <ul className='tags-container'>
                                    {
                                        tags.map(function (tag) {
                                            return <li key={tag.id} className='tag'>{tag.name}</li>;
                                        })
                                    }
                                </ul>
                            )
                        }
                        <div className='main-post-footer'>
                            <div className='write-comment'
                                 onClick={showCommentInput.bind(this, messageId)}>Write
                                comment
                            </div>
                            {
                                (totalCommentCount > 0) && (
                                    <div className='comment-count'
                                          onClick={toggleCommentsHideShow.bind(this, messageId)}>{totalCommentCount + ' comment' + (totalCommentCount > 1 ? 's' : '')}</div>
                                )
                            }
                        </div>
                    </section>
                    {
                        (isShowComment !== false) && (
                            <section className='comment-section'>
                                {
                                    isShowCommentInput && (
                                        <div className='write-comment-container'>
                                            <img src={currentUserAvatar} className='current-user-avatar'/>

                                            <div className='comment-input-container'>
                                                <Textarea className='comment-input' placeholder="Write a comment..."/>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    comments && (comments.length > 0) && (
                                        <div className='comment-list-container'>
                                            {
                                                /* if there is more commnet to view */
                                                comments && (totalCommentCount > 0) && (totalCommentCount > comments.length) && (
                                                    <div className='view-earlier-comment-container'>
                                                        <div className='comment-count'>
                                                            {/* Since we don't really have a real api that return correct comments, 5 at a time now, it may have some case that comment number exceed total comment number, below logic is to prevent this*/}
                                                            {((comments.length > totalCommentCount) ? totalCommentCount : comments.length) + ' of ' + totalCommentCount}
                                                        </div>
                                                        {
                                                            <div
                                                                className={classnames('view-earlier-comment', {'error': isShowGetCommentError})}
                                                                onClick={viewEarlierComments.bind(this, messageId, comments.length > 0 ? comments[0].id : null)}>
                                                                {
                                                                    isShowGetCommentError ? 'Error loading comments, retry' : 'View earlier replies'
                                                                }
                                                            </div>
                                                        }
                                                    </div>
                                                )
                                            }
                                            {
                                                comments && (
                                                    <section className='comment-list'>
                                                        {
                                                            comments.map(function (comment) {
                                                                return (
                                                                    <CommentContainer key={comment.id}
                                                                                      className='comment'
                                                                                      comment={comment}>
                                                                        {comment.body}
                                                                    </CommentContainer>
                                                                )
                                                            })
                                                        }
                                                    </section>
                                                )
                                            }
                                        </div>
                                    )
                                }
                            </section>
                        )
                    }
                </section>
            );
        } else {
            return false;
        }

    }
}

export default Message;
