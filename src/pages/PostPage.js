import React from "react";

import { useOutletContext } from 'react-router-dom';

import './PostPage.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPost from "../components/LoadingPost/LoadingPost";

function PostPage() {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const page = useOutletContext();

    useEffect(() => {
        async function getPage() {
          setIsLoading(true);
          try {
            const response = await fetch(`https://www.reddit.com/${page}`);
      
            if (!response.ok) {
              throw new Error('Response is not ok');
            }
        
            const data = await response.json();
            setPosts(data.data.children.map(post => post.data));
          } catch (error) {
            console.log('Error fetching data:', error);
          } finally {
            setIsLoading(false);
          }
        }
      
        getPage();
    }, [page]);

    function getPost(id) {
        return posts.filter(post => post.id === id)[0];
    }

    const {id} = useParams();

    if (!isLoading) {
        const post = getPost(id);

        const pastDate = new Date(post.created * 1000).getTime();
        const currentDate = new Date().getTime();

        let time = Math.floor((currentDate-pastDate)/(1000*60*60));

        return (
            <div className="container">
                <div id="PostPage">
                    <div id="postpage-contents">
                        <h3>{post.title}</h3>
                        <p>{post.selftext}</p>
                        <img id="midImg" src={post.thumbnail} alt="" />
                        <a href={post.url} target="_blank" rel="noreferrer">Read Full Post</a>
                        <div id="postpage-info">
                            <p>Posted by {post.author}</p>
                            <p>{time}h Ago</p>
                            <p>Comments: {post.num_comments}</p>
                        </div>
                    </div>
                    {post.thumbnail === 'self' ? (<div></div>) : (<img id="rightImg" src={post.thumbnail} alt="" />)}
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <LoadingPost />
            </div>
        );
    }
}

export default PostPage;