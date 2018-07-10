import React from 'react';

const ViewBlog = (props) => (
    <div>
        {
        props.blogs.map(post => (
            <div key={post._id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>))
        }
    </div>
);

export default ViewBlog;
