import React, { useState } from "react";
import "./Form.css";

const Form = props => {
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    email: ""
  });
  const handleChanges = e => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };
  const submitForm = e => {
    e.preventDefault();
    props.addMember(newMember);
    setNewMember({
      name: "",
      role: "",
      email: ""
    });
  };
  return (
    <div className="form-box">
      <h1>New Member</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          placeholder="New Member Name"
          value={newMember.name}
        />
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          name="role"
          onChange={handleChanges}
          placeholder="New Member Role"
          value={newMember.role}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChanges}
          placeholder="New Member Email"
          value={newMember.email}
        />
        <button type="submit">Add Team Member</button>
      </form>
    </div>
  );
};

export default Form;
