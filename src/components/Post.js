import React from "react";

import './Post.css';

function Post(props) {
    function increase() {
        props.increaseVotes();
    }

    function decrease() {
        props.decreaseVotes();
    }

    return (
        <div className="Post">
            <div id="post-contents">
                <div id="votes">
                    <button onClick={increase}>up</button>
                    <p>{props.votes}</p>
                    <button onClick={decrease}>down</button>
                </div>
                <div>
                    <h2>{props.title}</h2>
                    <img src={props.image} alt="" />
                </div>
            </div>
            <div id="post-info">
                <p>Posted by {props.author}</p>
                <p>{props.date} Hours Ago</p>
                <p>{props.comments}</p>
            </div>
        </div>
    );
}

export default Post;