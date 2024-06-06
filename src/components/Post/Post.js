import React from "react";

import './Post.css';

import Arrow from '../../images/Arrow.png';

import { Link } from "react-router-dom";

function Post(props) {

    return (
        <div className="Post">
            <div id="post-contents">
                <div id="votes">
                    <img id="up" className="arrow" src={Arrow} />
                    <p>{props.votes}</p>
                    <img id="down" className="arrow" src={Arrow} />
                </div>
                <div>
                    <Link to={"/"+props.postId}><h3>{props.title}</h3></Link>
                    <img src={props.image} alt="" />
                </div>
            </div>
            <div id="post-info">
                <p>Posted by<br/>{props.author}</p>
                <p>{props.date} Hours Ago</p>
                <p>{props.comments}<br/>Comments</p>
            </div>
        </div>
    );
}

export default Post;