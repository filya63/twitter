import React from 'react';
import Header from './Header/Header.jsx';
import SearchPanel from './Header/SearchPanel/SearchPanel.jsx';
import PostStatusFilter from './PostList/PostFilter/PostFilter.jsx';
import PostList from './PostList/PostList.jsx';
import AddNewPost from './PostList/AddNewPost/AddNewPost.jsx';

const App = () => {
    return (
       <div className="app">
            <Header/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <AddNewPost/>
       </div>
    )
}

export default App;