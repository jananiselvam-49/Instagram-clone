import React, { useEffect, useState } from 'react'
import './Stories.css'
import { Link } from "react-router-dom"; 

function Stories() {
  const [Story, setStory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Stories")
    .then((response) => response.json())
    .then((data) => setStory(data))
    .catch((err) => console.log(err));
  }, []
  )

  const sto = Story.map((s, i) => (
  <Link 
    to="/Viewstory"
    state={{ startIndex: i }}   // 🔥 THIS LINE IMPORTANT
    key={s.id}
    style={{ textDecoration: "none", color: "white" }}
  >
    <div className="imgcont">
      <div className="story-ring">
        <img src={s.user.profile_pic} alt="profile" className="story-img" />
      </div>
      <p>
        {s.user.username}
      </p>
    </div>
  </Link>
))

  return (
    <div className='story'>
      {sto}
    </div>
  )
}

export default Stories