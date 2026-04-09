import React, { useEffect, useState } from 'react'
import './Suggestions.css'

function Suggestions() {

  const [profile, setProfile] = useState(null);
  const [suggest, setSuggest] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/profile')
      .then((response) => response.json())
      .then((data) => setProfile(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3000/suggestions')
      .then((response) => response.json())
      .then((data) => setSuggest(data))
      .catch((err) => console.log(err));
  }, [])
  const su = suggest.map((suggestions) => (<div key={suggestions.id}>

    <div className='container1'>
      <div className='photo'>
        <img src={suggestions.profile_pic} alt="" />
      </div>
      <div className='detail'>
        <p className='para'>{suggestions.accountname}</p>
        <p>{suggestions.username}</p>
      </div>
      <p className='switch'>Follow</p>
    </div>
  </div>))
  if (!profile) {
    return <div>Loading...</div>;
  }
  return (
    <div className='suggestioncontainer'>
      <div className='container1'>
        <div className='photo'>
          <img src={profile.profile_pic} alt="" />
        </div>
        <div className='detail'>
          <p className='para'>{profile.accountname}</p>
          <p>{profile.username}</p>
        </div>
        <p className='switch'>Switch</p>
      </div>
      <p className='suggest'>Suggested for you</p>

      <div>{su}</div>
    </div>
  );
}

export default Suggestions