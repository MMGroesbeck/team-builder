import React from 'react';
import './Card.css';

const Card = ({ member }) => {
    return (
        <div className="member-card">
            <h2>Name: {member.name}</h2>
            <p>Role: {member.role}</p>
            <p>Email: {member.email}</p>
        </div>
    )
}

export default Card;