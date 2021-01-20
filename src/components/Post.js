import React, { useState } from 'react';

// fetches author information and adds proper functionality to modal display
export default function Post(props) {
    const onClick = () => {
        props.setActivePost(props);
        return fetch(`https://jsonplaceholder.typicode.com/users/${props.id}`)
      .then((response) => response.json())
      .then((json) => props.setUser(json))
      .then(()=> {
        const backDrop = document.querySelector('.backdrop');
        const modal = document.querySelector('.modal');
        modal.style.display = "block" 
        backDrop.style.display = "block"
        backDrop.addEventListener('click', () => {
            modal.style.display = "none" 
            backDrop.style.display = "none"
        } )   
      })
    };
    //click handler on each post title
    return (
        <div>   
            <h3 onClick={onClick}>{props.title}</h3> 
        </div>
    )
}
