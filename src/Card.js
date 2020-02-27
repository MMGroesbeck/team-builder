import React from 'react';
import './Card.css';

const Card = ({ member, chooseMember }) => {
    const handleClick = e => {
        chooseMember(member);
    }
    return (
        <div className="member-card">
            <h2>Name: {member.name}</h2>
            <p>Role: {member.role}</p>
            <p>Email: {member.email}</p>
            <div className="edit-button">
                <button onClick={handleClick}>Edit</button>
            </div>
        </div>
    )
}

export default Card;