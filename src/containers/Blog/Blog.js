import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from '../Blog/Posts/Posts';
//import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    state = {
        auth : true
    }

    render () {
        return (
            <div>
                <nav className='Blog'>
                    <ul>
                        <li><NavLink 
                        to='/posts' 
                        exact 
                        activeClassName='my-active'
                        activeStyle={{
                            color : 'orange',
                            textDecoration : 'underline'
                        }}>Posts</NavLink>
                        </li>

                        <li><NavLink to={{
                            pathname : "/new-post", //absolute path
                            hash : '#submit', //to add some id after the URL
                            search : '?quick-submit=true' //search allows us query string
                        }}>New Post</NavLink>
                        </li>

                    </ul>
                </nav>
                <section>
                    {/* <Route path='/' render={() => <Posts />}/> */}
                    <Switch>
                       {this.state.auth ? <Route path='/new-post' exact component={AsyncNewPost}/> : null} 
                        <Route path='/id/:id' exact component={FullPost}/>
                        <Route path='/posts' exact component={Posts} />
                        <Route render={()=> <h1>Not Found</h1>} />
                        {/* <Redirect from='/' to='/posts'/> */}
                    </Switch>
                </section>
            </div>
        );
    }
}

export default Blog;