import React, {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import useJsonFetch from './useJsonFetch';
import Post from './Post';
import Form from './Form';

export default function PostCard() {
  const {id} = useParams();
  const [isEdit, setEdit] = useState(false);
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}posts/`);

  const navigate = useNavigate();
  const handleClose = () => navigate('/');
  const handleCloseEdit = () => {
    navigate(`/posts/${id}`);
    changeStatus();
  };

  const findPost = () => data.find((item) => Number(item.id)=== Number(id));
    
  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_DATA_URL}posts/${id}`, {
       method: 'DELETE',
       headers: {'Content-Type': 'application/json',},
    }).then(() => handleClose());
  };

  const changeStatus = () => setEdit(!isEdit);

  const handleSubmit = (text) => {
    fetch(`${process.env.REACT_APP_DATA_URL}posts/`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json',},
      body: JSON.stringify({id: Number(id), text}),
    }).then(() => handleCloseEdit());
  };

  return (
    <div className="post-card">
      {isLoading && <div className="loading-container"><progress/></div>}
      {error && <div>{error}</div>}
      {data && !isLoading && (
        <div className="post-data">
          {isEdit && (<div className="edit-page"><Form data={findPost()} savePost={handleSubmit} closePost={handleCloseEdit}/></div>)}
          {!isEdit && (
            <React.Fragment>
              <button className="close-btn btn" type="button" onClick={handleClose}>X</button>
              <Post data={findPost()}/>
              <div className="form-btn-container">
                <button className="del-btn btn" type="button" onClick={handleDelete}>Удалить</button>
                <button className="edit-btn btn" type="button" onClick={changeStatus}>Редактировать</button>
              </div>
            </React.Fragment>
          )}
        </div>
      )}
    </div>
   );
}