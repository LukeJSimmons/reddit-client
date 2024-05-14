import React from "react";

import './Post.css';

function Post(props) {

    return (
        <div className="Post">
            <div id="post-contents">
                <div id="votes">
                    <button >up</button>
                    <p>{props.votes}</p>
                    <button >down</button>
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <img src={props.image} alt="" />
                </div>
            </div>
            <div id="post-info">
                <p>Posted by {props.author}</p>
                <p>{props.date} Hours Ago</p>
                <p>Comments: {props.comments}</p>
            </div>
        </div>
    );
}

export default Post;