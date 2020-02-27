import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = props => {
  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    email: ""
  });
  useEffect(() => {
    if (props.memberToEdit) {
      setNewMember({
        id: props.memberToEdit.id,
        name: props.memberToEdit.name,
        role: props.memberToEdit.role,
        email: props.memberToEdit.email
      });
    }
  }, [props.memberToEdit]);
  const handleChanges = e => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };
  const submitForm = e => {
    e.preventDefault();
    if (props.memberToEdit.id >= 0) {
      props.editMember(newMember);
    } else {
      props.addMember(newMember);
    }
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
          value={newMember.name}
          onChange={handleChanges}
          placeholder="New Member Name"
        />
        <label htmlFor="role">Role</label>
        <input
          id="role"
          type="text"
          name="role"
          value={newMember.role}
          onChange={handleChanges}
          placeholder="New Member Role"
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          value={newMember.email}
          onChange={handleChanges}
          placeholder="New Member Email"
        />
        <button type="submit">Add Team Member</button>
      </form>
    </div>
  );
};

export default Form;
