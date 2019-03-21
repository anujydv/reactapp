import React, { Component } from 'react';
import axios from "axios";
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts:[],
        slelctedPostId:null,
        error:false
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            const posts = response.data.slice(0, 4);
            const updatePost = posts.map(post=>{
                return {
                    ...post,
                    author: "Max"
                };
            });
            this.setState({posts:updatePost});
            // console.log(response);
        }).catch(error=>{
            this.setState({error:true});
        });
    }

    postSelectHandler = (id)=>{
        this.setState({slelctedPostId:id});
    }
    render () {
        let posts = <p style={{textAlign:"center"}}>Something went wrong</p>
        if(!this.state.error){
             posts = this.state.posts.map(post=>{
                    return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={()=> this.postSelectHandler(post.id)}/>;
        });
        }        
        return (
            <div>
                <section className="Posts">
                {posts}
                </section>
                <section>
                    <FullPost id={this.state.slelctedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;