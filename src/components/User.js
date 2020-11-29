import React, { useContext } from 'react';
import { userContext } from '../App';
import { setUserId } from '../context/authReducer';
import Profile from './Profile';

const User = () => {
    const user = useContext(userContext);

    const handleClick = () => {
        user.userDispatch(setUserId('supercomplexuserid'));
    };

    return (
        <div>
            <button onClick={handleClick}>ser userid</button>
            <Profile />
        </div>
    );
};

export default User;
