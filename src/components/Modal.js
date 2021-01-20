import React, { useState } from 'react';

    export default function Modal(props) {

        const btnClick = () => {
            const backDrop = document.querySelector('.backdrop');
            const modal = document.querySelector('.modal');
            modal.style.display = "none" 
            backDrop.style.display = "none"   
        }


        return (
            <div className="modal">
                <p><span className="bold">Author: </span>{props.userName}</p>
                <p><span className="bold">catchPhrase: </span>{props.catchPhrase}</p>
                <p><span className="bold">Title: </span>{props.activePost.title}</p>
                <p><span className="bold">Post: </span>{props.activePost.body}</p>
                <button onClick={btnClick}>Close</button>
            </div>
        )
    }
    