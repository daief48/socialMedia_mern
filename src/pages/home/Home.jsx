import React from 'react';
import "./Home.css";
import ProfileSide from '../../componets/ProfileSide/ProfileSide';
import PostSide from '../../componets/PostSide/PostSide';
import RightSide from '../../componets/RightSide/RightSide';
const Home = () => {
    return (
        <div className='Home'>
            <ProfileSide />
            <PostSide/>
            <RightSide/>
        </div>
    )
}

export default Home
