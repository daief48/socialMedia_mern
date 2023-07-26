import React from 'react';
import "./Home.css";
import ProfileSide from '../../componets/ProfileSide/ProfileSide';
import PostSide from '../../componets/PostSide/PostSide';
const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide />
            <PostSide/>
            <div className="RightSide">Rightside</div>
        </div>
    )
}

export default Home
