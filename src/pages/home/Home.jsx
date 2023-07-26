import React from 'react';
import "./Home.css";
import ProfileSide from '../../componets/ProfileSide/ProfileSide';
const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide />
            <div className="postSide">Posts</div>
            <div className="RightSide">Rightside</div>
        </div>
    )
}

export default Home
