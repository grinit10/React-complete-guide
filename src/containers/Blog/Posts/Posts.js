import React, { Component } from 'react';
import axios from '../../../Axios';
import Post from '../../../components/Post/Post';
import './Posts.css';


class Posts extends Component {
	state = {
        posts : [],
        selectedPost : null,
        error : false
	}
	
	componentDidMount(){
        axios.get('/posts')
                .then(response => {
                    //console.log("from local request");
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
                    console.log("from local error");
                    this.setState({error : true});
                });
	}
	
	fullPostHandler = (id) => {
        //this.props.history.push({pathname : '/id/' + id});
        this.props.history.push('/id/' + id);

	}
	
	render(){
		let posts = <p>Something went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                // <Link to={'/id/' + post.id}  >
                <Post 
                    key={post.id}
                    title={post.title} 
                    author={post.author}
                    click={() => this.fullPostHandler(post.id)}  />
                // </Link>
                );
            })
        }
		return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
            </div>
		);
	}
}

export default Posts;