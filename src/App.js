import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';
import './App.css';

function App() {
  const [teamList, setTeamList] = useState([{id: 0, name: "Fife Fidsplitter", email: "What's that?", role: "Hole-poker"}]);
  const [memberToEdit, chooseMember] = useState([]);
  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamList([...teamList, newMember]);
  }
  const editMember = member => {
    setTeamList(teamList.map(item => {
      if (item.id === member.id){
        return member;
      } else {
        return item;
      }
    })
    );
    chooseMember([]);
  }
  return (
    <div className="App">
      <Form addMember={addMember} memberToEdit={memberToEdit} editMember={editMember}/>
      <div className="team-list">
        {teamList.map(member => (
          <Card member={member} chooseMember={chooseMember}/>
        ))}
      </div>
    </div>
  );
}

export default App;
