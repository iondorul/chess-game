import React, { useState } from "react";
import "./AddUserModal.css";

const AddUserModal = ({ isOpen, onClose, onSave }) => {
  const [inputValue, setInputValue] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(inputValue);
    setInputValue("");
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add User</h2>
        <input
          type="text"
          placeholder="Enter username"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddUserModal;
