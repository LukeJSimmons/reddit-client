import React from "react";

import './Post.css';

import { Link } from "react-router-dom";

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
                    <Link to={"/"+props.postId}><h3>{props.title}</h3></Link>
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