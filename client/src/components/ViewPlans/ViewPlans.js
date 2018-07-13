import React from 'react';

const ViewPlans = (props) => (
    <div>
      {props.plans.map(post => (   
        <ul className="list-group" key={post._id}>
           <li className="list-group-item">
            <h3>{post.title}</h3>
            <p>Guests: {post.guests}</p>
            <p>Activity: {post.activity}</p>
            <p>Relationship: {post.relationship}</p>
            <p>Date: {post.date}</p>
            <p>Notes: {post.notes}</p>
            </li>
        </ul>
        ))
    }
    </div>
);

export default ViewPlans;

