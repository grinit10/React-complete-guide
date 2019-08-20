import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import NewPost from './NewPost/NewPost'

class Blog extends Component {
    render () {
        return (
            <div>
                <nav className='Blog'>
                    <ul>
                        <li><NavLink 
                        to='/' 
                        exact 
                        activeClassName='my-active'
                        activeStyle={{
                            color : 'orange',
                            textDecoration : 'underline'
                        }}>Home</NavLink></li>
                        <li><NavLink to={{
                            pathname : "/new-post", //absolute path
                            hash : '#submit', //to add some id after the URL
                            search : '?quick-submit=true' //search allows us query string
                        }}>New Post</NavLink></li>
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