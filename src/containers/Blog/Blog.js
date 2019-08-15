import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts : [],
        selectedPost : null,
        error : false
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(response => {
                    const posts = response.data.slice(0, 4);
                    const updatedPost = posts.map(post => {
                        return {
                            ...post,//it will map Array's properties.
                            author : 'Arpita'
                        }
                    })
                    this.setState({posts : updatedPost});
                })
                .catch(error => {
                    this.setState({error : true});
                });
    }

    fullPostHandler = (id) => {
        this.setState({selectedPost : id});
    }
    render () {
        let posts = <p>Something went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    click={() => this.fullPostHandler(post.id)} />;
            })
        }
        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;