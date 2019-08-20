import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost'

class Blog extends Component {
    render () {
        return (
            <div>
                <nav className='Blog'>
                    <ul>
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/full-post'>Full Post</a></li>
                    </ul>
                </nav>
                <section>
                    {/* <Route path='/' render={() => <Posts />}/> */}
                    <Route path='/' exact component={Posts} />
                    <Route path='/new-post' component={NewPost} />

                </section>
            </div>
        );
    }
}

export default Blog;