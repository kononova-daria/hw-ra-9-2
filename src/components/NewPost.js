import React from 'react';
import {useNavigate} from 'react-router-dom';
import Form from './Form';

export default function NewPost() {
  const navigate = useNavigate();
  const handleClose = () => navigate('/');

  const handleCreatePost = (text) => {
    if (!text) {
        handleClose();
      return;
    }

    fetch(`${process.env.REACT_APP_DATA_URL}posts`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({id: 0, text,}),
    }).then(() => handleClose());
  };

  return (
    <div className="form-container">
      <Form addPost={handleCreatePost} closePost={handleClose} />
    </div>
  );
}