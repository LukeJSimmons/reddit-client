import React from "react";

import './LoadingPost.css';

function LoadingPost() {

    return (
        <div className="LoadingPost">
            <div id="post-contents">
                <div id="votes">
                    <button >__</button>
                    <p>_______</p>
                    <button >__</button>
                </div>
                <div>
                    <h3>_____________________________________________</h3>
                    <img alt="" />
                </div>
            </div>
            <div id="post-info">
                <p>_______________</p>
                <p>_______________</p>
                <p>_______________</p>
            </div>
        </div>
    );
}

export default LoadingPost;