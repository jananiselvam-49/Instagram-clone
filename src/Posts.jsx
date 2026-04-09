import React from 'react'
import {useState,useEffect} from 'react'
import './Posts.css'

function Posts() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/posts')
        .then((response)=>response.json())
        .then(((data)=>setPosts(data)))
        .catch(err => console.log(err));
    },[])

    
    

    const variables = posts.map((post)=>(
    <div className='entirepost' key={post.id}>
    <div className='pronam'>
      <img className='dpp' src={post.user.profile_pic} alt="" />
      <h3>{post.user.username}</h3>
    </div>
      <div>
        <img className='postimg' src={post.image} alt="" />
        <div >
        <div>
          <i className="icon bi bi-heart"></i><span>{post.likes}</span>
         <i className="icon bi bi-chat"></i>
          <i className="icon bi bi-send"></i>
        </div>

        <span className='postername'>{post.user.username}</span>
          <span className='desc'>{  post.caption}</span>
          </div>
         
      </div>
      </div>));
 
 
 return (
    <div>
      {posts.length > 0 ? (<div> {variables} </div>) : (<div>Loading...</div>) } 
    </div>
  )
}

export default Posts

// npx json-server --watch db.json --port 3000