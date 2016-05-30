import React from 'react';
import Comment from '../components/Comment';

var CommentContainer = function (props) {
    return <Comment comment={props.comment}/>
}

export default CommentContainer;
