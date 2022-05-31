import React from 'react';
import useJsonFetch from './useJsonFetch';
import Posts from './Posts';

export default function HomePage() {
  const [data, isLoading, error] = useJsonFetch(`${process.env.REACT_APP_DATA_URL}posts`);

 return (
    <div className="posts-container">
       {isLoading && <progress/>}
       {error && <div> {error} </div>}
       {data && !isLoading && (<div className="posts">{data.length && <Posts data={data}/>}</div>)}
    </div>
 );
}