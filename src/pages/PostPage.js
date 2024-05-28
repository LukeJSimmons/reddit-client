import React from "react";

import '../components/Post.css';

function PostPage(props) {

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
                    <p>{props.selftext}</p>
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

export default PostPage;