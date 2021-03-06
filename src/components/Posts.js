import React, { useState, useEffect } from 'react';
import Post from './Post'
import Modal from '../components/Modal'

//sets state of posts and post to appropriate json data
export default function Posts() {
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState(null);
    const [activePost, setActivePost] = useState([]);
    
    useEffect (() => {
      return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json));
    }, []);
    
    //iterate through posts to display all of them
    const displayPosts = () => {
        return posts.map((post) => {
            return <Post setActivePost={setActivePost} setUser={setUser} key={post.id} title={post.title} id={post.userId} body={post.body}></Post>
        })
    }

    //renders modal if user set
    const displayModal = () => {
        if(user){
            return <Modal activePost={activePost} userName={user.name} catchPhrase={user.company.catchPhrase}></Modal>
        } 
    }
    
    return (
        <div>
            <h2>Click on a post for more details:</h2>
            {displayPosts()}
            {displayModal()}
        </div>
    );
}
