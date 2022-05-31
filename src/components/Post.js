import React from 'react'; 
import {useNavigate} from 'react-router-dom';
import moment from 'moment';

export default function Post({data}) {
  const navigate = useNavigate();
  const handleClickPost = () => navigate(`/posts/${data.id}`);

  return (
    <div className="post-container" onClick={handleClickPost}>
      <div className="post-header">
        <div className="post-avatar"></div>
        <div className="post-information">
          <div className="post-name">Имя Фамилия</div>
          <div className="post-time">{data?.created ? moment(data.created).fromNow() : null}</div>
        </div>
      </div>
      <div className="post-content">
        <span>{data?.text ? data.text : null}</span>
      </div>
    </div>
  );
}