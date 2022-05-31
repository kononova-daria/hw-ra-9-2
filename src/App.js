import './App.css';
import React from 'react';
import{BrowserRouter as Router, NavLink, Route, Routes} from'react-router-dom';
import HomePage from './components/HomePage';
import NewPost from './components/NewPost';
import PostCard from './components/PostCard';

export default function App() {
  return (
    <div className="main-page">
      <Router>
        <div className="container-btn-create">
          <NavLink to="posts/new"><div className="btn-create"><span>Создать пост</span></div></NavLink>
        </div>
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage/>}/>
            <Route path="/posts/new" element={<NewPost/>}/>
            <Route path="/posts/:id" element={<PostCard/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

