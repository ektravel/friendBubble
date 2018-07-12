import React from 'react';

const ViewContact = (props) => (
    <div>
        {
        props.contacts.map(post => (
            <div key={post._id}>
                <h1>{post.name}</h1>
                <p>
                {post.email}
                {post.relationship}
                {post.occupation}
                {post.notes}
                </p>
            </div>))
        }
    </div>
);

export default ViewContact;

