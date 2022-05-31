import React from 'react'; 
import Post from './Post';

export default function Posts({data}) {
  return (
    <React.Fragment>
      {data.map((item) => <Post data={item} key={item.id}/>)} 
    </React.Fragment>
  );
}