import React from 'react';

import PostListItem from './PostListItem/PostListItem.jsx';
import './PostList.css';

const PostList = () => {
    return (
        <ul className = "post-list list-group">
            <PostListItem />
            <PostListItem />
            <PostListItem />
        </ul>
    )
}

export default PostList;