import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamList, setTeamList] = useState([{name: "Fife Fidsplitter", email: "What's that?", role: "Hole-poker"}]);
  const addMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    }
    setTeamList([...teamList, newMember]);
  }
  return (
    <div className="App">
      <Form addMember={addMember}/>
      <div className="team-list">
        {teamList.map(member => (
          <Card member={member}/>
        ))}
      </div>
    </div>
  );
}

export default App;
