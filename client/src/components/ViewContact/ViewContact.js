import React from 'react';

const ViewContact = (props) => (
    <div>
      {props.contacts.map(post => (   
        <ul className="list-group" key={post._id}>
           <li className="list-group-item">
            <h3>{post.name}</h3>
            <p>Email: {post.email}</p>
            <p>Relationship: {post.relationship}</p>
            <p>Occupation: {post.occupation}</p>
            <p>Notes: {post.notes}</p>
            </li>
        </ul>
        ))
    }
    </div>
);

export default ViewContact;
